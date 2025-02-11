# puppeteer

[puppeteer](https://www.npmjs.com/package/puppeteer)

Puppeteer 是一个 Node.js 库，它提供了一个高级 API 来控制 Chrome 或 Chromium 浏览器。

Puppeteer 默认使用 Chrome 浏览器，但也可以配置为使用其他浏览器，如 Chromium。

Puppeteer 可以用于自动化浏览器操作，如网页截图、生成 PDF、爬取网页数据等。

## 安装

```bash
npm install puppeteer
```

一般首次安装后，运行会报错，需要下载浏览器。常见错误信息如下：

```bash
Error: Failed to launch the browser process!
[0523/110814.168150:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported.
```

解决方案：

1. 安装 Chrome 浏览器（推荐）：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install chromium-browser

# CentOS
sudo yum install chromium
```

2. 或者使用 npx 命令安装依赖：

```bash
npx puppeteer browsers install chrome
# 或
npx puppeteer --with-deps
```

3. 如果在 Linux 环境下仍然报错，可以在代码中添加 `--no-sandbox` 参数（不推荐在生产环境使用）：

```js
const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
```

## 使用

```js
import puppeteer from "puppeteer";
```
