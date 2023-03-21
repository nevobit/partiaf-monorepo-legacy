import { Store } from "@partiaf/types";
type PartialStore = Partial<Store>;
export declare const updateStore: (uuid: string, data: PartialStore) => Promise<Store | Error>;
export {};
