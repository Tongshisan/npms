# nanoid

[nanoid](https://www.npmjs.com/package/nanoid)

一个小巧、安全、URL 友好、唯一的 JavaScript 字符串 ID 生成器。

- 生成唯一 ID
- 支持自定义字符串
- 支持自定义长度
- 支持自定义字母表

## 安装

```bash
npm install nanoid
```

Nano ID 5 仅适用于 ESM 项目、测试或 Node.js 脚本。 对于 CommonJS，您需要 Nano ID 3.x（我们仍然支持它）：

```bash
npm install nanoid@3
```

想要快速上手尝试，你可以从 CDN 加载 Nano ID。但是，它不建议 在生产中使用，因为它的加载性能较低。

```html
<script src="https://cdn.jsdelivr.net/npm/nanoid/nanoid.js"></script>
```

```js
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
```
