import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type NuListView from './list-view.js';
import type { ActivityItem } from './list-view.component.js';

describe('<nu-list-view>', () => {
  const mockItems: ActivityItem[] = [
    {
      id: '1',
      type: 'transaction',
      timestamp: new Date('2024-01-15T10:30:00Z'),
      title: 'Sent USDC',
      description: 'To 0x1234...5678',
      amount: '-100.00',
      currency: 'USDC',
      status: 'completed'
    },
    {
      id: '2',
      type: 'balance',
      timestamp: new Date('2024-01-15T09:00:00Z'),
      title: 'Account Balance Updated',
      amount: '1,234.56',
      currency: 'USDC',
      status: 'completed'
    }
  ];

  it('should render a component', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view></nu-list-view> `);

    expect(el).to.exist;
  });

  it('should be accessible', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view></nu-list-view> `);
    await expect(el).to.be.accessible();
  });

  it('should display empty state when no items', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view></nu-list-view> `);

    const emptyState = el.shadowRoot!.querySelector('.list-view--empty');
    expect(emptyState).to.exist;
  });

  it('should display loading state', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view loading></nu-list-view> `);

    const loadingState = el.shadowRoot!.querySelector('.list-view--loading');
    expect(loadingState).to.exist;
  });

  it('should display items when provided', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view .items=${mockItems}></nu-list-view> `);

    const listItems = el.shadowRoot!.querySelectorAll('nu-list-item');
    expect(listItems.length).to.equal(2);
  });

  it('should sort items by date by default', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view .items=${mockItems}></nu-list-view> `);

    expect(el.sortBy).to.equal('date');
    // Most recent first (2024-01-15T10:30:00Z should come before 2024-01-15T09:00:00Z)
    const firstItem = el.shadowRoot!.querySelector('nu-list-item');
    expect(firstItem?.title).to.equal('Sent USDC');
  });

  it('should emit sort change event', async () => {
    const el = await fixture<NuListView>(html` <nu-list-view .items=${mockItems}></nu-list-view> `);

    const sortSpy = sinon.spy();
    el.addEventListener('nu-sort-change', sortSpy);

    el.sortBy = 'amount';
    await el.updateComplete;

    expect(sortSpy.calledOnce).to.be.true;
  });

  it('should group items when groupBy is set', async () => {
    const el = await fixture<NuListView>(html` 
      <nu-list-view .items=${mockItems} group-by="type"></nu-list-view> 
    `);

    const groupHeaders = el.shadowRoot!.querySelectorAll('.group-header');
    expect(groupHeaders.length).to.be.greaterThan(0);
  });

  it('should filter items based on filterText', async () => {
    const el = await fixture<NuListView>(html` 
      <nu-list-view .items=${mockItems} filter-text="USDC"></nu-list-view> 
    `);

    await el.updateComplete;
    const listItems = el.shadowRoot!.querySelectorAll('nu-list-item');
    expect(listItems.length).to.equal(2); // Both items contain USDC
  });

  it('should handle item selection', async () => {
    const el = await fixture<NuListView>(html` 
      <nu-list-view .items=${mockItems} multi-select></nu-list-view> 
    `);

    const selectSpy = sinon.spy();
    el.addEventListener('nu-item-select', selectSpy);

    // Simulate item selection (this would normally come from clicking a list item)
    const handleItemSelect = (el as any).handleItemSelect.bind(el);
    handleItemSelect('1');

    expect(selectSpy.calledOnce).to.be.true;
    expect(selectSpy.getCall(0).args[0].detail.itemId).to.equal('1');
  });

  it('should render load more button when infinite scroll is enabled', async () => {
    const manyItems = Array.from({ length: 30 }, (_, i) => ({
      ...mockItems[0],
      id: `item-${i}`,
      title: `Item ${i}`
    }));

    const el = await fixture<NuListView>(html` 
      <nu-list-view .items=${manyItems} infinite-scroll page-size="10"></nu-list-view> 
    `);

    await el.updateComplete;
    const loadMoreButton = el.shadowRoot!.querySelector('nu-button');
    expect(loadMoreButton).to.exist;
  });

  it('should emit load more event when load more button is clicked', async () => {
    const manyItems = Array.from({ length: 30 }, (_, i) => ({
      ...mockItems[0],
      id: `item-${i}`,
      title: `Item ${i}`
    }));

    const el = await fixture<NuListView>(html` 
      <nu-list-view .items=${manyItems} infinite-scroll page-size="10"></nu-list-view> 
    `);

    const loadMoreSpy = sinon.spy();
    el.addEventListener('nu-load-more', loadMoreSpy);

    const loadMoreButton = el.shadowRoot!.querySelector('nu-button');
    loadMoreButton?.click();

    expect(loadMoreSpy.calledOnce).to.be.true;
  });
});
