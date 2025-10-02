import { jest } from '@jest/globals';
import { Capacitor, CapacitorFunction } from '../src/ts/Capacitor/Capacitor';

const eventCallbacks: any = {};

const pluginFunctionsMock = {
  addListener: jest.fn((eventName: string, callback) => {
    // Store the callback using the event name as the key
    eventCallbacks[eventName] = callback;
  }),

  [CapacitorFunction.CreateContextForBarcodeVerification]: jest.fn(),
  [CapacitorFunction.ResetIdCapture]: jest.fn(),
  [CapacitorFunction.VerifyCapturedIdAsync]: jest.fn(),
  [CapacitorFunction.SetModeEnabledState]: jest.fn(),
  [CapacitorFunction.UpdateIdCaptureMode]: jest.fn(),
  [CapacitorFunction.ApplyIdCaptureModeSettings]: jest.fn(),
  [CapacitorFunction.UpdateIdCaptureOverlay]: jest.fn(),
  [CapacitorFunction.FinishCallback]: jest.fn(),
  [CapacitorFunction.UpdateIdCaptureFeedback]: jest.fn(),
};

const capacitorMock = {
  Plugins: {
    [Capacitor.pluginName]: pluginFunctionsMock,
  },
  __eventCallbacks: eventCallbacks,
};

(window as any).Capacitor = capacitorMock;
