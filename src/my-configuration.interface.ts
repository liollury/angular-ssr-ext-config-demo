import { InjectionToken } from '@angular/core';

export const CONFIGURATION: InjectionToken<MyConfiguration> = new InjectionToken<MyConfiguration>('CONFIGURATION');

export interface MyConfiguration {
  production: boolean;
  apiUrl: string;
  cdnUrl: string;
  featuresActivation: FeatureActivation[];
}

export interface FeatureActivation {
  featureKey: string;
  active: boolean;
}
