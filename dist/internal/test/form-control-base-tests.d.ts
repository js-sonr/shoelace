import type { NebulaFormControl } from '../nebula-element.js';
/** Runs a set of generic tests for Shoelace form controls */
export declare function runFormControlBaseTests<T extends NebulaFormControl = NebulaFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
