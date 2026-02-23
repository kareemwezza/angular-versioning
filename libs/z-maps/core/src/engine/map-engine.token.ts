import { InjectionToken } from '@angular/core';
import { MapEngine } from './map-engine.interface';

export const MAP_ENGINE = new InjectionToken<MapEngine>('MAP_ENGINE');
