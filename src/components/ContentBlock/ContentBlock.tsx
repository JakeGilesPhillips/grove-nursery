import * as React from 'react';
import { useMemo } from 'react';

import { Scrollable } from '../../models/models';
import { useScrollPosition } from '../../utils/hooks';
import { interpolateScroll } from '../../utils/helpers';

import DynamicWrapper from '../DynamicWrapper';
import { Block } from './ContentBlock.styles';

export interface ContentBlockProps {
  backgroundImage?: string;
  repeatPattern?: boolean;
  scroll?: Scrollable;
  fixedHeight?: number;
  minHeight?: number;
  paddingTop?: number;
  paddingBot?: number;
  waveTop?: boolean;
  waveBottom?: boolean;
  shadow?: boolean;
}

const ContentBlock = (props: React.PropsWithChildren<ContentBlockProps>) => {
  const scrollY = useScrollPosition();
  const offset = useMemo(() => {
    if (!props.scroll) return;
    return `50% ${interpolateScroll(props.scroll, scrollY)}%`;
  }, [scrollY]);

  return (
    <Block {...props} style={{ backgroundPosition: offset }}>
      <DynamicWrapper>{props.children}</DynamicWrapper>
    </Block>
  );
};

export default ContentBlock;
