import { IScenario, ExportType } from 'get-set-fetch-extension-commons';

import ReadabilityPlugin from './plugins/ReadabilityPlugin';

export default class Readability implements IScenario {
  getPluginNames() {
    return [
      'SelectResourcePlugin',
      'FetchPlugin',
      'ExtractUrlsPlugin',
      'ReadabilityPlugin',
      'InsertResourcesPlugin',
      'UpsertResourcePlugin',
    ];
  }

  getResultTableHeaders() {
    return [
      {
        label: 'Article',
        render: row => (row.info ? JSON.stringify(row.info.article) : ''),
      },
      {
        label: 'URL',
        render: row => (row.url),
      },
    ];
  }

  getResultExportOpts() {
    return [
      {
        type: ExportType.CSV,
        cols: [ 'url', 'content' ],
        fieldSeparator: ',',
        lineSeparator: '\r\n',
      },
      {
        type: ExportType.ZIP,
        cols: [ 'blob' ],
      },
    ];
  }
}

export const embeddedPlugins = {
  ReadabilityPlugin,
};
