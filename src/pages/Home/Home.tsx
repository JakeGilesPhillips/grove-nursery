import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { getImages } from '../../utils/helpers';
import { Direction } from '../../models/models';
import { TabletSize } from '../../models/variables';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';
import oak_room_001 from '../../assets/nursery/oak-room-001.jpeg';
import chestnut_room_004 from '../../assets/nursery/chestnut-room-001.jpeg';

import image_001 from '../../assets/photos/image-001.png';
import image_002 from '../../assets/photos/image-002.png';
import image_003 from '../../assets/photos/image-003.png';
import image_004 from '../../assets/photos/image-004.png';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Row, Column, Quote, Paragraph_1, Subheading } from '../../styles/shared';
import { Wrapper, ContactButton, Tagline } from './Home.styles';

const Home = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;

  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  const images = [image_001, image_002, image_003, image_004];

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} shadow />
      <ContentBlock
        backgroundImage={oak_room_001}
        scroll={{ start: 60, friction: 0.6 }}
        paddingTop={headerOffset}
        paddingBot={SPACE_XL}
        shadow
        fixedHeight={400}
        waveBottom
      >
        <Column centerH centerV>
          <Quote>Space to Explore and Grow</Quote>
          <Tagline color='white'>specialist providers of education &amp; childcare for 0-5 year olds</Tagline>
          <br />
          <ContactButton>Contact Us</ContactButton>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Row between direction={direction}>
          <Column columns={columns}>
            <Subheading weight={700}>A Beautiful Space</Subheading>
            <Paragraph_1>
              At The Grove we provide children with the opportunities and the help they need to become confident, happy, successful and fulfilled individuals.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove was founded in 1999 by Rebecca Browne and Elaine Catchpole. After years of working in both private and state nursery education and
              finding the majority of provision unsatisfactory they set up The Grove in order to meet the needs of parents and children.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove provides unique, quality care and education because it is independent of any chain. We are flexible and approachable and offer each
              child and parent personal attention.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove is a wonderfully spacious nursery; there are five rooms specifically equipped for the children who are grouped according to age so that
              babies, toddlers, and pre school children all have their own areas.{' '}
            </Paragraph_1>
          </Column>
          <br />
          <Column columns={columns}>
            <ImageGallery items={getImages(images)} showPlayButton={false} showNav={false} autoPlay slideInterval={3000} />
          </Column>
        </Row>
      </ContentBlock>
      <ContentBlock backgroundImage={pattern_001} fixedHeight={600} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom />
      <ContentBlock fixedHeight={100} />
      <ContentBlock
        backgroundImage={chestnut_room_004}
        scroll={{ start: 0, friction: 0.2 }}
        fixedHeight={300}
        paddingTop={SPACE_XL}
        paddingBot={SPACE_XL}
        shadow
        waveTop
      />
      <Footer color={GREEN_200}></Footer>
    </Wrapper>
  );
};

export default Home;
