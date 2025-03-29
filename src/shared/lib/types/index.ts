type SearchParamsRecord = Record<string, string | string[] | undefined>;

type SearchParams<T extends SearchParamsRecord = SearchParamsRecord> = {
    searchParams: Promise<T>;
};

type QueryParamsRecord = Record<string, string | string[]>;

type QueryParams<T extends QueryParamsRecord = QueryParamsRecord> = {
    params: Promise<T>;
};

export type { SearchParams, QueryParams };
