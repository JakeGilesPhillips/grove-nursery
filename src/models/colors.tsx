import { GREEN_800, GREEN_400, GREEN_200, GREEN_100 } from 'src/styles/global';
import { BLUE_800, BLUE_700, BLUE_600, BLUE_500, BLUE_400, BLUE_300, BLUE_200, BLUE_100 } from 'src/styles/global';
import { RED_800, RED_700, RED_600, RED_400, RED_200, RED_100 } from 'src/styles/global';
import { PLATINUM_800, PLATINUM_700, PLATINUM_600, PLATINUM_500, PLATINUM_400, PLATINUM_300, PLATINUM_200, PLATINUM_100 } from 'src/styles/global';

export enum Color {
  Green,
  Blue,
  Red,
  Platinun,
}

export type ColorWeight = 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export interface WeightedColor {
  color: Color;
  weight: ColorWeight;
}

export const ColorMap = new Map<Color, Map<ColorWeight, string>>([
  [
    Color.Green,
    new Map<ColorWeight, string>([
      [800, GREEN_800],
      [700, GREEN_800], // TODO:
      [600, GREEN_800], // TODO:
      [500, GREEN_800], // TODO:
      [400, GREEN_400],
      [300, GREEN_400], // TODO:
      [200, GREEN_200],
      [100, GREEN_100],
    ]),
  ],
  [
    Color.Blue,
    new Map<ColorWeight, string>([
      [800, BLUE_800],
      [700, BLUE_700],
      [600, BLUE_600],
      [500, BLUE_500],
      [400, BLUE_400],
      [300, BLUE_300],
      [200, BLUE_200],
      [100, BLUE_100],
    ]),
  ],
  [
    Color.Red,
    new Map<ColorWeight, string>([
      [800, RED_800],
      [700, RED_700],
      [600, RED_600],
      [500, RED_600], // TODO:
      [400, RED_400],
      [300, RED_400], // TODO:
      [200, RED_200],
      [100, RED_100],
    ]),
  ],
  [
    Color.Platinun,
    new Map<ColorWeight, string>([
      [800, PLATINUM_800],
      [700, PLATINUM_700],
      [600, PLATINUM_600],
      [500, PLATINUM_500],
      [400, PLATINUM_400],
      [300, PLATINUM_300],
      [200, PLATINUM_200],
      [100, PLATINUM_100],
    ]),
  ],
]);

export const getWeightedColor = (color: Color, weight: ColorWeight) => ColorMap.get(color).get(weight);
