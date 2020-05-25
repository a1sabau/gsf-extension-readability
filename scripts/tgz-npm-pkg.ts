import path from 'path';
import { TgzHelper } from 'get-set-fetch-extension-test-utils';

// tar and zip the npm package
const npmPkgParentPath = path.join(process.cwd(), 'test', 'resources', 'sites', 'registry.npmjs.org', 'gsf-extension-readability', '-');
const tgzPath = path.join(process.cwd(), 'test', 'resources', 'sites', 'registry.npmjs.org', 'gsf-extension-readability', '-');
const tgzName = 'gsf-extension-readability-0.1.0';
TgzHelper.tgz(npmPkgParentPath, tgzPath, tgzName);
