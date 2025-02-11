# file-saver

`file-saver` 是一个用于在 Web 应用中保存文件的 JavaScript 库。它提供了一种简单的方法来在浏览器中触发文件下载，而不需要服务器端的支持。这个库非常适合需要在客户端生成文件并让用户下载的场景。

## 安装

```bash
npm install file-saver

# ts
npm install @types/file-saver --save-dev

```

或者使用 cdn

```html
<script src="https://cdn.jsdelivr.net/npm/file-saver@latest/dist/FileSaver.min.js"></script>
```

## 主要功能

1. 文件下载：允许用户通过浏览器下载由 JavaScript 生成的文件。
2. 多种文件类型支持：支持下载各种类型的文件，如文本、图像、JSON、CSV 等。
3. 浏览器兼容性：兼容大多数现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。
