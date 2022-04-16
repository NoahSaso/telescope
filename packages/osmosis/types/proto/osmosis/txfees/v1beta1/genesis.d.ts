import * as _m0 from "protobufjs/minimal";
import { FeeToken } from "../../../osmosis/txfees/v1beta1/feetoken";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
    basedenom: string;
    feetokens: FeeToken[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        basedenom?: string;
        feetokens?: {
            denom?: string;
            poolID?: string;
        }[];
    } & {
        basedenom?: string;
        feetokens?: {
            denom?: string;
            poolID?: string;
        }[] & ({
            denom?: string;
            poolID?: string;
        } & {
            denom?: string;
            poolID?: string;
        } & Record<Exclude<keyof I["feetokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feetokens"], keyof {
            denom?: string;
            poolID?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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