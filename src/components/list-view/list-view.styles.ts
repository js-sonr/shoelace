import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .list-view {
    display: flex;
    flex-direction: column;
    gap: var(--nu-spacing-2x-small);
  }

  .list-view--loading,
  .list-view--empty {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-state,
  .empty-state {
    text-align: center;
    color: var(--nu-color-neutral-500);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--nu-spacing-small);
  }

  .loading-state nu-spinner {
    --indicator-color: var(--nu-color-primary-600);
    --size: 2rem;
  }

  .loading-state p,
  .empty-state p {
    margin: 0;
    font-size: var(--nu-font-size-medium);
  }

  .list-content {
    display: flex;
    flex-direction: column;
    gap: var(--nu-spacing-small);
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: var(--nu-spacing-x-small);
  }

  .group-header {
    padding: var(--nu-spacing-small) var(--nu-spacing-medium);
    background-color: var(--nu-color-neutral-50);
    border-radius: var(--nu-border-radius-medium);
    border-bottom: 1px solid var(--nu-color-neutral-200);
  }

  .group-header h3 {
    margin: 0;
    font-size: var(--nu-font-size-small);
    font-weight: var(--nu-font-weight-semibold);
    color: var(--nu-color-neutral-700);
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .group-items {
    display: flex;
    flex-direction: column;
    gap: var(--nu-spacing-2x-small);
  }

  /* Load more button */
  nu-button {
    margin-top: var(--nu-spacing-medium);
    align-self: center;
  }

  /* Dark theme */
  :host([data-theme='dark']) .group-header {
    background-color: var(--nu-color-neutral-800);
    border-bottom-color: var(--nu-color-neutral-700);
  }

  :host([data-theme='dark']) .group-header h3 {
    color: var(--nu-color-neutral-300);
  }

  :host([data-theme='dark']) .loading-state,
  :host([data-theme='dark']) .empty-state {
    color: var(--nu-color-neutral-400);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .group-header {
      padding: var(--nu-spacing-x-small) var(--nu-spacing-small);
    }

    .group-header h3 {
      font-size: var(--nu-font-size-x-small);
    }
  }
`;
