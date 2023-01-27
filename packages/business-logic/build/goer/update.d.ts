import { Goer } from "@partiaf/types";
type PartialGoer = Partial<Goer>;
export declare const updateGoer: (uuid: string, data: PartialGoer) => Promise<Goer | Error>;
export {};
