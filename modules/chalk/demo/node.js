import chalk from "chalk";

const log = console.log;

// 基本的红色文本
console.log(chalk.red("Hello world!"));

// 组合普通文本和彩色文本
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// 组合多个样式：蓝色文本、红色背景、粗体
log(chalk.blue.bgRed.bold("Hello world!"));

// 使用相同样式输出多个参数
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// 在彩色文本中嵌套其他样式
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// 在模板字符串中使用 chalk
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// 使用 RGB 自定义颜色和下划线样式
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
