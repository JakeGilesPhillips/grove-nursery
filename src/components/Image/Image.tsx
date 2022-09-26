import * as React from 'react';
import { Spacing } from 'src/models/models';

export type ImageProps = {
  src: string;
  alt?: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
  padding?: Spacing;
};

const Image = (props: ImageProps) => {
  const { src, alt = '', width, height, padding } = props;

  const style: React.CSSProperties = {
    height,
    width,
    paddingTop: padding?.top ?? 0,
    paddingBottom: padding?.bottom ?? 0,
    paddingLeft: padding?.left ?? 0,
    paddingRight: padding?.right ?? 0,
  };

  return <img src={src} style={style} alt={alt} />;
};

export default Image;
