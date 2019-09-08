import { SchemaHelper, IPlugin, ISite, IResource } from 'get-set-fetch-extension-commons';
import Readability from 'readability/Readability';

export default class ReadabilityPlugin implements IPlugin {
  opts: {
    runInTab: boolean;
    selectors: string;
  };

  constructor(opts) {
    this.opts = SchemaHelper.instantiate(ReadabilityPlugin.OPTS_SCHEMA, opts);
  }

  static get OPTS_SCHEMA() {
    return {
      $id: 'a1sabau/gsf-extension-readability.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'ReadabilityPlugin',
      type: 'object',
      properties: {
        runInTab: {
          type: 'boolean',
          default: true,
        },
      },
    };
  }

  test(resource: IResource) {
    return (/html/i).test(resource.mediaType);
  }

  apply(site: ISite, resource: IResource) {
    const article = new Readability(document).parse();

    return {
      info: {
        article: Object.assign(
          article,
          {
            content: this.deflate(article.content),
            textContent: this.deflate(article.textContent),
          }
        ),
      },
    };
  }

  deflate(content: string) {
    return content.replace(/\n+|\r+|(\n\r)+/g, '\n').replace(/\t/g, ' ').replace(/ +/g, ' ').trim();
  }
}
