export type NuRegisterSuccessEvent = CustomEvent<{
    credential: {
        id: string;
        rawId: string;
        response: {
            attestationObject: string;
            clientDataJSON: string;
        };
        type: string;
    };
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-register-success': NuRegisterSuccessEvent;
    }
}
