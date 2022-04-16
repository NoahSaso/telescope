import * as _m0 from "protobufjs/minimal";
import { LogSeverity } from "../../../../google/logging/type/log_severity";
import { HttpRequest } from "../../../../google/api/servicecontrol/v1/http_request";
import { Any } from "../../../../google/protobuf/any";
/** An individual log entry. */
export interface LogEntry {
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`,
     * `"book_log"`.
     */
    name: string;
    /**
     * The time the event described by the log entry occurred. If
     * omitted, defaults to operation start time.
     */
    timestamp: Date;
    /**
     * The severity of the log entry. The default value is
     * `LogSeverity.DEFAULT`.
     */
    severity: LogSeverity;
    /**
     * Optional. Information about the HTTP request associated with this
     * log entry, if applicable.
     */
    httpRequest: HttpRequest;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any.
     * If this field contains a relative resource name, you can assume the name is
     * relative to `//tracing.googleapis.com`. Example:
     * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace: string;
    /**
     * A unique ID for the log entry used for deduplication. If omitted,
     * the implementation will generate one based on operation_id.
     */
    insertId: string;
    /**
     * A set of user-defined (key, value) data that provides additional
     * information about the log entry.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * The log entry payload, represented as a protocol buffer that is
     * expressed as a JSON object. The only accepted type currently is
     * [AuditLog][google.cloud.audit.AuditLog].
     */
    protoPayload: Any | undefined;
    /** The log entry payload, represented as a Unicode string (UTF-8). */
    textPayload: string | undefined;
    /**
     * The log entry payload, represented as a structure that
     * is expressed as a JSON object.
     */
    structPayload: {
        [key: string]: any;
    } | undefined;
    /**
     * Optional. Information about an operation associated with the log entry, if
     * applicable.
     */
    operation: LogEntryOperation;
    /**
     * Optional. Source code location information associated with the log entry,
     * if any.
     */
    sourceLocation: LogEntrySourceLocation;
}
export interface LogEntry_LabelsEntry {
    key: string;
    value: string;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
    /**
     * Optional. An arbitrary operation identifier. Log entries with the
     * same identifier are assumed to be part of the same operation.
     */
    id: string;
    /**
     * Optional. An arbitrary producer identifier. The combination of
     * `id` and `producer` must be globally unique.  Examples for `producer`:
     * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer: string;
    /** Optional. Set this to True if this is the first log entry in the operation. */
    first: boolean;
    /** Optional. Set this to True if this is the last log entry in the operation. */
    last: boolean;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this
     * might be a simple name or a fully-qualified name.
     */
    file: string;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number
     * available.
     */
    line: string;
    /**
     * Optional. Human-readable name of the function or method being invoked, with
     * optional context such as the class or package name. This information may be
     * used in contexts such as the logs viewer, where a file and line number are
     * less meaningful. The format can vary by language. For example:
     * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
     * (Python).
     */
    function: string;
}
export declare const LogEntry: {
    encode(message: LogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry;
    fromJSON(object: any): LogEntry;
    toJSON(message: LogEntry): unknown;
    fromPartial<I extends {
        name?: string;
        timestamp?: Date;
        severity?: LogSeverity;
        httpRequest?: {
            requestMethod?: string;
            requestUrl?: string;
            requestSize?: string;
            status?: number;
            responseSize?: string;
            userAgent?: string;
            remoteIp?: string;
            serverIp?: string;
            referer?: string;
            latency?: string;
            cacheLookup?: boolean;
            cacheHit?: boolean;
            cacheValidatedWithOriginServer?: boolean;
            cacheFillBytes?: string;
            protocol?: string;
        };
        trace?: string;
        insertId?: string;
        labels?: {
            [x: string]: string;
        };
        protoPayload?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        textPayload?: string | undefined;
        structPayload?: {
            [x: string]: any;
        };
        operation?: {
            id?: string;
            producer?: string;
            first?: boolean;
            last?: boolean;
        };
        sourceLocation?: {
            file?: string;
            line?: string;
            function?: string;
        };
    } & {
        name?: string;
        timestamp?: Date;
        severity?: LogSeverity;
        httpRequest?: {
            requestMethod?: string;
            requestUrl?: string;
            requestSize?: string;
            status?: number;
            responseSize?: string;
            userAgent?: string;
            remoteIp?: string;
            serverIp?: string;
            referer?: string;
            latency?: string;
            cacheLookup?: boolean;
            cacheHit?: boolean;
            cacheValidatedWithOriginServer?: boolean;
            cacheFillBytes?: string;
            protocol?: string;
        } & {
            requestMethod?: string;
            requestUrl?: string;
            requestSize?: string;
            status?: number;
            responseSize?: string;
            userAgent?: string;
            remoteIp?: string;
            serverIp?: string;
            referer?: string;
            latency?: string;
            cacheLookup?: boolean;
            cacheHit?: boolean;
            cacheValidatedWithOriginServer?: boolean;
            cacheFillBytes?: string;
            protocol?: string;
        } & Record<Exclude<keyof I["httpRequest"], keyof HttpRequest>, never>;
        trace?: string;
        insertId?: string;
        labels?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
        protoPayload?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["protoPayload"], keyof Any>, never>;
        textPayload?: string | undefined;
        structPayload?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & Record<Exclude<keyof I["structPayload"], string | number>, never>;
        operation?: {
            id?: string;
            producer?: string;
            first?: boolean;
            last?: boolean;
        } & {
            id?: string;
            producer?: string;
            first?: boolean;
            last?: boolean;
        } & Record<Exclude<keyof I["operation"], keyof LogEntryOperation>, never>;
        sourceLocation?: {
            file?: string;
            line?: string;
            function?: string;
        } & {
            file?: string;
            line?: string;
            function?: string;
        } & Record<Exclude<keyof I["sourceLocation"], keyof LogEntrySourceLocation>, never>;
    } & Record<Exclude<keyof I, keyof LogEntry>, never>>(object: I): LogEntry;
};
export declare const LogEntry_LabelsEntry: {
    encode(message: LogEntry_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry_LabelsEntry;
    fromJSON(object: any): LogEntry_LabelsEntry;
    toJSON(message: LogEntry_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof LogEntry_LabelsEntry>, never>>(object: I): LogEntry_LabelsEntry;
};
export declare const LogEntryOperation: {
    encode(message: LogEntryOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryOperation;
    fromJSON(object: any): LogEntryOperation;
    toJSON(message: LogEntryOperation): unknown;
    fromPartial<I extends {
        id?: string;
        producer?: string;
        first?: boolean;
        last?: boolean;
    } & {
        id?: string;
        producer?: string;
        first?: boolean;
        last?: boolean;
    } & Record<Exclude<keyof I, keyof LogEntryOperation>, never>>(object: I): LogEntryOperation;
};
export declare const LogEntrySourceLocation: {
    encode(message: LogEntrySourceLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntrySourceLocation;
    fromJSON(object: any): LogEntrySourceLocation;
    toJSON(message: LogEntrySourceLocation): unknown;
    fromPartial<I extends {
        file?: string;
        line?: string;
        function?: string;
    } & {
        file?: string;
        line?: string;
        function?: string;
    } & Record<Exclude<keyof I, keyof LogEntrySourceLocation>, never>>(object: I): LogEntrySourceLocation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};