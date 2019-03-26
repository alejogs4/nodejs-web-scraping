const {
  getHtml,
  getWebpageData
} = require('./src/scrapper')

async function main() {
  const html = await getHtml('https://ed.team/?page=2')
  const { names, pictures } = await getWebpageData(html)
  console.log(names, pictures)
}

main()