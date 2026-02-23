import {
  CreateMapOptions,
  LatLng,
  MapInstance,
  MarkerOptions,
  MarkerRef,
  PolylineOptions,
  PolylineRef,
} from './map.types';

export interface MapEngine {
  createMap(container: HTMLElement, options: CreateMapOptions): MapInstance;

  addMarker(map: MapInstance, options: MarkerOptions): MarkerRef;

  removeMarker(marker: MarkerRef): void;

  drawPolyline(map: MapInstance, options: PolylineOptions): PolylineRef;

  fitBounds(map: MapInstance, bounds: LatLng): void;

  destroy(map: MapInstance): void;
}
