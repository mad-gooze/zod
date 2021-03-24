import { ZodString, ZodStringDef } from './types/string';
import { ZodNumber, ZodNumberDef } from './types/number';
import { ZodBigInt, ZodBigIntDef } from './types/bigint';
import { ZodBoolean, ZodBooleanDef } from './types/boolean';
import { ZodDate, ZodDateDef } from './types/date';
import { ZodUndefined, ZodUndefinedDef } from './types/undefined';
import { ZodNull, ZodNullDef } from './types/null';
import { ZodAny, ZodAnyDef } from './types/any';
import { ZodUnknown, ZodUnknownDef } from './types/unknown';
import { ZodVoid, ZodVoidDef } from './types/void';
import { ZodArray, ZodArrayDef } from './types/array';
import { ZodObject, ZodObjectDef } from './types/object';
import { ZodUnion, ZodUnionDef } from './types/union';
import { ZodIntersection, ZodIntersectionDef } from './types/intersection';
import { ZodTuple, ZodTupleDef } from './types/tuple';
import { ZodRecord, ZodRecordDef } from './types/record';
import { ZodFunction, ZodFunctionDef } from './types/function';
import { ZodLazy, ZodLazyDef } from './types/lazy';
import { ZodLiteral, ZodLiteralDef } from './types/literal';
import { ZodEnum, ZodEnumDef } from './types/enum';
import { ZodNativeEnum, ZodNativeEnumDef } from './types/nativeEnum';
import { ZodPromise, ZodPromiseDef } from './types/promise';
import { TypeOf, ZodType, ZodTypeAny, ZodTypeDef, ZodTypes } from './types/base';
import { ZodParsedType } from './parser';
import { ZodErrorMap } from './defaultErrorMap';
import { ZodCodeGenerator } from './codegen';
export { ZodTypeDef, ZodTypes };
declare type ZodDef = ZodStringDef | ZodNumberDef | ZodBigIntDef | ZodBooleanDef | ZodDateDef | ZodUndefinedDef | ZodNullDef | ZodAnyDef | ZodUnknownDef | ZodVoidDef | ZodArrayDef | ZodObjectDef | ZodUnionDef | ZodIntersectionDef | ZodTupleDef | ZodRecordDef | ZodFunctionDef | ZodLazyDef | ZodLiteralDef | ZodEnumDef | ZodNativeEnumDef | ZodPromiseDef;
declare const stringType: () => ZodString;
declare const numberType: () => ZodNumber;
declare const bigIntType: () => ZodBigInt;
declare const booleanType: () => ZodBoolean;
declare const dateType: () => ZodDate;
declare const undefinedType: () => ZodUndefined;
declare const nullType: () => ZodNull;
declare const anyType: () => ZodAny;
declare const unknownType: () => ZodUnknown;
declare const voidType: () => ZodVoid;
declare const arrayType: <T extends ZodType<any, any>>(schema: T) => ZodArray<T>;
declare const objectType: <T extends import("./types/base").ZodRawShape>(shape: T) => ZodObject<T, {
    strict: true;
}, { [k in keyof ({ [k in { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]]?: { [k in keyof T]: T[k]["_type"]; }[k] | undefined; } & { [k in Exclude<keyof T, { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]>]: { [k in keyof T]: T[k]["_type"]; }[k]; })]: ({ [k in { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]]?: { [k in keyof T]: T[k]["_type"]; }[k] | undefined; } & { [k in Exclude<keyof T, { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]>]: { [k in keyof T]: T[k]["_type"]; }[k]; })[k]; }>;
declare const unionType: <T extends [ZodType<any, any>, ZodType<any, any>, ...ZodType<any, any>[]]>(types: T) => ZodUnion<T>;
declare const intersectionType: <T extends ZodType<any, any>, U extends ZodType<any, any>>(left: T, right: U) => ZodIntersection<T, U>;
declare const tupleType: <T extends [ZodType<any, any>, ...ZodType<any, any>[]] | []>(schemas: T) => ZodTuple<T>;
declare const recordType: <Value extends ZodType<any, any> = ZodType<any, any>>(valueType: Value) => ZodRecord<Value>;
declare const functionType: <T extends ZodTuple<any> = ZodTuple<[]>, U extends ZodType<any, any> = ZodUnknown>(args?: T | undefined, returns?: U | undefined) => ZodFunction<T, U>;
declare const lazyType: <T extends ZodType<any, any>>(getter: () => T) => ZodLazy<T>;
declare const literalType: <T extends import("./helpers/primitive").Primitive>(value: T) => ZodLiteral<T>;
declare const enumType: <U extends string, T extends [U, ...U[]]>(values: T) => ZodEnum<T>;
declare const nativeEnumType: <T extends {
    [k: string]: string | number;
    [nu: number]: string;
}>(values: T) => ZodNativeEnum<T>;
declare const promiseType: <T extends ZodType<any, any>>(schema: T) => ZodPromise<T>;
declare const ostring: () => ZodUnion<[ZodString, ZodUndefined]>;
declare const onumber: () => ZodUnion<[ZodNumber, ZodUndefined]>;
declare const oboolean: () => ZodUnion<[ZodBoolean, ZodUndefined]>;
declare const codegen: () => ZodCodeGenerator;
export declare const custom: <T>(check: (data: unknown) => any, params?: string | Pick<{
    check: (arg: any) => any;
    path?: (string | number)[] | undefined;
    message?: string | undefined;
    params?: {
        [k: string]: any;
    } | undefined;
}, "path" | "message" | "params"> | undefined) => ZodType<T, ZodTypeDef>;
declare const instanceOfType: <T extends new (...args: any[]) => any>(cls: T, params?: string | Pick<{
    check: (arg: any) => any;
    path?: (string | number)[] | undefined;
    message?: string | undefined;
    params?: {
        [k: string]: any;
    } | undefined;
}, "path" | "message" | "params"> | undefined) => ZodType<InstanceType<T>, ZodTypeDef>;
export { stringType as string, numberType as number, bigIntType as bigint, booleanType as boolean, dateType as date, undefinedType as undefined, nullType as null, anyType as any, unknownType as unknown, voidType as void, arrayType as array, objectType as object, unionType as union, intersectionType as intersection, tupleType as tuple, recordType as record, functionType as function, lazyType as lazy, literalType as literal, enumType as enum, nativeEnumType as nativeEnum, promiseType as promise, instanceOfType as instanceof, ostring, onumber, oboolean, codegen, };
export declare const late: {
    object: <T extends import("./types/base").ZodRawShape>(shape: () => T) => ZodObject<T, {
        strict: true;
    }, { [k in keyof ({ [k in { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]]?: { [k in keyof T]: T[k]["_type"]; }[k] | undefined; } & { [k in Exclude<keyof T, { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]>]: { [k in keyof T]: T[k]["_type"]; }[k]; })]: ({ [k in { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]]?: { [k in keyof T]: T[k]["_type"]; }[k] | undefined; } & { [k in Exclude<keyof T, { [k in keyof { [k in keyof T]: T[k]["_type"]; }]: undefined extends { [k in keyof T]: T[k]["_type"]; }[k] ? k : never; }[keyof T]>]: { [k in keyof T]: T[k]["_type"]; }[k]; })[k]; }>;
};
export { ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodVoid, ZodArray, ZodObject, ZodUnion, ZodIntersection, ZodTuple, ZodRecord, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodType, ZodType as Schema, ZodType as ZodSchema, ZodTypeAny, ZodDef, ZodErrorMap, ZodParsedType, ZodCodeGenerator, };
export * from './ZodError';
export { TypeOf, TypeOf as infer };
