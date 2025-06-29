import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type NuRelativeTime from './relative-time.js';

interface NuRelativeTimeTestCase {
  date: Date;
  expectedOutput: string;
}

const extractTimeElement = (relativeTime: NuRelativeTime): HTMLTimeElement | null => {
  return relativeTime.shadowRoot?.querySelector('time') || null;
};

const expectFormattedRelativeTimeToBe = async (relativeTime: NuRelativeTime, expectedOutput: string): Promise<void> => {
  await relativeTime.updateComplete;
  const textContent = extractTimeElement(relativeTime)?.textContent;
  expect(textContent).to.equal(expectedOutput);
};

const createRelativeTimeWithDate = async (relativeDate: Date): Promise<NuRelativeTime> => {
  const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
    <nu-relative-time lang="en-US"></nu-relative-time>
  `);
  relativeTime.date = relativeDate;
  return relativeTime;
};

const minuteInSeconds = 60_000;
const hourInSeconds = minuteInSeconds * 60;
const dayInSeconds = hourInSeconds * 24;
const weekInSeconds = dayInSeconds * 7;
const monthInSeconds = dayInSeconds * 30;
const nonLeapYearInSeconds = dayInSeconds * 356;

const currentTime = new Date('2022-10-30T15:22:10.100Z');
const yesterday = new Date(currentTime.getTime() - dayInSeconds);
const testCases: NuRelativeTimeTestCase[] = [
  {
    date: new Date(currentTime.getTime() - minuteInSeconds),
    expectedOutput: '1 minute ago'
  },
  {
    date: new Date(currentTime.getTime() - hourInSeconds),
    expectedOutput: '1 hour ago'
  },
  {
    date: yesterday,
    expectedOutput: 'yesterday'
  },
  {
    date: new Date(currentTime.getTime() - 4 * dayInSeconds),
    expectedOutput: '4 days ago'
  },
  {
    date: new Date(currentTime.getTime() - weekInSeconds),
    expectedOutput: 'last week'
  },
  {
    date: new Date(currentTime.getTime() - monthInSeconds),
    expectedOutput: 'last month'
  },
  {
    date: new Date(currentTime.getTime() - nonLeapYearInSeconds),
    expectedOutput: 'last year'
  },
  {
    date: new Date(currentTime.getTime() + minuteInSeconds),
    expectedOutput: 'in 1 minute'
  }
];

describe('sl-relative-time', () => {
  it('should pass accessibility tests', async () => {
    const relativeTime = await createRelativeTimeWithDate(currentTime);

    await expect(relativeTime).to.be.accessible();
  });

  describe('handles time correctly', () => {
    let clock: sinon.SinonFakeTimers | null = null;

    beforeEach(() => {
      clock = sinon.useFakeTimers(currentTime);
    });

    afterEach(() => {
      clock?.restore();
    });

    testCases.forEach(testCase => {
      it(`shows the correct relative time given a Date object: ${testCase.expectedOutput}`, async () => {
        const relativeTime = await createRelativeTimeWithDate(testCase.date);

        await expectFormattedRelativeTimeToBe(relativeTime, testCase.expectedOutput);
      });

      it(`shows the correct relative time given a String object: ${testCase.expectedOutput}`, async () => {
        const dateString = testCase.date.toISOString();

        const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
          <nu-relative-time lang="en-US" date="${dateString}"></nu-relative-time>
        `);

        await expectFormattedRelativeTimeToBe(relativeTime, testCase.expectedOutput);
      });
    });

    it('always shows numeric if requested via numeric property', async () => {
      const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
        <nu-relative-time lang="en-US" numeric="always"></nu-relative-time>
      `);
      relativeTime.date = yesterday;

      await expectFormattedRelativeTimeToBe(relativeTime, '1 day ago');
    });

    it('shows human readable form if appropriate and numeric property is auto', async () => {
      const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
        <nu-relative-time lang="en-US" numeric="auto"></nu-relative-time>
      `);
      relativeTime.date = yesterday;

      await expectFormattedRelativeTimeToBe(relativeTime, 'yesterday');
    });

    it('shows the set date with the proper attributes at the time object', async () => {
      const relativeTime = await createRelativeTimeWithDate(yesterday);

      await relativeTime.updateComplete;
      const timeElement = extractTimeElement(relativeTime);
      expect(timeElement?.dateTime).to.equal(yesterday.toISOString());
    });

    it('allows to use a short form of the unit', async () => {
      const twoYearsAgo = new Date(currentTime.getTime() - 2 * nonLeapYearInSeconds);
      const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
        <nu-relative-time lang="en-US" numeric="always" format="short"></nu-relative-time>
      `);
      relativeTime.date = twoYearsAgo;

      await expectFormattedRelativeTimeToBe(relativeTime, '2 yr. ago');
    });

    it('allows to use a long form of the unit', async () => {
      const twoYearsAgo = new Date(currentTime.getTime() - 2 * nonLeapYearInSeconds);
      const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
        <nu-relative-time lang="en-US" numeric="always" format="long"></nu-relative-time>
      `);
      relativeTime.date = twoYearsAgo;

      await expectFormattedRelativeTimeToBe(relativeTime, '2 years ago');
    });

    it('is formatted according to the requested locale', async () => {
      const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
        <nu-relative-time lang="de-DE" numeric="auto"></nu-relative-time>
      `);
      relativeTime.date = yesterday;

      await expectFormattedRelativeTimeToBe(relativeTime, 'gestern');
    });

    it('keeps the component in sync if requested', async () => {
      const relativeTime = await createRelativeTimeWithDate(yesterday);
      relativeTime.sync = true;

      await expectFormattedRelativeTimeToBe(relativeTime, 'yesterday');

      clock?.tick(dayInSeconds);

      await expectFormattedRelativeTimeToBe(relativeTime, '2 days ago');
    });
  });

  it('does not display a time element on invalid time string', async () => {
    const invalidDateString = 'thisIsNotATimeString';

    const relativeTime: NuRelativeTime = await fixture<NuRelativeTime>(html`
      <nu-relative-time lang="en-US" date="${invalidDateString}"></nu-relative-time>
    `);

    await relativeTime.updateComplete;
    expect(extractTimeElement(relativeTime)).to.be.null;
  });
});
