export interface InitMongooseOptions {
    mongoUrl: string;
}
export interface InitDataSourcesOptions {
    mongoose: InitMongooseOptions;
}
export declare const initDataSources: ({ mongoose }: InitDataSourcesOptions) => Promise<void>;
