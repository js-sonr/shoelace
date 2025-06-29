export type NuLoginSuccessEvent = CustomEvent<{
  credential: {
    id: string;
    rawId: string;
    response: {
      authenticatorData: string;
      clientDataJSON: string;
      signature: string;
      userHandle: string | null;
    };
    type: string;
  };
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-login-success': NuLoginSuccessEvent;
  }
}