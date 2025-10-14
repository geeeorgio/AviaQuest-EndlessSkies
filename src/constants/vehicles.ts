import type { Vehicle } from 'src/types/game/vehicles';

const GameAssets = {
  PlanePrimary: require('../assets/images/background/airplain-roo.png'),
  PlaneSmall: require('../assets/images/gameItems/smallPlane.png'),
  Plane2: require('../assets/images/gameItems/airplane2.png'),
  PlaneF1: require('../assets/images/gameItems/airplaneF1.png'),
  Dirigible: require('../assets/images/gameItems/dirigible77.png'),
  Helicopter: require('../assets/images/gameItems/helicopter.png'),
};

export const pausePlane = GameAssets.PlaneSmall;

export const VEHICLES: Vehicle[] = [
  {
    id: 'plane-primary',
    name: 'Air 1 (default)',
    price: 0,
    image: GameAssets.PlanePrimary,
    default: true,
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    price: 200,
    image: GameAssets.Helicopter,
  },
  {
    id: 'airplane-2',
    name: 'Airplane 2',
    price: 400,
    image: GameAssets.Plane2,
  },
  {
    id: 'airplane-f1',
    name: 'Airplane F1',
    price: 800,
    image: GameAssets.PlaneF1,
  },
  {
    id: 'dirigible-77',
    name: 'Dirigible 77',
    price: 800,
    image: GameAssets.Dirigible,
  },
];
