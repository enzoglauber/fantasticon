import { FontAssetType, generateFonts, OtherAssetType } from 'fantasticon';

const baseDir = `./icons/`
const destDir = `./dist/`

async function init() {

    const res = await generateFonts({
        name: 'liquid-icons',
        fontTypes: [FontAssetType.EOT, FontAssetType.WOFF2, FontAssetType.WOFF],
        assetTypes: [
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
        pathOptions: {},
        codepoints: {},
        //fontHeight: 300,
        round: undefined,
        descent: undefined,
        normalize: undefined,
        selector: null,
        tag: 'i',
        prefix: 'icon',
        inputDir: `${baseDir}`,
        outputDir: `${destDir}`,
        templates: {
          css: `./templates/css.hbs`
        },
        // fontsUrl: '../fonts/'
      })

    // await fs.copy(`${baseDir}fonts/icons.css`, `${baseDir}scss/_icons.scss`)
    // await fs.copy(`${baseDir}fonts/icons.woff`, `${destDir}/icons.woff`)
    // await fs.copy(`${baseDir}fonts/icons.woff2`, `${destDir}/icons.woff2`)
}

init()
