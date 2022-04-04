import { DeviceSize, MinMax } from './models';
import { SPACE_XS, SPACE_S, SPACE_M } from '../styles/global';

/** Defines the px breakpoints of each DeviceSize */
export const DeviceSizeMap = new Map<DeviceSize, MinMax>([
  [DeviceSize.Desktop, { min: 1440, max: 99999 }],
  [DeviceSize.Laptop, { min: 1024, max: 1440 }],
  [DeviceSize.Tablet, { min: 768, max: 1023 }],
  [DeviceSize.Phone, { min: 0, max: 768 }],
  [DeviceSize.Unknown, { min: 0, max: 0 }],
]);

/** Defines the min and max constraints of page content width */
export const ContentSizeMap = new Map<DeviceSize, MinMax>([
  [DeviceSize.Desktop, { min: 1056, max: 1056 }],
  [DeviceSize.Laptop, { min: 1024, max: 1056 }],
  [DeviceSize.Tablet, { min: 768, max: 1023 }],
  [DeviceSize.Phone, { min: 350, max: 768 }],
  [DeviceSize.Unknown, { min: 0, max: 0 }],
]);

/** Defines the shared padding of page content width */
export const ContentPaddingMap = new Map<DeviceSize, number>([
  [DeviceSize.Desktop, SPACE_M],
  [DeviceSize.Laptop, SPACE_M],
  [DeviceSize.Tablet, SPACE_S],
  [DeviceSize.Phone, SPACE_S],
  [DeviceSize.Unknown, 0],
]);

/** Quick getter for devices sizes */
export const DesktopSize = DeviceSizeMap.get(DeviceSize.Desktop);
export const LaptopSize = DeviceSizeMap.get(DeviceSize.Laptop);
export const TabletSize = DeviceSizeMap.get(DeviceSize.Tablet);
export const PhoneSize = DeviceSizeMap.get(DeviceSize.Phone);
