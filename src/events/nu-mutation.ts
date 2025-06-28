export type NuMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-mutation': NuMutationEvent;
  }
}
