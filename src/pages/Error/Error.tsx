import * as React from 'react';
import { useWindowSize } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import { GREEN_200, HEADER_HEIGHT } from '../../styles/global';
import { Column, PageTitle, Subheading } from '../../styles/shared';
import { Wrapper } from './Error.styles';

const Error = () => {
  const screenSize = useWindowSize();

  return (
    <Wrapper id='wrapper'>
      <Header />
      <ContentBlock fixedHeight={screenSize.height}>
        <Column centerH centerV>
          <PageTitle>404</PageTitle>
          <Subheading>Page not found</Subheading>
        </Column>
      </ContentBlock>
    </Wrapper>
  );
};

export default Error;
