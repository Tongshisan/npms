import { nanoid, customRandom, customAlphabet } from "nanoid";
import { nanoid as nanoidNonSecure } from "nanoid/non-secure";

console.log("默认", nanoid());

// 不安全的
console.log("不安全的", nanoidNonSecure());

// 自定义长度
console.log("自定义长度", nanoid(10));

// 自定义字母表
const nanoidCustom = customAlphabet("1234567890abcdef", 10);

console.log("自定义字母表", nanoidCustom());
