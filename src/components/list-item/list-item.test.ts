import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type NuListItem from './list-item.js';

describe('<nu-list-item>', () => {
  it('should render a component', async () => {
    const el = await fixture<NuListItem>(html` <nu-list-item></nu-list-item> `);

    expect(el).to.exist;
  });

  it('should be accessible', async () => {
    const el = await fixture<NuListItem>(html` <nu-list-item title="Test Item"></nu-list-item> `);
    await expect(el).to.be.accessible();
  });

  it('should display title and description', async () => {
    const el = await fixture<NuListItem>(html`
      <nu-list-item title="Test Transaction" description="Payment to merchant"></nu-list-item>
    `);

    expect(el.title).to.equal('Test Transaction');
    expect(el.description).to.equal('Payment to merchant');

    const titleElement = el.shadowRoot!.querySelector('.list-item__title');
    const descriptionElement = el.shadowRoot!.querySelector('.list-item__description');

    expect(titleElement?.textContent?.trim()).to.equal('Test Transaction');
    expect(descriptionElement?.textContent?.trim()).to.equal('Payment to merchant');
  });

  it('should display amount and currency', async () => {
    const el = await fixture<NuListItem>(html`
      <nu-list-item title="Payment" amount="-100.00" currency="USDC"></nu-list-item>
    `);

    const amountElement = el.shadowRoot!.querySelector('.list-item__amount');
    const currencyElement = el.shadowRoot!.querySelector('.amount-currency');

    expect(amountElement).to.exist;
    expect(currencyElement?.textContent?.trim()).to.equal('USDC');
  });

  it('should display status indicator', async () => {
    const el = await fixture<NuListItem>(html` <nu-list-item title="Transaction" status="pending"></nu-list-item> `);

    const statusElement = el.shadowRoot!.querySelector('.list-item__status--pending');
    expect(statusElement).to.exist;
  });

  it('should emit click event when clicked', async () => {
    const el = await fixture<NuListItem>(html` <nu-list-item title="Clickable Item" clickable></nu-list-item> `);

    const clickSpy = sinon.spy();
    el.addEventListener('nu-item-click', clickSpy);

    el.click();
    await el.updateComplete;

    expect(clickSpy.calledOnce).to.be.true;
  });

  it('should apply correct styling for different types', async () => {
    const transactionEl = await fixture<NuListItem>(html`
      <nu-list-item type="transaction" title="Transaction"></nu-list-item>
    `);
    const balanceEl = await fixture<NuListItem>(html` <nu-list-item type="balance" title="Balance"></nu-list-item> `);

    const transactionClass = transactionEl.shadowRoot!.querySelector('.list-item--transaction');
    const balanceClass = balanceEl.shadowRoot!.querySelector('.list-item--balance');

    expect(transactionClass).to.exist;
    expect(balanceClass).to.exist;
  });
});
