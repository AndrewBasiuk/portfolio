import { InjectionToken } from '@angular/core';

export const DOCUMENT = new InjectionToken('Document');
export function documentProvider() { return document; }
