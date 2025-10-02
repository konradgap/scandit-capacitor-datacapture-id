import { registerPlugin } from '@capacitor/core';
import { initIdProxy } from './ts/Capacitor/initIdProxy';
import { CapacitorCore } from 'scandit-capacitor-datacapture-core';
import type { ScanditIdCapturePluginInterface } from './definitions';
import { getDefaults, Capacitor as CapacitorId } from './ts/Capacitor/Capacitor';

export * from './definitions';

import * as IdExports from './definitions';

export class ScanditIdPluginImplementation implements ScanditIdCapturePluginInterface {
  public async initialize(coreDefaults: any): Promise<any> {
    CapacitorCore.defaults = coreDefaults;

    await getDefaults();

    initIdProxy();

    const api = {
      ...IdExports
    };

    return api;
  }
}

registerPlugin<ScanditIdPluginImplementation>('ScanditIdPlugin', {
  android: () => new ScanditIdPluginImplementation(),
  ios: () => new ScanditIdPluginImplementation(),
  web: () => new ScanditIdPluginImplementation(),
});

// tslint:disable-next-line:variable-name
export const ScanditIdPlugin = new ScanditIdPluginImplementation();
