import sharp from "sharp";
import path from "path";

const resizeBasePng = path.resolve(
  new URL(".", import.meta.url).pathname,
  "./resize.jpeg"
);

async function createSemiTransparentRedPng() {
  const semiTransparentRedPng = await sharp({
    create: {
      width: 100,
      height: 100,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .png()
    .toFile(
      path.resolve(
        new URL(".", import.meta.url).pathname,
        "./semi-transparent-red.png"
      )
    );
  return semiTransparentRedPng;
}

const resizePng = async () => {
  console.log(resizeBasePng);
  const resizePng = await sharp(resizeBasePng)
    .resize(200, 200, { fit: "inside", kernel: sharp.kernel.cubic })
    .png()
    .toFile(
      path.resolve(new URL(".", import.meta.url).pathname, "./resize-test.png")
    );
};

async function main() {
  await createSemiTransparentRedPng();
  await resizePng();
}

main();
