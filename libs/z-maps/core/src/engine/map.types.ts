export interface LatLng {
  lat: number;
  lng: number;
}

export interface CreateMapOptions {
  center: LatLng;
  zoom: number;
}

export interface MarkerOptions {
  position: LatLng;
  icon?: string;
}

export interface PolylineOptions {
  path: LatLng[];
  color?: string;
}

export type MapInstance = unknown;
export type MarkerRef = unknown;
export type PolylineRef = unknown;
