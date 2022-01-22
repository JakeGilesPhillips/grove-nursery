import * as React from 'react';
import { useScrollPosition } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';
import maple_room_001 from '../../assets/nursery/maple-room-001.jpeg';
import chestnut_room_004 from '../../assets/nursery/chestnut-room-001.jpeg';

import { GREEN_200, SPACE_XL } from '../../styles/global';
import { Column, Paragraph_1 } from '../../styles/shared';
import { Wrapper } from './Home.styles';

const Home = () => {
  const scrollY = useScrollPosition();

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} shadow />
      <ContentBlock backgroundImage={maple_room_001} scroll={{ start: 40, friction: 0.6 }} shadow fixedHeight={400} waveBottom />
      <ContentBlock paddingH={SPACE_XL}>
        <Column>
          <Paragraph_1>
            At The Grove we provide children with the opportunities and the help they need to become confident, happy, successful and
            fulfilled individuals.
          </Paragraph_1>
          <br />
          <Paragraph_1>
            The Grove was founded in 1999 by Rebecca Browne and Elaine Catchpole. After years of working in both private and state nursery
            education and finding the majority of provision unsatisfactory they set up The Grove in order to meet the needs of parents and
            children.
          </Paragraph_1>
          <br />
          <Paragraph_1>
            The Grove provides unique, quality care and education because it is independent of any chain. We are flexible and approachable
            and offer each child and parent personal attention.
          </Paragraph_1>
          <br />
          <Paragraph_1>
            The Grove is a wonderfully spacious nursery; there are five rooms specifically equipped for the children who are grouped
            according to age so that babies, toddlers, and pre school children all have their own areas.{' '}
          </Paragraph_1>
        </Column>
      </ContentBlock>
      <ContentBlock backgroundImage={pattern_001} fixedHeight={600} repeatPattern shadow paddingH={SPACE_XL} waveTop waveBottom />
      <ContentBlock fixedHeight={50} />
      <ContentBlock
        backgroundImage={chestnut_room_004}
        scroll={{ start: 0, friction: 0.2 }}
        fixedHeight={300}
        paddingH={SPACE_XL}
        shadow
        waveTop
      />
      <Footer color={GREEN_200}></Footer>
    </Wrapper>
  );
};

export default Home;
