import * as React from 'react';

import { useScrollPosition, useWindowSize } from '../../utils/hooks';
import { GOOGLE_API_KEY } from '../../models/constants';

import Header from '../../components/Header';

import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

import { HEADER_HEIGHT, SPACE_XL } from '../../styles/global';
import { Column, PageTitle, Paragraph_1 } from '../../styles/shared';
import { MapWrapper, Wrapper } from './Contact.styles';

const Contact = () => {
  const scrollY = useScrollPosition();
  const screenSize = useWindowSize();

  const headerOffset = HEADER_HEIGHT * 2;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <Footer color={'black'} noShadow></Footer>
    </Wrapper>
  );
};

export default Contact;
