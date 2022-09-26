import * as React from 'react';
import MediaQuery from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { CONTACT_EMAIL } from '../../models/constants';
import { PhoneSize } from '../../models/variables';

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
                    <Paragraph_1>£2288</Paragraph_1>
                    <Paragraph_1>£1991</Paragraph_1>
                    <Paragraph_1>-</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£1544</Paragraph_1>
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
                    <Paragraph_1>£2066</Paragraph_1>
                    <Paragraph_1>£1770</Paragraph_1>
                    <Paragraph_1>-</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£1378</Paragraph_1>
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
                    <Paragraph_1>£1578</Paragraph_1>
                    <Paragraph_1>£1397</Paragraph_1>
                    <Paragraph_1>-</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£960</Paragraph_1>
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
                    <Paragraph_1>£1135</Paragraph_1>
                    <Paragraph_1>£999</Paragraph_1>
                    <Paragraph_1>-</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£570</Paragraph_1>
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
                    <Paragraph_1>£569</Paragraph_1>
                    <Paragraph_1>£497</Paragraph_1>
                    <Paragraph_1>-</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <br />
                    <br />
                    <Paragraph_1>£252</Paragraph_1>
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
                    <Paragraph_1>£1357</Paragraph_1>
                    <Paragraph_1>£271</Paragraph_1>
                  </Column>
                  <Column columns={4}>
                    <Paragraph_1>£1071</Paragraph_1>
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
                    <Paragraph_1>£68.50</Paragraph_1>
                    <Paragraph_1>£65.50</Paragraph_1>
                    <Paragraph_1>£62.00</Paragraph_1>
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
                    <Paragraph_1>£16.00</Paragraph_1>
                    <Paragraph_1>£15.50</Paragraph_1>
                    <Paragraph_1>£15.00</Paragraph_1>
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
                    <Paragraph_1>£83.00</Paragraph_1>
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
                    <Paragraph_1>£17.50</Paragraph_1>
                    <Paragraph_1>£35.00</Paragraph_1>
                  </Column>
                </Row>
                <br />
              </Column>
            </ScrollWrapperInner>
          </ScrollWrapper>

          <br />
          <Row centerH noFlex>
            <MediaQuery maxWidth={PhoneSize.max}>
              <Column centerH>
                <Paragraph_1 weight={400}>If you would like to talk to us about enrollment</Paragraph_1>
                <Paragraph_1 weight={400}>
                  you can&nbsp;<a href={'/contact-us'}>contact us</a>
                </Paragraph_1>
                <Paragraph_1 weight={400}>
                  or send an email to&nbsp;<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </Paragraph_1>
              </Column>
            </MediaQuery>

            <MediaQuery minWidth={PhoneSize.max}>
              <Paragraph_1 weight={400}>
                If you would like to talk to us about enrollment you can&nbsp;<a href={'/contact-us'}>contact us</a>&nbsp;or send an email to&nbsp;
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </Paragraph_1>
            </MediaQuery>
          </Row>
        </Column>
      </ContentBlock>

      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default OurFees;
