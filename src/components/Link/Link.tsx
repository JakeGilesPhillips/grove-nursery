import * as React from 'react';
import { openLink } from '../../utils/helpers';

import Icon from '../Icon';
import { IconProps } from '../Icon/Icon';

import { LinkWrapper } from './Link.styles';

type LinkProps = {
  icon?: IconProps;
  url: string;
};

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  const { icon, url, children } = props;

  return (
    <LinkWrapper onClick={() => openLink(url)}>
      {icon != null && <Icon {...icon} />}
      {children}
    </LinkWrapper>
  );
};

export default Link;
