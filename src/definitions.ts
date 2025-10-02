// Core ID Types
export { DateResult } from 'scandit-datacapture-frameworks-id';
export { IdAnonymizationMode } from 'scandit-datacapture-frameworks-id';
export { IdImageType } from 'scandit-datacapture-frameworks-id';
export { CapturedSides } from 'scandit-datacapture-frameworks-id';
export { TextHintPosition } from 'scandit-datacapture-frameworks-id';
export { BarcodeResult } from 'scandit-datacapture-frameworks-id';
export { Duration } from 'scandit-datacapture-frameworks-id';
export { IdImages } from 'scandit-datacapture-frameworks-id';
export { IdSide } from 'scandit-datacapture-frameworks-id';
export { Sex } from 'scandit-datacapture-frameworks-id';
export { UsRealIdStatus } from 'scandit-datacapture-frameworks-id';

// Captured ID Data
export { CapturedId } from 'scandit-datacapture-frameworks-id';
export { MRZResult } from 'scandit-datacapture-frameworks-id';
export { VIZResult } from 'scandit-datacapture-frameworks-id';

// ID Capture
export { IdCapture } from 'scandit-datacapture-frameworks-id';
export { IdCaptureFeedback } from 'scandit-datacapture-frameworks-id';
export { IdCaptureListener } from 'scandit-datacapture-frameworks-id';
export { IdCaptureOverlay } from 'scandit-datacapture-frameworks-id';
export { IdCaptureSettings } from 'scandit-datacapture-frameworks-id';
export { IdLayoutLineStyle } from 'scandit-datacapture-frameworks-id';
export { IdLayoutStyle } from 'scandit-datacapture-frameworks-id';
export { RejectionReason } from 'scandit-datacapture-frameworks-id';

// Document Types
export { IdCaptureDocumentType } from 'scandit-datacapture-frameworks-id';
export { DriverLicense } from 'scandit-datacapture-frameworks-id';
export { HealthInsuranceCard } from 'scandit-datacapture-frameworks-id';
export { IdCaptureDocument } from 'scandit-datacapture-frameworks-id';
export { IdCard } from 'scandit-datacapture-frameworks-id';
export { Passport } from 'scandit-datacapture-frameworks-id';
export { RegionSpecific } from 'scandit-datacapture-frameworks-id';
export { ResidencePermit } from 'scandit-datacapture-frameworks-id';
export { VisaIcao } from 'scandit-datacapture-frameworks-id';

// Scanners & Regions
export { IdCaptureScanner } from 'scandit-datacapture-frameworks-id';
export { SingleSideScanner } from 'scandit-datacapture-frameworks-id';
export { FullDocumentScanner } from 'scandit-datacapture-frameworks-id';
export { IdCaptureRegion } from 'scandit-datacapture-frameworks-id';
export { RegionSpecificSubtype } from 'scandit-datacapture-frameworks-id';

// Verification & Validation
export { AamvaBarcodeVerificationResult } from 'scandit-datacapture-frameworks-id';
export { AamvaBarcodeVerificationStatus } from 'scandit-datacapture-frameworks-id';
export { DataConsistencyResult } from 'scandit-datacapture-frameworks-id';
export { DataConsistencyCheck } from 'scandit-datacapture-frameworks-id';
export { VerificationResult } from 'scandit-datacapture-frameworks-id';
export { MobileDocumentResult } from 'scandit-datacapture-frameworks-id';

// Driving License Details
export { ProfessionalDrivingPermit } from 'scandit-datacapture-frameworks-id';
export { VehicleRestriction } from 'scandit-datacapture-frameworks-id';
export { DrivingLicenseCategory } from 'scandit-datacapture-frameworks-id';
export { DrivingLicenseDetails } from 'scandit-datacapture-frameworks-id';

export interface ScanditIdCapturePluginInterface {
  initialize(coreDefaults: any): Promise<any>;
}
