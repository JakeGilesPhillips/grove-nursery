import { GREEN_200 } from '../../styles/global';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  background: ${GREEN_200};
`;

const ScrollWrapper = styled.div`
  overflow-x: scroll;
  flex: 1;
`;

const ScrollWrapperInner = styled.div`
  min-width: 500px;
`;

export { Wrapper, ScrollWrapper, ScrollWrapperInner };
