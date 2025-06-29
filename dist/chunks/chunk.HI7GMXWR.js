import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/list-item/list-item.styles.ts
var list_item_styles_default = i`
  :host {
    display: block;
  }

  .list-item {
    display: flex;
    align-items: flex-start;
    gap: var(--nu-spacing-medium);
    padding: var(--nu-spacing-medium);
    background-color: var(--nu-color-neutral-0);
    border: 1px solid var(--nu-color-neutral-200);
    border-radius: var(--nu-border-radius-medium);
    transition:
      var(--nu-transition-fast) background-color,
      var(--nu-transition-fast) border-color,
      var(--nu-transition-fast) box-shadow;
    position: relative;
  }

  .list-item--clickable {
    cursor: pointer;
  }

  .list-item--clickable:hover {
    background-color: var(--nu-color-neutral-50);
    border-color: var(--nu-color-neutral-300);
  }

  .list-item--clickable:focus-visible {
    outline: var(--nu-focus-ring);
    outline-offset: var(--nu-focus-ring-offset);
  }

  .list-item--selected {
    background-color: var(--nu-color-primary-50);
    border-color: var(--nu-color-primary-300);
    box-shadow: 0 0 0 1px var(--nu-color-primary-300);
  }

  .list-item--selected:hover {
    background-color: var(--nu-color-primary-100);
  }

  /* Type-specific styling */
  .list-item--transaction {
    border-left: 4px solid var(--nu-color-blue-500);
  }

  .list-item--balance {
    border-left: 4px solid var(--nu-color-green-500);
  }

  .list-item--event {
    border-left: 4px solid var(--nu-color-yellow-500);
  }

  /* Status-specific styling */
  .list-item--pending {
    opacity: 0.7;
  }

  .list-item--failed {
    border-left-color: var(--nu-color-danger-500);
  }

  .list-item__icon-container {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--nu-color-neutral-100);
    border-radius: var(--nu-border-radius-circle);
  }

  .list-item__icon {
    width: 20px;
    height: 20px;
    color: var(--nu-color-neutral-600);
  }

  .list-item--transaction .list-item__icon {
    color: var(--nu-color-blue-600);
  }

  .list-item--balance .list-item__icon {
    color: var(--nu-color-green-600);
  }

  .list-item--event .list-item__icon {
    color: var(--nu-color-yellow-600);
  }

  .list-item__content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--nu-spacing-x-small);
  }

  .list-item__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--nu-spacing-small);
  }

  .list-item__title-group {
    display: flex;
    align-items: center;
    gap: var(--nu-spacing-x-small);
    min-width: 0;
    flex: 1;
  }

  .list-item__title {
    font-weight: var(--nu-font-weight-semibold);
    font-size: var(--nu-font-size-medium);
    color: var(--nu-color-neutral-900);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item__status {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  .list-item__status nu-icon {
    width: 12px;
    height: 12px;
  }

  .list-item__status--pending nu-icon {
    color: var(--nu-color-warning-600);
  }

  .list-item__status--completed nu-icon {
    color: var(--nu-color-success-600);
  }

  .list-item__status--failed nu-icon {
    color: var(--nu-color-danger-600);
  }

  .list-item__amount-group {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--nu-spacing-3x-small);
    flex-shrink: 0;
  }

  .list-item__amount {
    display: flex;
    align-items: baseline;
    gap: var(--nu-spacing-2x-small);
    font-weight: var(--nu-font-weight-semibold);
    font-size: var(--nu-font-size-medium);
  }

  .list-item__amount--positive {
    color: var(--nu-color-success-700);
  }

  .list-item__amount--negative {
    color: var(--nu-color-danger-700);
  }

  .amount-currency {
    font-size: var(--nu-font-size-small);
    color: var(--nu-color-neutral-600);
    font-weight: var(--nu-font-weight-normal);
  }

  .list-item__timestamp {
    font-size: var(--nu-font-size-small);
    color: var(--nu-color-neutral-500);
    white-space: nowrap;
  }

  .list-item__description {
    font-size: var(--nu-font-size-small);
    color: var(--nu-color-neutral-600);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item__metadata {
    display: flex;
    flex-wrap: wrap;
    gap: var(--nu-spacing-small);
    margin-top: var(--nu-spacing-2x-small);
  }

  .metadata-item {
    display: flex;
    align-items: center;
    gap: var(--nu-spacing-3x-small);
    font-size: var(--nu-font-size-x-small);
    color: var(--nu-color-neutral-500);
  }

  .metadata-key {
    font-weight: var(--nu-font-weight-medium);
  }

  .metadata-value {
    color: var(--nu-color-neutral-700);
  }

  /* Dark theme */
  :host([data-theme='dark']) .list-item {
    background-color: var(--nu-color-neutral-900);
    border-color: var(--nu-color-neutral-700);
  }

  :host([data-theme='dark']) .list-item--clickable:hover {
    background-color: var(--nu-color-neutral-800);
    border-color: var(--nu-color-neutral-600);
  }

  :host([data-theme='dark']) .list-item--selected {
    background-color: var(--nu-color-primary-900);
    border-color: var(--nu-color-primary-600);
    box-shadow: 0 0 0 1px var(--nu-color-primary-600);
  }

  :host([data-theme='dark']) .list-item--selected:hover {
    background-color: var(--nu-color-primary-800);
  }

  :host([data-theme='dark']) .list-item__icon-container {
    background-color: var(--nu-color-neutral-800);
  }

  :host([data-theme='dark']) .list-item__icon {
    color: var(--nu-color-neutral-400);
  }

  :host([data-theme='dark']) .list-item__title {
    color: var(--nu-color-neutral-100);
  }

  :host([data-theme='dark']) .list-item__description {
    color: var(--nu-color-neutral-400);
  }

  :host([data-theme='dark']) .list-item__timestamp {
    color: var(--nu-color-neutral-500);
  }

  :host([data-theme='dark']) .amount-currency {
    color: var(--nu-color-neutral-400);
  }

  :host([data-theme='dark']) .metadata-item {
    color: var(--nu-color-neutral-500);
  }

  :host([data-theme='dark']) .metadata-value {
    color: var(--nu-color-neutral-300);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .list-item {
      padding: var(--nu-spacing-small);
      gap: var(--nu-spacing-small);
    }

    .list-item__icon-container {
      width: 32px;
      height: 32px;
    }

    .list-item__icon {
      width: 16px;
      height: 16px;
    }

    .list-item__header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--nu-spacing-2x-small);
    }

    .list-item__amount-group {
      align-items: flex-start;
      width: 100%;
    }

    .list-item__title {
      font-size: var(--nu-font-size-small);
    }

    .list-item__amount {
      font-size: var(--nu-font-size-small);
    }
  }

  /* Animation for adding/removing items */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .list-item {
    animation: slideIn 0.2s ease-out;
  }
`;

export {
  list_item_styles_default
};
