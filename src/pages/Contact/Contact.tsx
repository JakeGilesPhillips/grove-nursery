import * as React from 'react';
import { useScrollPosition, useWindowSize } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';

import { GREEN_200, HEADER_HEIGHT, SPACE_XL } from '../../styles/global';
import { Column, PageTitle, Paragraph_1 } from '../../styles/shared';
import { Wrapper } from './Contact.styles';

const Contact = () => {
  const scrollY = useScrollPosition();
  const screenSize = useWindowSize();

  const headerOffset = HEADER_HEIGHT * 2;

  console.log(screenSize.height);

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock repeatPattern backgroundImage={pattern_001} paddingTop={headerOffset} minHeight={screenSize.height}>
        <Column centerH centerV>
          <PageTitle>Contact Us</PageTitle>
          <Paragraph_1 style={{ textAlign: 'center' }}>
            Want to find out more information about sending your child here? Or just want to ask us a question or give us some feedback?
            <br />
            We would love to hear from you, get in touch with us using the form below, send us an email, or give us a ring!
          </Paragraph_1>
          <br />
          <ContactForm />
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Contact;
