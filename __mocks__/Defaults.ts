import { FactoryMaker, Feedback, FeedbackProxy, loadCoreDefaults } from 'scandit-datacapture-frameworks-core';
import { CapacitorFunction } from '../src/ts/Capacitor/Capacitor';
import { jest } from '@jest/globals';
import { loadIdDefaults } from 'scandit-datacapture-frameworks-id';

class MockFeedbackProxy implements FeedbackProxy {
  emitFeedback(_: Feedback): Promise<void> {
    return Promise.resolve();
  }
}

export class DefaultsData {

  get coreDefaults() {
    return {
      "Version": "6.24.0-beta.1-SNAPSHOT",
      "Camera": {
        "Settings": {
          "preferredResolution": "auto",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "manualUntilCapture",
          "zoomGestureZoomFactor": 2,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {}
        },
        "defaultPosition": "worldFacing",
        "availablePositions": [
          "userFacing",
          "worldFacing"
        ]
      },
      "DataCaptureView": {
        "scanAreaMargins": "{\"bottom\":{\"unit\":\"fraction\",\"value\":0.0},\"left\":{\"unit\":\"fraction\",\"value\":0.0},\"right\":{\"unit\":\"fraction\",\"value\":0.0},\"top\":{\"unit\":\"fraction\",\"value\":0.0}}",
        "pointOfInterest": "{\"x\":{\"unit\":\"fraction\",\"value\":0.5},\"y\":{\"unit\":\"fraction\",\"value\":0.5}}",
        "logoAnchor": "bottomRight",
        "logoOffset": "{\"x\":{\"unit\":\"fraction\",\"value\":0.0},\"y\":{\"unit\":\"fraction\",\"value\":0.0}}",
        "focusGesture": "{\"showUIIndicator\":true,\"type\":\"tapToFocus\"}",
        "zoomGesture": "{\"type\":\"swipeToZoom\"}",
        "logoStyle": "extended"
      },
      "RectangularViewfinder": {
        "defaultStyle": "legacy",
        "styles": {
          "legacy": {
            "size": "{\"height\":{\"unit\":\"fraction\",\"value\":0.32499998807907104},\"width\":{\"unit\":\"fraction\",\"value\":0.800000011920929}}",
            "color": "#FFFFFFFF",
            "style": "legacy",
            "lineStyle": "light",
            "dimming": 0,
            "animation": null,
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          },
          "rounded": {
            "size": "{\"aspect\":1.0,\"shorterDimension\":{\"unit\":\"fraction\",\"value\":0.75}}",
            "color": "#FFFFFFFF",
            "style": "rounded",
            "lineStyle": "light",
            "dimming": 0,
            "animation": "{\"looping\":true}",
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          },
          "square": {
            "size": "{\"aspect\":1.0,\"shorterDimension\":{\"unit\":\"fraction\",\"value\":0.75}}",
            "color": "#FFFFFFFF",
            "style": "square",
            "lineStyle": "light",
            "dimming": 0,
            "animation": "{\"looping\":true}",
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          }
        }
      },
      "Brush": {
        "fillColor": "#00000000",
        "strokeColor": "#00000000",
        "strokeWidth": 0
      },
      "deviceID": "ed12135fc75389bc47a139e1040e09e3b3b525fe",
      "AimerViewfinder": {
        "frameColor": "#FFFFFFFF",
        "dotColor": "#FFFFFFCC"
      },
      "SpotlightViewfinder": {
        "size": "{\"height\":{\"unit\":\"fraction\",\"value\":0.32499998807907104},\"width\":{\"unit\":\"fraction\",\"value\":0.800000011920929}}",
        "backgroundColor": "#00000080",
        "disabledBorderColor": "#FFFFFFFF",
        "enabledBorderColor": "#FFFFFFFF"
      },
      "LaserlineViewfinder": {
        "width": "{\"unit\":\"fraction\",\"value\":0.800000011920929}",
        "enabledColor": "#FFFFFFFF",
        "disabledColor": "#00000000"
      }
    };
  }

  get idDefaults() {
    return {
      "RecommendedCameraSettings": {
          "preferredResolution": "fullHd",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "manualUntilCapture",
          "zoomGestureZoomFactor": 2,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {
              "noiseReductionMode": "fast",
              "preferredFrameRateRange": "highestWidest"
          }
      },
      "IdCaptureFeedback": "{\"idCaptured\":{\"sound\":{\"resource\":\"sc_id_captured\"},\"vibration\":{\"type\":\"default\"}},\"idRejected\":{}}",
      "defaultSuccessSound": "{\"resource\":\"sc_id_captured\"}",
      "defaultFailureSound": "{\"resource\":\"sc_id_rejected\"}",
      "IdCaptureOverlay": {
          "DefaultCapturedBrush": {
              "fillColor": "#00000000",
              "strokeColor": "#FFFFFFFF",
              "strokeWidth": 3
          },
          "DefaultLocalizedBrush": {
              "fillColor": "#FFFFFF80",
              "strokeColor": "#00000000",
              "strokeWidth": 0
          },
          "DefaultRejectedBrush": {
              "fillColor": "#FFFFFF80",
              "strokeColor": "#00000000",
              "strokeWidth": 0
          },
          "defaultIdLayoutStyle": "rounded",
          "defaultIdLayoutLineStyle": "light"
      },
      "IdCaptureSettings": {
          "anonymizationMode": "fieldsOnly",
          "rejectVoidedIds": false,
          "decodeBackOfEuropeanDrivingLicense": false,
          "rejectExpiredIds": false,
          "rejectIdsExpiringIn": null,
          "rejectNotRealIdCompliant": false,
          "rejectForgedAamvaBarcodes": false,
          "rejectInconsistentData": false,
          "rejectHolderBelowAge": null
      }
  };
  }
}

FactoryMaker.bindInstance('FeedbackProxy', new MockFeedbackProxy());

const defaults = new DefaultsData();

loadCoreDefaults(defaults.coreDefaults);
loadIdDefaults(defaults.idDefaults);
