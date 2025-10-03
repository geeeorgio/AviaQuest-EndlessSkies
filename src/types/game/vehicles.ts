export type VehicleId =
  | 'plane-primary'
  | 'helicopter'
  | 'airplane-2'
  | 'airplane-f1'
  | 'dirigible-77';

export interface Vehicle {
  id: VehicleId;
  name: string;
  price: number;
  image: number;
  default?: boolean;
}
