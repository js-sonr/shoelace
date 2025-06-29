import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuBreadcrumb from './breadcrumb.js';

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ['color-contrast'];

describe('<nu-breadcrumb>', () => {
  let el: NuBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<NuBreadcrumb>(html`
        <nu-breadcrumb>
          <nu-breadcrumb-item>Catalog</nu-breadcrumb-item>
          <nu-breadcrumb-item>Clothing</nu-breadcrumb-item>
          <nu-breadcrumb-item>Women's</nu-breadcrumb-item>
          <nu-breadcrumb-item>Shirts &amp; Tops</nu-breadcrumb-item>
        </nu-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should render sl-icon as separator', () => {
      expect(el.querySelectorAll('nu-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('nu-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<NuBreadcrumb>(html`
        <nu-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <nu-breadcrumb-item>First</nu-breadcrumb-item>
          <nu-breadcrumb-item>Second</nu-breadcrumb-item>
          <nu-breadcrumb-item>Third</nu-breadcrumb-item>
        </nu-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the sl-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('nu-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<NuBreadcrumb>(html`
        <nu-breadcrumb>
          <nu-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </nu-breadcrumb-item>
          <nu-breadcrumb-item>First</nu-breadcrumb-item>
          <nu-breadcrumb-item>Second</nu-breadcrumb-item>
          <nu-breadcrumb-item>Third</nu-breadcrumb-item>
        </nu-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<NuBreadcrumb>(html`
        <nu-breadcrumb>
          <nu-breadcrumb-item>First</nu-breadcrumb-item>
          <nu-breadcrumb-item>Second</nu-breadcrumb-item>
          <nu-breadcrumb-item>Third</nu-breadcrumb-item>
          <nu-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </nu-breadcrumb-item>
        </nu-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
