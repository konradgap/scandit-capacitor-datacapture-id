import {
  capacitorExec,
  CapacitorNativeCaller,
} from 'scandit-capacitor-datacapture-core';

import { IdDefaults, loadIdDefaults } from 'scandit-datacapture-frameworks-id';

const pluginName = 'ScanditIdNative';

// tslint:disable-next-line:variable-name
export const Capacitor = {
  pluginName,
  defaults: {} as IdDefaults,
  exec: (
      success: Function | null,
      error: Function | null,
      functionName: string,
      args: [any] | null,
  ) => capacitorExec(success, error, pluginName, functionName, args),
};

export interface CapacitorWindow extends Window {
  Scandit: any;
  Capacitor: any;
}

declare const window: CapacitorWindow;

export enum CapacitorFunction {
  GetDefaults = 'getDefaults',
  ResetIdCapture = 'resetIdCapture',
  FinishCallback = 'finishCallback',
  SetModeEnabledState = 'setModeEnabledState',
  UpdateIdCaptureOverlay = 'updateIdCaptureOverlay',
  UpdateIdCaptureMode = 'updateIdCaptureMode',
  ApplyIdCaptureModeSettings = 'applyIdCaptureModeSettings',
  UpdateIdCaptureFeedback = 'updateIdCaptureFeedback',
}

export const getDefaults = async (): Promise<void> => {
  try {
    const defaultsJSON = await window.Capacitor.Plugins[pluginName][CapacitorFunction.GetDefaults]()
    loadIdDefaults(defaultsJSON);
  } catch (error) {
      // tslint:disable-next-line:no-console
      console.warn(error);
  }
};

export const capacitorIdNativeCaller = new CapacitorNativeCaller(Capacitor.pluginName);
