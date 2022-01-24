import * as React from 'react';
import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../utils/hooks';
import { TabletSize } from '../../models/variables';
import { CONTACT_EMAIL, GOOGLE_MAPS_URL, PHONE_NUMBER } from '../../models/constants';

import Link from '../Link';
import Image from '../Image';
import DynamicWrapper from '../DynamicWrapper';

import OfstedLogo from '../../assets/ofsted/Ofsted_Good_GP_Colour.png';
import { Column, Caption, Paragraph_2, Title } from '../../styles/shared';
import { SPACE_S } from '../../styles/global';
import { FooterSegment, FooterSegmentWrapper, FooterWrapper } from './Footer.styles';

type FooterProps = {
  color: string;
  noShadow?: boolean;
};

const Footer = (props: FooterProps) => {
  const { color, noShadow } = props;

  const IsTabletOrPhone = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const screenSize = useWindowSize();
  const isShorterThanScreen = useMemo(() => {
    return document.body.clientHeight < screenSize.height;
  }, [screenSize, document.body.clientHeight]);

  return (
    <FooterWrapper id='footer' fixed={isShorterThanScreen} noShadow={noShadow} color={color}>
      <DynamicWrapper>
        <Column>
          <FooterSegmentWrapper padding={{ top: SPACE_S, bottom: SPACE_S }} tabletOrPhone={IsTabletOrPhone}>
            <FooterSegment>
              <Title>Grove Nursery &amp; Preschool</Title>
              <Paragraph_2>Shepperton House</Paragraph_2>
              <Paragraph_2>83-93 Shepperton Road</Paragraph_2>
              <Paragraph_2>Islington</Paragraph_2>
              <Paragraph_2>N1 3DF</Paragraph_2>
              <br />
              <Link icon={{ icon: 'room', size: 12, padding: { right: 4 } }} url={GOOGLE_MAPS_URL}>
                <Paragraph_2 underline>Show on map</Paragraph_2>
              </Link>
            </FooterSegment>
            <FooterSegment>
              <Title>Contact Us</Title>
              <Link icon={{ icon: 'phone', size: 12, padding: { right: 4 } }} url={`tel:${PHONE_NUMBER}`}>
                <Paragraph_2 underline>{PHONE_NUMBER}</Paragraph_2>
              </Link>
              <Link icon={{ icon: 'mail', size: 12, padding: { right: 4 } }} url={`mailto:${CONTACT_EMAIL}`}>
                <Paragraph_2 underline>{CONTACT_EMAIL}</Paragraph_2>
              </Link>
            </FooterSegment>
            <FooterSegment alignRight hide={IsTabletOrPhone}>
              <Image src={OfstedLogo} height={125} />
            </FooterSegment>
          </FooterSegmentWrapper>

          <FooterSegmentWrapper padding={{ top: 4, bottom: 4 }} hide={IsTabletOrPhone}>
            <Caption weight={700}>&copy; Grove Nursery & Preschool {new Date().getFullYear()}</Caption>
            <Caption weight={700}>
              Website designed by&nbsp;
              <Link url='www.newblankpage.co.uk'>
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
