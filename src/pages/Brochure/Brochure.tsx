import * as React from 'react';
import { useScrollPosition } from '../../utils/hooks';
import { openLink } from '../../utils/helpers';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';
import Link from '../../components/Link';

import brochureIcon from '../../assets/icons/brochure.png';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT, BLUE_400 } from '../../styles/global';
import { Column, Row, Paragraph_1, Heading } from '../../styles/shared';
import { BrochureWrapper, Wrapper } from './Brochure.styles';

const Brochure = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;

  const brochure = __dirname + 'documents/The%20Grove%20Nursery%20%26%20Preschool%20Brochure.pdf';
  const feestructure = __dirname + 'documents/The%20Grove%20Fee%20Structure%202022.pdf';
  const parentcontract = __dirname + 'documents/Parent%20and%20The%20Grove%20Contract.docx';

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock paddingTop={headerOffset} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Download Brochure</Heading>
            </Column>
          </Row>
          <Row between noFlex>
            <Column columns={1}>
              <Paragraph_1>You can download a copy of our brochure by clicking below.</Paragraph_1>
              <br />
              <BrochureWrapper onClick={() => openLink(brochure)}>
                <img src={brochureIcon} width={300} />
              </BrochureWrapper>
            </Column>
          </Row>
          <br />
          <br />
          <Row>
            <Column>
              <Heading>Other Documents</Heading>
            </Column>
          </Row>
          <Row between noFlex>
            <Column columns={1}>
              <Paragraph_1>Some other documents you may find useful.</Paragraph_1>
              <br />
              <Link url={feestructure}>
                <Paragraph_1 color={BLUE_400}>Fee Structure 2022</Paragraph_1>
              </Link>
              <Link url={parentcontract}>
                <Paragraph_1 color={BLUE_400}>Parent and The Grove Contract 2022</Paragraph_1>
              </Link>
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Brochure;
