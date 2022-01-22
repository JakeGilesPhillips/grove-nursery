import * as React from 'react';
import { getContentMinMax, getContentPadding } from '../../utils/helpers';
import { useWindowSize } from '../../utils/hooks';
import { DynamicContainer } from './DynamicWrapper.styles';

const DynamicWrapper = (props: any) => {
  // Get screen size and update the container style with minMax
  const screenSize = useWindowSize();
  const minMax = React.useMemo(() => getContentMinMax(screenSize.width), [screenSize]);
  const padding = React.useMemo(() => getContentPadding(screenSize.width), [screenSize]);

  return (
    <DynamicContainer {...props} minMax={minMax} padding={padding}>
      {props.children}
    </DynamicContainer>
  );
};

export default DynamicWrapper;
