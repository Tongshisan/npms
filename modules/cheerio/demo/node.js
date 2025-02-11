import * as cheerio from "cheerio";

const html = "<h2 class='title'>Hello world</h2>";
const $ = cheerio.load(html);

// 在 head 中添加样式
$("head").append("<style>.red { color: red; }</style>");

// 修改 h2 的 class, 并添加这个 class 的样式 css
$("h2").addClass("red");

// body 添加一个新元素
$("body").append("<p>这是一个新元素</p>");

console.log($.html());
