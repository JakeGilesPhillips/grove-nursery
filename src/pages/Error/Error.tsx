import * as React from 'react';
import { useWindowSize } from '../../utils/hooks';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { HEADER_HEIGHT } from '../../styles/global';
import { Column, PageTitle, Subheading } from '../../styles/shared';
import { Wrapper } from './Error.styles';

const Error = () => {
  const screenSize = useWindowSize();

  return (
    <Wrapper id='wrapper'>
      <Header />
      <Column centerH centerV>
        <PageTitle>404</PageTitle>
        <Subheading>Page not found</Subheading>
      </Column>
    </Wrapper>
  );
};

export default Error;
