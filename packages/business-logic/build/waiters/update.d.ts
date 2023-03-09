import { Waiter } from "@partiaf/types";
type PartialWaiter = Partial<Waiter>;
export declare const updateWaiter: (uuid: string, data: PartialWaiter) => Promise<Waiter | Error>;
export {};
