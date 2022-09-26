import * as React from 'react';

import { useScrollPosition, useWindowSize } from '../../utils/hooks';
import { GOOGLE_API_KEY } from '../../models/constants';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Link from '../../components/Link';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';
import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';

import { FACEBOOK_URL, INSTAGRAM_URL } from '../../models/constants';
import { GREEN_200, HEADER_HEIGHT, SPACE_XL } from '../../styles/global';
import { Column, PageTitle, Paragraph_1, Row } from '../../styles/shared';
import { MapWrapper, Wrapper } from './Contact.styles';

const Contact = () => {
  const scrollY = useScrollPosition();
  const screenSize = useWindowSize();

  const headerOffset = HEADER_HEIGHT * 2;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock repeatPattern backgroundImage={pattern_001} paddingTop={headerOffset} paddingBot={SPACE_XL} minHeight={screenSize.height - headerOffset}>
        <Column>
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
          <br />
          <br />
          <Column centerH centerV>
            <PageTitle>Visit Us</PageTitle>
            <Paragraph_1 style={{ textAlign: 'center' }}>Want to come and see us, we would love to see you to.</Paragraph_1>
            <br />
            <MapWrapper>
              <iframe
                height={600}
                style={{ border: 0, width: '100%' }}
                loading='lazy'
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdwV9rZ8cdkgRITGQn4WfN4k&key=${GOOGLE_API_KEY}`}
              ></iframe>
            </MapWrapper>
          </Column>
          <br />
          <br />
          <Column centerH centerV>
            <PageTitle>Follow Us</PageTitle>
            <Paragraph_1 style={{ textAlign: 'center' }}>Check us out on social media.</Paragraph_1>
            <br />
            <Row>
              <Link image={{ src: Facebook, width: 30, padding: { top: 5, right: 20 } }} url={FACEBOOK_URL} />
              <Link image={{ src: Instagram, width: 30, padding: { top: 5 } }} url={INSTAGRAM_URL} />
            </Row>
          </Column>
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Contact;
