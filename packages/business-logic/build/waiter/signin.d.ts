import { Waiter } from "@partiaf/types";
type PartialWaiter = Partial<Waiter>;
interface WaiterSignin extends PartialWaiter {
    token: string;
}
export declare const waiterSignin: ({ username, code }: PartialWaiter) => Promise<WaiterSignin | Error>;
export {};
