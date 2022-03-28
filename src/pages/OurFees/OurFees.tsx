import * as React from 'react';

import { useScrollPosition } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import { GREEN_200, HEADER_HEIGHT, SPACE_XL } from '../../styles/global';
import { Column, Row, Paragraph_1, Heading, Subheading } from '../../styles/shared';
import { ScrollWrapper, ScrollWrapperInner, Wrapper } from './OurFees.styles';

const OurFees = () => {
  const scrollY = useScrollPosition();

  const headerOffset = HEADER_HEIGHT * 2;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock paddingTop={headerOffset} paddingBot={SPACE_XL}>
        <Column columns={1}>
          <Heading>Fees Structure 2022</Heading>
          <br />
          <ScrollWrapper>
            <ScrollWrapperInner>
              <Column columns={1}>
                <Row noFlex>
                  <Column columns={2}>
                    <Subheading>Age</Subheading>
                  </Column>
                  <Column columns={4}>
                    <Subheading>Per Month</Subheading>
                  </Column>
                  <Column columns={4}>
                    <Subheading>With Grant</Subheading>
                  </Column>
                </Row>

                {/* Full Time */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>Full Time</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£2139</Paragraph_1>
                    <Paragraph_1>£1891</Paragraph_1>
                    <Paragraph_1>£1710</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£1430</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* 4 Day Attendance */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>4 Day Regular Attendance</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£1931</Paragraph_1>
                    <Paragraph_1>£1670</Paragraph_1>
                    <Paragraph_1>£1555</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£1275</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* 3 Day Attendance */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>3 Day Regular Attendance</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£1475</Paragraph_1>
                    <Paragraph_1>£1297</Paragraph_1>
                    <Paragraph_1>£1164</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£884</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* 2 Day Attendance */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>2 Day Regular Attendance</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£1061</Paragraph_1>
                    <Paragraph_1>£889</Paragraph_1>
                    <Paragraph_1>£800</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£520</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* 1 Day Attendance */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>1 Day Regular Attendance</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£532</Paragraph_1>
                    <Paragraph_1>£460</Paragraph_1>
                    <Paragraph_1>£413</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£240</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* School Hour Week */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>School Hour Week - 5 Day Regular Attendance</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 years - 5 years (9:00am - 3:30pm)</Paragraph_1>
                    <Paragraph_1>1 school day</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£1268</Paragraph_1>
                    <Paragraph_1>£255</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£988</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* 1/2 Day Sessions */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>1/2 Day Sessions (if available)</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Paragraph_1 weight={400}>8:00am - 12:30pm or 1:30pm - 6:00pm</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£64</Paragraph_1>
                    <Paragraph_1>£61</Paragraph_1>
                    <Paragraph_1>£58</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* Hourly Rate */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>Hourly Rate</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>3 mths - 2 years</Paragraph_1>
                    <Paragraph_1>2 years - 3 years</Paragraph_1>
                    <Paragraph_1>3 years - 5 years</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£15</Paragraph_1>
                    <Paragraph_1>£14.50</Paragraph_1>
                    <Paragraph_1>£14</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* School Holiday Club */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>School Holiday Club</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>Per day paid in advance</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£77</Paragraph_1>
                  </Column>
                </Row>
                <br />

                {/* Wrap Around */}
                <Row noFlex>
                  <Paragraph_1 weight={400}>Wrap Around Care for 3 Year Old Grant</Paragraph_1>
                </Row>
                <Row noFlex>
                  <Column columns={2}>
                    <Paragraph_1>8:00am - 9:30am</Paragraph_1>
                    <Paragraph_1>3:30pm - 6:30pm</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£16.50</Paragraph_1>
                    <Paragraph_1>£33.00</Paragraph_1>
                  </Column>
                </Row>
                <br />
              </Column>
            </ScrollWrapperInner>
          </ScrollWrapper>
        </Column>
      </ContentBlock>

      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default OurFees;
