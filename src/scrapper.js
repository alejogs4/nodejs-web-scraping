const axios = require('axios')
const cheerio = require('cheerio')

async function getHtml(url) {
  const response = await axios.get(url)
  const html = await response.data
  return html  
}

async function getWebpageData(html) {
  const $ = cheerio.load(html)

  const names = Array.from($('a.color > strong')).map(element => element.children[0].data)
  const pictures = Array.from($('div.img-container.circle  img')).map(image => ({...image.attribs})).map(attrs => attrs['data-src']) 
  // const contents = Array.from($('div.publication__content p')).map
  // .each(function (_, element) {
    
    // console.log(element.children[0].data)]
  // })

  return { names, pictures }
}

module.exports = {
  getHtml,
  getWebpageData
}