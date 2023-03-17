interface dataProps {
    uuid: string;
    url: string;
}
export declare const deleteImageStore: (data: dataProps) => Promise<Boolean | Error>;
export {};
