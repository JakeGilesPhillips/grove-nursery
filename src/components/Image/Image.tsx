import * as React from 'react';

type ImageProps = {
  src: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
};

const Image = (props: ImageProps) => {
  const { src, width, height } = props;

  const style: React.CSSProperties = {
    height,
    width,
  };
  return <img src={src} style={style} />;
};

export default Image;
