import '../../../dist/nebula.js';
import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import type NuAvatar from './avatar.js';

// The default avatar background just misses AA contrast, but the next step up is way too dark. Since avatars aren't
// used to display text, we're going to relax this rule.
const ignoredRules = ['color-contrast'];

describe('<nu-avatar>', () => {
  let el: NuAvatar;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<NuAvatar>(html` <nu-avatar label="Avatar"></nu-avatar> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should default to circle styling', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(el.getAttribute('shape')).to.eq('circle');
      expect(part.classList.value.trim()).to.eq('avatar avatar--circle');
    });
  });

  describe('when provided an image and label parameter', () => {
    const image = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    const label = 'Small transparent square';
    before(async () => {
      el = await fixture<NuAvatar>(html`<nu-avatar image="${image}" label="${label}"></nu-avatar>`);
    });

    it('should pass accessibility tests', async () => {
      /**
       * The image element itself is ancillary, because it's parent container contains the
       * aria-label which dictates what "sl-avatar" is. This also implies that label text will
       * resolve to "" when not provided and ignored by readers. This is why we use alt="" on
       * the image element to pass accessibility.
       * https://html.spec.whatwg.org/multipage/images.html#ancillary-images
       */
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('renders "image" part, with src and a role of presentation', () => {
      const part = el.shadowRoot!.querySelector('[part~="image"]')!;

      expect(part.getAttribute('src')).to.eq(image);
    });

    it('renders the label attribute in the "base" part', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;

      expect(part.getAttribute('aria-label')).to.eq(label);
    });
  });

  describe('when provided initials parameter', () => {
    const initials = 'SL';
    before(async () => {
      el = await fixture<NuAvatar>(html`<nu-avatar initials="${initials}" label="Avatar"></nu-avatar>`);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('renders "initials" part, with initials as the text node', () => {
      const part = el.shadowRoot!.querySelector<HTMLElement>('[part~="initials"]')!;

      expect(part.innerText).to.eq(initials);
    });
  });

  describe('when image is present, the initials or icon part should not render', () => {
    const initials = 'SL';
    const image = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    const label = 'Small transparent square';
    before(async () => {
      el = await fixture<NuAvatar>(
        html`<nu-avatar image="${image}" label="${label}" initials="${initials}"></nu-avatar>`
      );
    });

    it('should pass accessibility tests', async () => {
      /**
       * The image element itself is ancillary, because it's parent container contains the
       * aria-label which dictates what "sl-avatar" is. This also implies that label text will
       * resolve to "" when not provided and ignored by readers. This is why we use alt="" on
       * the image element to pass accessibility.
       * https://html.spec.whatwg.org/multipage/images.html#ancillary-images
       */
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('renders "image" part, with src and a role of presentation', () => {
      const part = el.shadowRoot!.querySelector('[part~="image"]')!;

      expect(part.getAttribute('src')).to.eq(image);
    });

    it('should not render the initials part', () => {
      const part = el.shadowRoot!.querySelector<HTMLElement>('[part~="initials"]')!;

      expect(part).to.not.exist;
    });

    it('should not render the icon part', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=icon]')!;

      expect(slot).to.not.exist;
    });
  });

  ['square', 'rounded', 'circle'].forEach(shape => {
    describe(`when passed a shape attribute ${shape}`, () => {
      before(async () => {
        el = await fixture<NuAvatar>(html`<nu-avatar shape="${shape}" label="Shaped avatar"></nu-avatar>`);
      });

      it('should pass accessibility tests', async () => {
        await expect(el).to.be.accessible({ ignoredRules });
      });

      it('appends the appropriate class on the "base" part', () => {
        const part = el.shadowRoot!.querySelector('[part~="base"]')!;

        expect(el.getAttribute('shape')).to.eq(shape);
        expect(part.classList.value.trim()).to.eq(`avatar avatar--${shape}`);
      });
    });
  });

  describe('when passed a <span>, on slot "icon"', () => {
    before(async () => {
      el = await fixture<NuAvatar>(html`<nu-avatar label="Avatar"><span slot="icon">random content</span></nu-avatar>`);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=icon]')!;
      const childNodes = slot.assignedNodes({ flatten: true }) as HTMLElement[];

      expect(childNodes.length).to.eq(1);

      const span = childNodes[0];
      expect(span.innerHTML).to.eq('random content');
    });
  });

  it('should not render the image when the image fails to load', async () => {
    el = await fixture<NuAvatar>(html`<nu-avatar></nu-avatar>`);
    el.image = 'bad_image';

    await aTimeout(0);

    await waitUntil(() => el.shadowRoot!.querySelector('img') === null);
    expect(el.shadowRoot!.querySelector('img')).to.be.null;
  });

  it('should show a valid image after being passed an invalid image initially', async () => {
    el = await fixture<NuAvatar>(html`<nu-avatar></nu-avatar>`);

    await aTimeout(0);
    await waitUntil(() => el.shadowRoot!.querySelector('img') === null);

    el.image = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('img')).to.exist;
  });
});
