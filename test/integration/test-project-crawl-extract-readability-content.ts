/* eslint-disable max-len */
import { crawlProjectBaseSuite, ICrawlDefinition } from 'get-set-fetch-extension-test-utils';

const crawlDefinitions: ICrawlDefinition[] = [
  {
    title: 'default maxDepth = -1',
    project: {
      name: 'projA',
      description: 'descriptionA',
      url: 'https://scrape.site.com/index.html',
      scenario: 'gsf-extension-readability',
      plugins: [],
    },
    expectedResourceFields: [ 'url', 'mediaType', 'content' ],
    expectedResources: [
      {
        url: 'https://scrape.site.com/index.html',
        mediaType: 'text/html',
        content: {
          title: 'SiteMap',
          textContent: 'resource references throughout the site\n article A\\\n article B',
          excerpt: 'resource references throughout the site',
        },
      },
      {
        url: 'https://scrape.site.com/articleB.html',
        mediaType: 'text/html',
        content: {
          title: 'scrape.site.com - Article B',
          textContent: 'article b summary\n \n article b content, more content, even more content\n article b conclusions, more conclusions, even more conclusions',
          excerpt: 'article b content, more content, even more content',
        },
      },
      {
        url: 'https://scrape.site.com/articleA.html',
        mediaType: 'text/html',
        content: {
          title: 'scrape.site.com - Article A',
          textContent: 'article a summary\n \n article a content, more content, even more content\n article a conclusions, more conclusions, even more conclusions',
          excerpt: 'article a content, more content, even more content',
        },
      },
    ],
    expectedCsv: [
      'url,content.excerpt,content.textContent,content.title',
      '"https://scrape.site.com/index.html","resource references throughout the site","resource references throughout the site\n article A\\\n article B","SiteMap"',
      '"https://scrape.site.com/articleB.html","article b content, more content, even more content","article b summary\n \n article b content, more content, even more content\n article b conclusions, more conclusions, even more conclusions","scrape.site.com - Article B"',
      '"https://scrape.site.com/articleA.html","article a content, more content, even more content","article a summary\n \n article a content, more content, even more content\n article a conclusions, more conclusions, even more conclusions","scrape.site.com - Article A"',
    ],
    csvLineSeparator: '\r\n',
  },
];

crawlProjectBaseSuite('Extract Readability Content', crawlDefinitions);
