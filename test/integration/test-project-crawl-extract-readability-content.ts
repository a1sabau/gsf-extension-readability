/* eslint-disable max-len */
import { crawlProjectBaseSuite, ICrawlDefinition } from 'get-set-fetch-extension-test-utils';

const crawlDefinitions: ICrawlDefinition[] = [
  {
    title: 'default maxDepth = -1',
    project: {
      name: 'projA',
      description: 'descriptionA',
      url: 'https://scrape.site.com/index.html',
    },
    scenarioOpts: {
      name: 'gsf-extension-readability',
    },
    expectedResources: [
      {
        url: 'https://scrape.site.com/index.html',
        mediaType: 'text/html',
        info: {
          article: {
            title: 'SiteMap',
            byline: null,
            dir: null,
            content: '<div id="readability-page-1" class="page">\n \n <p>resource references throughout the site</p>\n <a href="https://scrape.site.com/articleA.html">article A</a>\\\n <a href="https://scrape.site.com/articleB.html">article B</a>\n \n</div>',
            textContent: 'resource references throughout the site\n article A\\\n article B',
            length: 76,
            excerpt: 'resource references throughout the site',
            siteName: null,
          },
        },
      },
      {
        url: 'https://scrape.site.com/articleB.html',
        mediaType: 'text/html',
        info: {
          article: {
            title: 'scrape.site.com - Article B',
            byline: null,
            dir: null,
            content: '<div id="readability-page-1" class="page">\n \n <h2>article b summary</h2>\n <img src="https://scrape.site.com/img/articleB-150.png">\n \n <p>article b content, more content, even more content</p>\n <p>article b conclusions, more conclusions, even more conclusions</p>\n \n</div>',
            textContent: 'article b summary\n \n \n article b content, more content, even more content\n article b conclusions, more conclusions, even more conclusions',
            length: 148,
            excerpt: 'article b content, more content, even more content',
            siteName: null,
          },
        },
      },
      {
        url: 'https://scrape.site.com/articleA.html',
        mediaType: 'text/html',
        info: {
          article: {
            title: 'scrape.site.com - Article A',
            byline: null,
            dir: null,
            content: '<div id="readability-page-1" class="page">\n \n <h2>article a summary</h2>\n <img src="https://scrape.site.com/img/articleA-150.png">\n \n <p>article a content, more content, even more content</p>\n <p>article a conclusions, more conclusions, even more conclusions</p>\n \n</div>',
            textContent: 'article a summary\n \n \n article a content, more content, even more content\n article a conclusions, more conclusions, even more conclusions',
            length: 148,
            excerpt: 'article a content, more content, even more content',
            siteName: null,
          },
        },
      },
    ],
    expectedCsv: [
      'url,info.article.byline,info.article.content,info.article.dir,info.article.excerpt,info.article.length,info.article.siteName,info.article.textContent,info.article.title',
      '"https://scrape.site.com/index.html","null","<div id=""readability-page-1"" class=""page"">\n \n <p>resource references throughout the site</p>\n <a href=""https://scrape.site.com/articleA.html"">article A</a>\\\n <a href=""https://scrape.site.com/articleB.html"">article B</a>\n \n</div>","null","resource references throughout the site","76","null","resource references throughout the site\n article A\\\n article B","SiteMap"',
      '"https://scrape.site.com/articleB.html","null","<div id=""readability-page-1"" class=""page"">\n \n <h2>article b summary</h2>\n <img src=""https://scrape.site.com/img/articleB-150.png"">\n \n <p>article b content, more content, even more content</p>\n <p>article b conclusions, more conclusions, even more conclusions</p>\n \n</div>","null","article b content, more content, even more content","148","null","article b summary\n \n \n article b content, more content, even more content\n article b conclusions, more conclusions, even more conclusions","scrape.site.com - Article B"',
      '"https://scrape.site.com/articleA.html","null","<div id=""readability-page-1"" class=""page"">\n \n <h2>article a summary</h2>\n <img src=""https://scrape.site.com/img/articleA-150.png"">\n \n <p>article a content, more content, even more content</p>\n <p>article a conclusions, more conclusions, even more conclusions</p>\n \n</div>","null","article a content, more content, even more content","148","null","article a summary\n \n \n article a content, more content, even more content\n article a conclusions, more conclusions, even more conclusions","scrape.site.com - Article A"',
    ],
    csvLineSeparator: '\r\n',
  },
];

crawlProjectBaseSuite('Extract Readability Content', crawlDefinitions);
