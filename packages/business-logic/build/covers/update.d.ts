import { Cover } from "@partiaf/types";
type PartialCover = Partial<Cover>;
export declare const updateCover: (data: PartialCover) => Promise<Cover | Error>;
export {};
