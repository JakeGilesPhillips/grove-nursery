import * as React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../utils/hooks';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import chestnut_room_004 from '../../assets/nursery/chestnut-room-004.jpeg';

import { GREEN_200 } from '../../styles/global';
import { Column, PageTitle } from '../../styles/shared';
import { Wrapper } from './Brochure.styles';

const Brochure = () => {
  const scrollY = useScrollPosition();
  const url = __dirname + 'documents/The%20Grove%20Nursery%20%26%20Preschool%20Brochure.pdf';
  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock backgroundImage={chestnut_room_004} fixedHeight={300} scroll={{ start: 50, friction: 1 }} waveBottom />
      <ContentBlock waveBottom>
        <Column centerH centerV>
          <Link to={url} target='_blank/'>
            <PageTitle>Download Brochure</PageTitle>
          </Link>
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default Brochure;
