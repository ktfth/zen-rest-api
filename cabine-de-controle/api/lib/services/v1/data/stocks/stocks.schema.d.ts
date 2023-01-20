import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../../../declarations';
export declare const v1DataStocksSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
}>;
export type V1DataStocks = Static<typeof v1DataStocksSchema>;
export declare const v1DataStocksResolver: import("@feathersjs/schema").Resolver<{
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1DataStocksExternalResolver: import("@feathersjs/schema").Resolver<{
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1DataStocksDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
}>, ["stocks"]>;
export type V1DataStocksData = Static<typeof v1DataStocksDataSchema>;
export declare const v1DataStocksDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const v1DataStocksDataResolver: import("@feathersjs/schema").Resolver<{
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1DataStocksPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
}>, ["stocks"]>>;
export type V1DataStocksPatch = Static<typeof v1DataStocksPatchSchema>;
export declare const v1DataStocksPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const v1DataStocksPatchResolver: import("@feathersjs/schema").Resolver<{
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1DataStocksQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
}>, ["id", "stocks"]>;
export declare const v1DataStocksQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "stocks")[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
    }>>>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type V1DataStocksQuery = Static<typeof v1DataStocksQuerySchema>;
export declare const v1DataStocksQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const v1DataStocksQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        stocks?: number | undefined;
    };
    $select: ("id" | "stocks")[];
    $or: {
        id?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        stocks?: {
            values: {
                volume?: string | undefined;
                high: string;
                low: string;
                open: string;
                close: string;
                datetime: string;
            }[];
            meta: {
                symbol: string;
                type: string;
                interval: string;
                currency_base: string;
                currency_quote: string;
            };
            status: string;
        } | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
    }[];
    $and: {
        id?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        stocks?: {
            values: {
                volume?: string | undefined;
                high: string;
                low: string;
                open: string;
                close: string;
                datetime: string;
            }[];
            meta: {
                symbol: string;
                type: string;
                interval: string;
                currency_base: string;
                currency_quote: string;
            };
            status: string;
        } | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
    }[];
}> & {
    id?: number | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
} & {}, HookContext<any>>;
