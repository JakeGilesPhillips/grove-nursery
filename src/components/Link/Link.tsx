import * as React from 'react';
import { openLink } from '../../utils/helpers';

import Icon from '../Icon';
import { IconProps } from '../Icon/Icon';
import Image from '../Image';
import { ImageProps } from '../Image/Image';

import { LinkWrapper } from './Link.styles';

type LinkProps = {
  icon?: IconProps;
  image?: ImageProps;
  url: string;
};

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  const { icon, image, url, children } = props;

  return (
    <LinkWrapper onClick={() => openLink(url)}>
      {icon != null && <Icon {...icon} />}
      {image != null && <Image {...image} />}
      {children}
    </LinkWrapper>
  );
};

export default Link;
