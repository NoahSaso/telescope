import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser'
import { expectCode } from '../../../test-utils/'
import { AminoParseContext, ProtoParseContext } from '../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../object';
import { createAminoConverter, makeAminoTypeInterface } from '../amino/index';
import cases from 'jest-in-case';

const store = new ProtoStore([__dirname + '/../../../../../__fixtures__/chain1']);
store.traverseAll();

cases('ibc/lightclients/tendermint/v1/tendermint', opts => {
    const ref = store.findProto('ibc/lightclients/tendermint/v1/tendermint.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    const aminoCtx = new AminoParseContext(ref, store, defaultTelescopeOptions);
    context.options.useDuration = opts.name;
    aminoCtx.options.useDuration = opts.name;
    expectCode(createProtoType(context, 'ClientState',
        getNestedProto(ref.traversed).ClientState
    ));
    expectCode(createObjectWithMethods(context, 'ClientState',
        getNestedProto(ref.traversed).ClientState
    ));
    expectCode(makeAminoTypeInterface({
        context: aminoCtx,
        proto: getNestedProto(ref.traversed).ClientState
    }));
    expectCode(createAminoConverter({
        context: aminoCtx,
        root: ref.proto,
        name: 'AminoConverter',
        protos: [getNestedProto(ref.traversed).ClientState]
    }));
}, [
    { name: 'duration' },
    { name: 'string' }
]);