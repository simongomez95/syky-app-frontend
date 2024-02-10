export type EventType = {
  uuid: string;
  title: string;
  description: string;
  date: string;
  coordinatesLat: number;
  coordinatesLon: number;
  category: CategoryType;
  planet: PlanetType;
};

export type PlanetType = {
  uuid: string;
  name: string;
}

export type CategoryType = {
  uuid: string;
  name: string;
}