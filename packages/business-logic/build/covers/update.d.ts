import { Cover } from "@partiaf/types";
type PartialCover = Partial<Cover>;
export declare const updateCover: (uuid: string, data: PartialCover) => Promise<Cover | Error>;
export {};
