import { FontAssetType, generateFonts, OtherAssetType } from 'fantasticon';
import fs from 'fs-extra';

const name = `icons`
const icons = `./icons/`
const dist = `./dist/`
const base_path = `dist/fonts`

async function start() {
  Promise.all([
    directories(),
    fonts()
  ])
  .then(move);
}

const move = () => {
  const options = {overwrite: true};
  return Promise.all([
    fs.move(`${dist}${name}.eot`, `${dist}fonts/${name}.eot`, options),
    fs.move(`${dist}${name}.woff`, `${dist}fonts/${name}.woff`, options),
    fs.move(`${dist}${name}.woff2`, `${dist}fonts/${name}.woff2`, options),
    fs.move(`${dist}${name}.svg`, `${dist}fonts/${name}.svg`, options)
  ]);
}

const directories = () => {
  const exist = fs.existsSync(base_path);
  return (!exist) ? fs.mkdirSync(base_path, {recursive: true}) : Promise.resolve(true);
}

const fonts = () => {
  return generateFonts({
    name,
    fontTypes: [
      FontAssetType.EOT,
      FontAssetType.WOFF2,
      FontAssetType.WOFF,
      FontAssetType.SVG
    ],
    assetTypes: [
      OtherAssetType.SCSS,
      OtherAssetType.CSS,
      OtherAssetType.HTML,
      OtherAssetType.JSON,
      OtherAssetType.TS
    ],
    formatOptions: {
      json: {
        indent: 2
      }
    },
    tag: 'i',
    fontsUrl: `./fonts`,
    prefix: 'icon',
    inputDir: `${icons}`,
    outputDir: `${dist}`,
    templates: {
      html: `./templates/html.hbs`,
      css: `./templates/css.hbs`,
      sass: `./templates/sass.hbs`,
      scss: `./templates/scss.hbs`
    }
  })
}

start();
