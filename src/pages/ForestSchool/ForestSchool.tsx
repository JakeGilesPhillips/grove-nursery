import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { TabletSize } from '../../models/variables';
import { getImages } from '../../utils/helpers';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import forest_school_001 from '../../assets/forestschool/forest-school-001.png';
import forest_school_002 from '../../assets/forestschool/forest-school-002.png';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Column, Row, Paragraph_1, Quote, Heading } from '../../styles/shared';
import { Wrapper } from './ForestSchool.styles';

const ForestSchool = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const titleHeight = IsTablet ? 200 : 300;
  const forest = [
    { image: forest_school_001, alt: 'two children playing in the mud in a forest' },
    { image: forest_school_002, alt: 'three boxes containing leaves and berries' },
  ];

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock
        backgroundImage={forest_school_001}
        scroll={{ start: 40, friction: 1 }}
        paddingTop={headerOffset}
        paddingBot={SPACE_XL}
        shadow
        fixedHeight={titleHeight}
        waveBottom
      >
        <Column centerH centerV>
          <Quote fontSize={42}>Forest School</Quote>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column columns={1}>
          <Row>
            <Column columns={1}>
              <Heading> Forest School at The Grove</Heading>
              <br />
              <Paragraph_1>
                Some of our happiest childhood memories tend to involve being outside, at The Grove we recognise the importance of providing opportunities to
                take the children out. Children want, and need ample space, they love the multisensory experience of being outside. A large part of our Forest
                Schools ethos is to increase a child’s self- esteem by allowing the children to explore their own fascinations, test their own limits and work
                cooperatively with others.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our Forest School sessions introduce city children to the wonders of our world and initiate a love and understanding of nature and natural
                spaces. Our dedicated staff take the children outside to explore and learn in small groups of 4-8 children with 2-3 adults. The children
                participate in small achievable tasks, learning new skills and gaining independence.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                During these sessions, the children learn in an environment which engages all their senses. They are involved in practical activities tackling
                manageable tasks which are achievable but still challenging. The children learn to take risks within a safe and controlled environment where
                they can work out their own limits and explore and develop strengths and new skills. They learn how to work with others as part of a team and
                also learn independence. Children are physically active leading to the development of a healthy lifestyle. These sessions also cover all areas
                of the Early Years Curriculum.
              </Paragraph_1>
              <br />
              <Paragraph_1>The children receive a detailed photographic “Forest School journal” as a souvenir of their Forest school experience.</Paragraph_1>
              <br />
              <Paragraph_1>
                At The Grove we pride ourselves on the importance of giving something back to the environment. Continuing our love of the forest, we plant a
                tree for every child as they move on to school. As the children leave, they are given a certificate of their very own tree. It’s our way to
                continue growing a grove outside The Grove. Each tree we plant is planted through The National Forest.
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column columns={1}>
              <ImageGallery items={getImages(forest)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default ForestSchool;
