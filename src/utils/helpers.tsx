import lerp from 'lerp';
import { DeviceSize, MinMax, Scrollable } from '../models/models';
import { DeviceSizeMap, ContentSizeMap, ContentPaddingMap } from '../models/variables';

// Get device
export const getDevice = (width: number | undefined): DeviceSize => {
  // Return unknown if no device
  if (!width) return DeviceSize.Unknown;

  // Get device from current width
  let found: DeviceSize = DeviceSize.Phone;
  DeviceSizeMap.forEach((size, device) => {
    if (width >= size.min && width < size.max) found = device;
  });
  return found;
};

// Get device and return content size
export const getContentMinMax = (width: number | undefined): MinMax | undefined => {
  const device = getDevice(width);
  return ContentSizeMap.get(device);
};

// Get device and return padding
export const getContentPadding = (width: number | undefined): number | undefined => {
  const device = getDevice(width);
  return ContentPaddingMap.get(device);
};

export const openLink = (url: string) => {
  window.open(url, '_blank');
};

export const getScrollPercentage = (scrollY: number): number => {
  let docHeight = document?.body?.offsetHeight ?? 0;
  let winHeight = window?.innerHeight ?? 0;
  return scrollY / (docHeight - winHeight);
};

export const applyFriction = (start, friction: number): number => {
  const end = (start ?? 0) + 100 * (1 - (friction ?? 0));
  return Math.min(100, end);
};

export const interpolateScroll = (scrollable: Scrollable, scrollY: number): number => {
  const { start, friction } = scrollable;
  return Math.min(100, lerp(start ?? 0, applyFriction(start, friction), getScrollPercentage(scrollY)));
};

export const hexToUrl = (hex: string = '#FFFFFF'): string => {
  return hex.replace('#', '%23');
};

export const getImages = (images: string[]) => images.map((i) => ({ original: i }));
