export enum DeviceSize {
  Desktop,
  Laptop,
  Tablet,
  Phone,
  Unknown,
}

export interface Size {
  width?: number;
  height?: number;
}

export interface Spacing {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

/**
 * Defines a value with a minimum, maximum and optional default value
 * @min Minimum value
 * @max Maximum value
 * @def Default value
 */
export interface MinMax {
  min: number;
  max: number;
  def?: number;
}

/**
 * Defines a scrollable element
 * @start Start Y position
 * @friction Value between 0-1
 */
export interface Scrollable {
  start?: number;
  friction?: number;
}

export enum Direction {
  Column = 'column',
  Row = 'row',
}

export interface ImageProperties {
  image: string;
  alt?: string;
}
