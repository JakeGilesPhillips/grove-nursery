import * as React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../utils/hooks';
import { TabletSize } from '../../models/variables';
import { CONTACT_EMAIL, FACEBOOK_URL, GOOGLE_MAPS_URL, INSTAGRAM_URL, PHONE_NUMBER } from '../../models/constants';

import Link from '../Link';
import Image from '../Image';
import DynamicWrapper from '../DynamicWrapper';

import OfstedLogo from '../../assets/ofsted/Ofsted_Good_GP_Colour.png';
import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';

import { Column, Caption, Paragraph_1, Title, Row } from '../../styles/shared';
import { SPACE_S } from '../../styles/global';
import { FooterSegment, FooterSegmentWrapper, FooterWrapper } from './Footer.styles';

type FooterProps = {
  color: string;
  noShadow?: boolean;
};

const Footer = (props: FooterProps) => {
  const { color, noShadow } = props;

  const screenSize = useWindowSize();
  const IsTabletOrPhone = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });
  const [isShorterThanScreen, setIsShorterThanScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsShorterThanScreen(document.body.clientHeight < screenSize.height);
  }, [document.body.clientHeight, screenSize]);

  return (
    <FooterWrapper id='footer' fixed={isShorterThanScreen} noShadow={noShadow} color={color}>
      <DynamicWrapper>
        <Column>
          <FooterSegmentWrapper padding={{ top: SPACE_S, bottom: SPACE_S }} tabletOrPhone={IsTabletOrPhone}>
            <FooterSegment>
              <Title>Grove Nursery &amp; Preschool</Title>
              <Paragraph_1>Shepperton House</Paragraph_1>
              <Paragraph_1>83-93 Shepperton Road</Paragraph_1>
              <Paragraph_1>Islington</Paragraph_1>
              <Paragraph_1>N1 3DF</Paragraph_1>
              <br />
              <Link icon={{ icon: 'room', size: 12, padding: { right: 4 } }} url={GOOGLE_MAPS_URL}>
                <Paragraph_1 underline>Show on map</Paragraph_1>
              </Link>
            </FooterSegment>
            <FooterSegment>
              <Title>Contact Us</Title>
              <Link icon={{ icon: 'phone', size: 12, padding: { right: 4 } }} url={`tel:${PHONE_NUMBER}`}>
                <Paragraph_1 underline>{PHONE_NUMBER}</Paragraph_1>
              </Link>
              <Link icon={{ icon: 'mail', size: 12, padding: { right: 4 } }} url={`mailto:${CONTACT_EMAIL}`}>
                <Paragraph_1 underline>{CONTACT_EMAIL}</Paragraph_1>
              </Link>
              <Row>
                <Link image={{ src: Facebook, width: 30, padding: { top: 5, right: 20 } }} url={FACEBOOK_URL} />
                <Link image={{ src: Instagram, width: 30, padding: { top: 5 } }} url={INSTAGRAM_URL} />
              </Row>
            </FooterSegment>
            <FooterSegment alignRight hide={IsTabletOrPhone}>
              <Image src={OfstedLogo} height={125} />
            </FooterSegment>
          </FooterSegmentWrapper>

          <FooterSegmentWrapper padding={{ top: 4, bottom: 4 }} hide={IsTabletOrPhone}>
            <Caption weight={700}>&copy; Grove Nursery & Preschool {new Date().getFullYear()}</Caption>
            <Caption weight={700}>
              Website designed by&nbsp;
              <Link url='https://www.newblankpage.co.uk'>
                <Caption underline weight={800}>
                  NewBlankPage
                </Caption>
              </Link>
            </Caption>
          </FooterSegmentWrapper>
        </Column>
      </DynamicWrapper>
    </FooterWrapper>
  );
};

export default Footer;
