import * as React from 'react';
import { useScrollPosition, useWindowSize } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';

import { GREEN_200 } from '../../styles/global';
import { Wrapper } from './Contact.styles';

const Contact = () => {
  const scrollY = useScrollPosition();
  const screenSize = useWindowSize();

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock backgroundImage={pattern_001} repeatPattern fixedHeight={screenSize.height} />
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Contact;
