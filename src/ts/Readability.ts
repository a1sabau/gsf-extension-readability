import { IScenario, ExportType, IPluginDefinition, IEnhancedJSONSchema } from 'get-set-fetch-extension-commons';

import ConfigFormSchema from '../resources/config-form-schema';
import ReadabilityPlugin from './plugins/ReadabilityPlugin';

export default class Readability implements IScenario {
  getConfigFormSchema() {
    return ConfigFormSchema as IEnhancedJSONSchema;
  }

  getConfigFormUISchema() {
    return ConfigFormSchema as IEnhancedJSONSchema;
  }

  getPluginDefinitions(scenarioProps) {
    const pluginDefinitions: IPluginDefinition[] = [
      {
        name: 'SelectResourcePlugin',
      },
      {
        name: 'FetchPlugin',
      },
      {
        name: 'ExtractUrlsPlugin',
      },
      {
        name: 'ReadabilityPlugin',
      },
      {
        name: 'UpdateResourcePlugin',
      },
      {
        name: 'InsertResourcesPlugin',
      },
    ];

    return pluginDefinitions;
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
        cols: [ 'url', 'info.article' ],
        fieldSeparator: ',',
        lineSeparator: '\r\n',
      },
    ];
  }
}

export const embeddedPlugins = {
  ReadabilityPlugin,
};
