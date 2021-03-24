import * as z from './base';
export interface ZodUnionDef<T extends [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]] = [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]> extends z.ZodTypeDef {
    t: z.ZodTypes.union;
    options: T;
}
export declare class ZodUnion<T extends [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]> extends z.ZodType<T[number]['_type'], ZodUnionDef<T>> {
    toJSON: () => {
        t: z.ZodTypes.union;
        options: object[];
    };
    static create: <T_1 extends [z.ZodType<any, any>, z.ZodType<any, any>, ...z.ZodType<any, any>[]]>(types: T_1) => ZodUnion<T_1>;
}
