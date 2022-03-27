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
import welcome_area from '../../assets/nursery/welcome-area-001.jpeg';
import willow_room_001 from '../../assets/nursery/willow-room-001.jpeg';
import willow_room_002 from '../../assets/nursery/willow-room-002.jpeg';
import willow_room_003 from '../../assets/nursery/willow-room-003.jpeg';
import maple_room_001 from '../../assets/nursery/maple-room-001.jpeg';
import maple_room_002 from '../../assets/nursery/maple-room-002.jpeg';
import maple_room_003 from '../../assets/nursery/maple-room-003.jpeg';
import chestnut_room_001 from '../../assets/nursery/chestnut-room-001.jpeg';
import chestnut_room_002 from '../../assets/nursery/chestnut-room-002.jpeg';
import chestnut_room_003 from '../../assets/nursery/chestnut-room-003.jpeg';
import chestnut_room_004 from '../../assets/nursery/chestnut-room-004.jpeg';
import elm_room_001 from '../../assets/nursery/elm-room-001.jpeg';
import elm_room_002 from '../../assets/nursery/elm-room-002.jpeg';
import elm_room_003 from '../../assets/nursery/elm-room-003.jpeg';
import elm_room_004 from '../../assets/nursery/elm-room-004.jpeg';
import oak_room_001 from '../../assets/nursery/oak-room-001.jpeg';
import oak_room_002 from '../../assets/nursery/oak-room-002.jpeg';
import oak_room_003 from '../../assets/nursery/oak-room-003.jpeg';
import oak_room_004 from '../../assets/nursery/oak-room-004.jpeg';
import oak_room_005 from '../../assets/nursery/oak-room-005.jpeg';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Column, Row, Heading, Subheading, Paragraph_1, Quote } from '../../styles/shared';
import { Wrapper } from './OurNursery.styles';

const OurNursery = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const titleHeight = IsTablet ? 200 : 400;
  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  const willow = [willow_room_001, willow_room_002, willow_room_003];
  const maple = [maple_room_001, maple_room_002, maple_room_003];
  const chestnut = [chestnut_room_001, chestnut_room_002, chestnut_room_003, chestnut_room_004];
  const elm = [elm_room_001, elm_room_002, elm_room_003, elm_room_004];
  const oak = [oak_room_001, oak_room_002, oak_room_003, oak_room_004, oak_room_005];

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock
        backgroundImage={welcome_area}
        scroll={{ start: 60, friction: 0.6 }}
        paddingTop={headerOffset}
        paddingBot={SPACE_XL}
        shadow
        fixedHeight={titleHeight}
        waveBottom
      >
        <Column centerH centerV>
          <Quote fontSize={42}>Our Nursery</Quote>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Willow Room</Heading>
              <Subheading>Baby Areas, 0-1 Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={columns}>
              <Paragraph_1>
                This quiet and airy room provides a warm and comforting environment for our youngest children. There are soft mats to lie or crawl on, mirrored
                walls for sensory stimulation and equipment to aid physical development. There is a play area for crawling and hiding in. A cushioned book
                corner is screened off from the rest of the nursery for those quiet moments. Tactile activities are offered along with exploration of treasure
                baskets. All equipment has been carefully chosen with the babies’ developmental needs in mind.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Off the main play room is the sensory room which is dedicated to sensory activities, this area is also used as the sleeping area. There is a
                bubble tube, different lighting effects and music to sooth the children.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Each baby initially keeps to the routine they have been used to and the key worker works closely with parents to ensure that our youngest
                children are happy and settled.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We teach the children Makaton sign language which enables the children to communicate with us before they are able to speak.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We provide cloth nappies for the children whilst they are at The Grove to try to do a little bit to help save the environment. Parents can
                provide their own nappies if they prefer.
              </Paragraph_1>
            </Column>
            <br />
            <Column columns={columns}>
              <ImageGallery items={getImages(willow)} showPlayButton={false} showNav={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Maple Room</Heading>
              <Subheading>Lower Toddler Areas, 1-2 Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={columns}>
              <Paragraph_1>This large open space is ideal for energetic toddlers.</Paragraph_1>
              <br />
              <Paragraph_1>
                A wonderful soft play area has been created within a partition for the children to practise their physical skills and have fun with their
                friends. This area is used by all the children in the nursery at different times of the day.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The slide activity centre provides further opportunities for physical play along with wooden bikes, trolleys and rockers.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The “messy area” allows the children to explore water, sand and tactile materials and experiment with paint and glue as they create their first
                master pieces!
              </Paragraph_1>
              <br />
              <Paragraph_1>
                There is a bathroom with low level lavatories for children being helped through the initial stages of toilet training and a nappy changing
                area..
              </Paragraph_1>
            </Column>
            <Column columns={columns}>
              <ImageGallery items={getImages(maple)} showPlayButton={false} showNav={false} slideInterval={3100} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Chestnut Room</Heading>
              <Subheading>Upper Toddler Areas, 2-3 Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={columns}>
              <Paragraph_1>
                This light and spacious area has been decorated as a woodland scene with murals and collage that the children are encouraged to explore. It
                contains equipment and resources specific to the physical, intellectual and emotional needs of the two year old child. There is a home corner
                area for imaginative play, a cosy cushioned book corner and a well stocked creative area.
              </Paragraph_1>
              <br />
              <Paragraph_1>At the centre of the room is our unique tree house, allowing physical play in a safe but exciting setting.</Paragraph_1>
              <br />
              <Paragraph_1>
                The children also have their own bathroom with low level lavatories and hand basins to help promote their social independence skills and to aid
                with toilet training.
              </Paragraph_1>
            </Column>
            <Column columns={columns}>
              <ImageGallery items={getImages(chestnut)} showPlayButton={false} showNav={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Elm Room</Heading>
              <Subheading>Lower Preschool, 3-4 Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={columns}>
              <Paragraph_1>
                This area has been specially created for our preschool children. It is a beautifully light and calm space with a wild flower and butterfly
                theme. The pre school children are introduced to the Foundation stage of the National Curriculum through a range of daily planned activities
                which with time for freeplay and exploration provide the children with a balanced day. In Elm there is a quiet area for reading, a computer with
                pre school programs, a role play area for imaginative play and a well stocked creative area. The children have constant access to sand and water
                trays for scientific exploration and are able to choose which other equipment they would like to experiment with from the low level storage
                units.
              </Paragraph_1>
              <br />
              <Subheading>The curriculum in the preschool</Subheading>
              <Paragraph_1>
                Once the children are three they follow the Foundation Stage of the National Curriculum. The teachers plan activities based around monthly or
                termly themes to cover the seven areas of learning:
                <br />
                • communication and language;
                <br />
                • physical development;
                <br />
                • personal, social and emotional development;
                <br />
                • literacy;
                <br />
                • mathematics;
                <br />
                • understanding the world; and
                <br />• expressive arts and design.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Activities are fun but Educational, the children are given the opportunity to explore their own lines of interest with the support of their
                teachers.
              </Paragraph_1>
            </Column>
            <Column columns={columns}>
              <ImageGallery items={getImages(elm)} showPlayButton={false} showNav={false} slideInterval={3100} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Oak School Room</Heading>
              <Subheading>Upper Preschool, 3+ Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={columns}>
              <Paragraph_1>This beautiful light, spacious room is for our oldest children.</Paragraph_1>
              <br />
              <Paragraph_1>
                There is a home corner which encourages social interaction and role play. The creative area provides children with opportunities to explore and
                experiment with painting, drawing and modelling materials. Sand and water trays enable scientific investigation and the children’s scientific
                understanding is further extended through the provision of magnets, mirrors and magnifiers. The book corner with cosy bean bags provides a
                welcoming place for children to look at books and be read to. This is also the area where “circle time” is held, with stories, songs and more
                structured learning activities.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The preschool computer with a variety of programs encourages the children to learn about numbers and letters as well as developing their
                computer skills. The large floor area of the pre school means there is space for the children to build roads and railways and make interesting
                constructions using the many construction materials provided. The preschool has its own bathroom which is next to the play area allowing the
                children free access to the low level lavatories and hand basins, and so encouraging independence.
              </Paragraph_1>
            </Column>
            <Column columns={columns}>
              <ImageGallery items={getImages(oak)} showPlayButton={false} showNav={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Row>
          <Column columns={2}>
            <Heading>Explore Room</Heading>
          </Column>
        </Row>
      </ContentBlock>

      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Row>
          <Column columns={2}>
            <Heading>Teaching Room</Heading>
          </Column>
        </Row>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default OurNursery;
