import * as React from 'react';
import { Spacing } from 'src/models/models';
import { PLATINUM_700 } from '../../styles/global';

export interface IconProps {
  icon?: string;
  size?: number;
  color?: string;
  padding?: Spacing;
}

const Icon = (props: IconProps) => {
  const { icon, size = 12, color = PLATINUM_700, padding } = props;

  const style: React.CSSProperties = {
    fontSize: size,
    color,
    paddingTop: padding?.top ?? 0,
    paddingBottom: padding?.bottom ?? 0,
    paddingLeft: padding?.left ?? 0,
    paddingRight: padding?.right ?? 0,
  };

  return (
    <i className='material-icons' style={style}>
      {icon}
    </i>
  );
};

export default Icon;
