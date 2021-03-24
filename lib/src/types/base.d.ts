import { ParseParams, MakeErrorData } from '../parser';
import { ZodArray, ZodUnion, ZodNull, ZodUndefined, ZodError } from '../index';
export declare enum ZodTypes {
    string = "string",
    number = "number",
    bigint = "bigint",
    boolean = "boolean",
    date = "date",
    undefined = "undefined",
    null = "null",
    array = "array",
    object = "object",
    union = "union",
    intersection = "intersection",
    tuple = "tuple",
    record = "record",
    function = "function",
    lazy = "lazy",
    literal = "literal",
    enum = "enum",
    nativeEnum = "nativeEnum",
    promise = "promise",
    any = "any",
    unknown = "unknown",
    void = "void"
}
export declare type ZodTypeAny = ZodType<any, any>;
export declare type ZodRawShape = {
    [k: string]: ZodTypeAny;
};
declare type InternalCheck<T> = {
    check: (arg: T) => any;
} & MakeErrorData;
declare type Check<T> = {
    check: (arg: T) => any;
    path?: (string | number)[];
    message?: string;
    params?: {
        [k: string]: any;
    };
};
export interface ZodTypeDef {
    t: ZodTypes;
    checks?: InternalCheck<any>[];
    accepts?: ZodType<any, any>;
}
export declare type TypeOf<T extends {
    _type: any;
}> = T['_type'];
export declare type Infer<T extends {
    _type: any;
}> = T['_type'];
export declare abstract class ZodType<Type, Def extends ZodTypeDef = ZodTypeDef> {
    readonly _type: Type;
    readonly _def: Def;
    parse: (x: Type | unknown, params?: ParseParams) => Type;
    safeParse: (x: Type | unknown, params?: ParseParams) => {
        success: true;
        data: Type;
    } | {
        success: false;
        error: ZodError;
    };
    parseAsync: (x: Type | unknown, params?: ParseParams) => Promise<Type>;
    is(u: Type): u is Type;
    check(u: Type | unknown): u is Type;
    refine: <Func extends (arg: Type) => any>(check: Func, message?: string | Pick<Check<Type>, "path" | "message" | "params">) => this;
    refinement: (refinement: Check<Type>) => this;
    protected _refinement: (refinement: InternalCheck<Type>) => this;
    constructor(def: Def);
    abstract toJSON: () => object;
    optional: () => ZodUnion<[this, ZodUndefined]>;
    nullable: () => ZodUnion<[this, ZodNull]>;
    array: () => ZodArray<this>;
    or: <U extends ZodType<any>>(arg: U) => ZodUnion<[this, U]>;
}
export {};
