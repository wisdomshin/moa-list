import cheerio from 'cheerio';

export function _getHostname(url) {
  let start = url.indexOf('://') + 3;
  let end = url.indexOf('/', start);
  return url.slice(start, end);
}

export function _getProtocol(url) {
  let end = url.indexOf('://') + 3;
  return url.slice(0, end);
}

export function _bodyScrap(url) {
  return ($) => {
    let title = $("meta[property='og:title']").attr('content');
    if (!title) {
      title = $('head title').text();
      if (!title) {
        throw Error('This link has no title');
      }
    }
    let image = $("meta[property='og:image']").attr('content');
    if (!image) {
      image = $('img').attr('src');
      if (image && image.indexOf('http') === 0) {
      } else if (image && image[0] === '/') {
        image = _getProtocol(url) + _getHostname(url) + image;
      } else {
        image = '';
      }
    }

    let desc = $("meta[property='og:description']").attr('content');
    if (!desc) {
      desc = '';
    }
    return {
      title,
      image,
      desc,
    };
  };
}

export async function getUrlMeta(url) {
  const meta = await fetch(url)
    .then((res) => res.text())
    .then(cheerio.load)
    .then(_bodyScrap(url));

  return meta;
}
