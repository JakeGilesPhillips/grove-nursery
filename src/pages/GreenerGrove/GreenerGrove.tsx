import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { Direction } from '../../models/models';
import { PhoneSize } from '../../models/variables';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import ecoschools from '../../assets/icons/ecoschools.png';
import terracycle from '../../assets/icons/terracycle.png';
import surferssewage from '../../assets/icons/surferssewage.png';
import nationalforest from '../../assets/icons/nationalforest.png';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Column, Row, Paragraph_1, Quote, Heading, PageTitle } from '../../styles/shared';
import { Wrapper } from './GreenerGrove.styles';

const GreenerGrove = () => {
  const scrollY = useScrollPosition();
  const IsPhone = useMediaQuery({ query: `(max-width: ${PhoneSize.max}px)` });

  const direction = IsPhone ? Direction.Column : Direction.Row;
  const headerOffset = HEADER_HEIGHT * 2;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock paddingTop={headerOffset}>
        <Column columns={1}>
          <Row>
            <Column columns={1}>
              <PageTitle>A Greener Grove</PageTitle>
              <br />
              <Paragraph_1>
                The Grove has always held ‘green’ principles, we have been purchasing organic produce where possible, using toys and equipment made from natural
                resources and promoting the use of cloth nappies since we opened in 1999.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our Staff, parents and children are all actively involved, ranging from organising book and toy swaps for families to planting trees with The
                National Forest.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We are always looking at ways to improve our carbon footprint, at present we:
                <br />
                • Use a green energy supplier
                <br />
                • Purchase environmentally friendly toilet roll and recycled paper towels
                <br />
                • Plant trees for our school leavers (through the National Forest)
                <br />
                • Have become more paperless- emailing newsletters and other correspondence (children’s daily reports, termly reports and annual reports are
                available online)
                <br />
                • We use a food recycling collection
                <br />
                • Have a dry mixed recycling collection
                <br />
                • We encourage children and staff to re use unwanted containers for activities
                <br />
                • We are registered with TerraCycle as a drop-off location for BREAD BAGS
                <br />
                • We are enrolled as a Plastic Free Nursery
                <br />
                • We are registered and are working towards becoming an EcoSchool
                <br />
                • We provide Forest School sessions for Oak room children
                <br />
                • We check the resources we use with the children and no longer buying ones which are harmful to the environment, such as glitter
                <br />
                • We provide activities which will enable the children to connect with nature
                <br />
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We encourage parents to:
                <br />
                • Bring in non-plastic toothbrushes once their children’s plastic ones need replacing
                <br />
                • Bring in clothes, books and toy swaps, where families can bring in unwanted children’s clothes and toys to swap with something they do want.
                <br />
                • Use cloth nappies at nursery rather than disposables
                <br />
                • Bring in things that we could use with the children that you would normally throw away (used office paper, used envelopes, small cardboard
                containers) or use these with your children at home!
                <br />
                • Bring in your empty bread bags for us to send to TerraCycle
                <br />
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We are always looking to the future and welcome parental input on other ideas, incentives or schemes we could partake in, we are currently;
                <br />
                • Seeking alternatives to single use plastics such as cling film and nappy sacks
                <br />
                • Considering investing in the future of the planet through organisations such as Global Returns Project
                <br />
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <br />
          <br />
          <Row between direction={direction}>
            <img src={terracycle} height={100} style={{ objectFit: 'scale-down' }} alt='terracycle logo with text below' />
            <img src={surferssewage} height={100} style={{ objectFit: 'scale-down' }} alt='surfers against sewage logo with text to the right' />
            <img src={nationalforest} height={100} style={{ objectFit: 'scale-down' }} alt='the national forest logo with text below' />
            <img src={ecoschools} height={100} style={{ objectFit: 'scale-down' }} alt='eco schools logo with green flag award text below' />
          </Row>
          <br />
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default GreenerGrove;
