import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface AminoMsgCreateGauge extends AminoMsg {
    type: "osmosis/incentives/msg-create-gauge";
    value: {
        is_perpetual: boolean;
        owner: string;
        distribute_to: {
            lock_query_type: number;
            denom: string;
            duration: string;
            timestamp: Date;
        };
        coins: {
            denom: string;
            amount: string;
        }[];
        start_time: Date;
        num_epochs_paid_over: string;
    };
}
export interface AminoMsgAddToGauge extends AminoMsg {
    type: "osmosis/incentives/msg-add-to-gauge";
    value: {
        owner: string;
        gauge_id: string;
        rewards: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: MsgCreateGauge) => AminoMsgCreateGauge["value"];
        fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: AminoMsgCreateGauge["value"]) => MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gaugeId, rewards }: MsgAddToGauge) => AminoMsgAddToGauge["value"];
        fromAmino: ({ owner, gauge_id, rewards }: AminoMsgAddToGauge["value"]) => MsgAddToGauge;
    };
};