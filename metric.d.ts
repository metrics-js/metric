declare class Metric {
    constructor(args: Metric.MetricOptions);

    name: Readonly<string>;
    description: Readonly<string>;
    value: Readonly<number | null>;
    type: Readonly<Metric.MetricType>;
    source: string | null;
    timestamp: Readonly<number | null>;
    /**
     * @deprecated Use `timestamp` instead.
     */
    time: Readonly<number | null>;
    labels: Readonly<Array<Metric.MetricLabel>>;
    meta: Readonly<unknown>;

    toJSON(): {
        name: string;
        description: string;
        timestamp: number | null;
        type: Metric.MetricType;
        value: number | null;
        labels: Array<Metric.MetricLabel>;
        time: number | null;
        meta: unknown;
    };
}

declare namespace Metric {
    /**
     * A hint of what type of metric this is. Each numeric value represents a different type of metric:
     *
     *  - `0`: `unknown`
     *  - `1`: `gauge`
     *  - `2`: `counter`
     *  - `3`: `state_set`
     *  - `4`: `info`
     *  - `5`: `cumulative histogram`
     *  - `6`: `gauge histogram`
     *  - `7`: `summary`
     */
    export type MetricType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    export type MetricLabel = {
        /**
         * The name must match the regular expression `[a-zA-Z0-9_]`.
         */
        name: string;
        value: string | number | boolean | null;
    };

    export type MetricOptions = {
        /**
         * The name must match the regular expression `[a-zA-Z_:][a-zA-Z0-9_:]*`.
         *
         * By convention, colons are reserved for monitoring system use, and names
         * beginning with underscores are reserved for monitoring-system internal use.
         */
        name: string;
        description: string;
        /**
         * @default Date.now() / 1000
         */
        timestamp?: number | null;
        /**
         * @deprecated Use `timestamp` instead.
         */
        time?: number | null;
        source?: string | null;
        labels?: Array<MetricLabel>;
        value?: number | null;
        /**
         * @default 0 (`unknown`)
         */
        type?: MetricType;
        /**
         * Arbitrary metadata to attach to this  This field is not validated.
         * @default {}
         */
        meta?: unknown;
    };
}

export = Metric;
