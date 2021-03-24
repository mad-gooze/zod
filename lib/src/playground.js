"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var z = __importStar(require("."));
var schema = z.object({
    items: z.array(z.string()).refine(function (data) { return data.length > 3; }, {
        path: ['items-too-few'],
    }),
});
var customErrorMap = function (error, ctx) {
    // console.log(`code: ${error.code}`);
    // console.log('message:', error.message);
    // console.log('path:', error.path);
    console.log(JSON.stringify(error, null, 2));
    console.log('data:', data);
    return { message: error.message || ctx.defaultError };
};
var data = { items: ['first'] };
var parsed = schema.safeParse(data, { errorMap: customErrorMap });
console.log(JSON.stringify(parsed, null, 2));
//# sourceMappingURL=playground.js.map