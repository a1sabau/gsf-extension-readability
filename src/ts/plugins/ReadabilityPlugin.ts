import { ISite, IResource, BasePlugin, IEnhancedJSONSchema } from 'get-set-fetch-extension-commons';
import Readability from 'readability/Readability';

export default class ReadabilityPlugin extends BasePlugin {
  getOptsSchema(): IEnhancedJSONSchema {
    return {
      $id: 'a1sabau/gsf-extension-readability.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'ReadabilityPlugin',
      type: 'object',
      properties: {
        domRead: {
          type: 'boolean',
          const: true,
        },
      },
    };
  }

  test(site: ISite, resource: IResource) {
    return (/html/i).test(resource.mediaType);
  }

  apply(site: ISite, resource: IResource) {
    const article = new Readability(document).parse();

    return {
      content:
        (({ title, textContent, excerpt }) => ({ title, textContent: this.deflate(textContent), excerpt }))(article),
    };
  }

  deflate(content: string) {
    return content.replace(/\n+|\r+|(\n\r)+/g, '\n').replace(/\t/g, ' ').replace(/ +/g, ' ').trim();
  }
}
