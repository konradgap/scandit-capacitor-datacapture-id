import { createNativeProxy, FactoryMaker } from 'scandit-datacapture-frameworks-core';
import { IdCaptureListenerProxy, IdCaptureOverlayProxy, IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
import { capacitorIdNativeCaller } from './Capacitor';

export function initIdProxy() {
    FactoryMaker.bindLazyInstance('IdCaptureListenerProxy', () => {
        return createNativeProxy<IdCaptureListenerProxy>(capacitorIdNativeCaller);
    });

    FactoryMaker.bindLazyInstance('IdCaptureProxy', () => {
        return createNativeProxy<IdCaptureProxy>(capacitorIdNativeCaller);
    });

    FactoryMaker.bindLazyInstance('IdCaptureOverlayProxy', () => {
        return createNativeProxy<IdCaptureOverlayProxy>(capacitorIdNativeCaller);
    });
}