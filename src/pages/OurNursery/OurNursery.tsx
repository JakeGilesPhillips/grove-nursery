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
import pattern_002 from '../../assets/backgrounds/pattern_002.png';
import street_view from '../../assets/nursery/street-view-001.jpeg';
import { willow, maple, chestnut, elm, oak, garden, explore, teaching } from './images';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Column, Row, Heading, Subheading, Paragraph_1, Quote } from '../../styles/shared';
import { Wrapper } from './OurNursery.styles';

const OurNursery = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const titleHeight = IsTablet ? 200 : 400;
  const direction = IsTablet ? Direction.Column : Direction.Row;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock
        backgroundImage={street_view}
        scroll={{ start: 35, friction: 0.6 }}
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
            <Column columns={IsTablet ? 1 : 2}>
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
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(willow)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
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
            <Column columns={IsTablet ? 1 : 2}>
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
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(maple)} showPlayButton={false} slideInterval={3100} autoPlay lazyLoad showBullets />
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
            <Column columns={IsTablet ? 1 : 2}>
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
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(chestnut)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_002} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Elm Room</Heading>
              <Subheading>Lower Preschool, 3-4 Years</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={IsTablet ? 1 : 2}>
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
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(elm)} showPlayButton={false} slideInterval={3100} autoPlay lazyLoad showBullets />
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
            <Column columns={IsTablet ? 1 : 2}>
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
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(oak)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Exploration/Sensory Room</Heading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={IsTablet ? 1 : 2}>
              <Paragraph_1>
                Our purposely designed sensory room is full of lights, bubble tubes and fibre optic lights it encourages our youngest children to use their
                senses to develop a greater understanding of the world around them. It gives them freedom to explore in a stimulating and inviting environment.
              </Paragraph_1>
              <br />
              <Paragraph_1>Our staff support the children through play and exploration to make connections and to explore.</Paragraph_1>
              <br />
              <Paragraph_1>
                Sensory play encourages learning through exploration, curiosity, problem solving and creativity. It helps to build nerve connections in the
                brain and encourages the development of language and motor skills. It also helps our youngest children to develop bonds with their peers and
                staff.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                For young children, sensory play stimulates their sense of touch, smell, taste, sight, movement, and hearing. It helps create connections in the
                brain that allow for more complex thoughts and tasks. It helps stimulate and relax the senses to help children to learn, move, communicate,
                share and concentrate.
              </Paragraph_1>
              <br />
              <Paragraph_1>The children thoroughly enjoy exploring our sensory room.</Paragraph_1>
            </Column>
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(explore)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Montessori Teaching Room</Heading>
              <Subheading>“Play is the child’s work.”</Subheading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={IsTablet ? 1 : 2}>
              <Paragraph_1>
                Montessori believed in sensory play, where the child learns through play from hands on experiences, with the help of a teacher helping the child
                play to learn. 
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our qualified Montessori teacher works closely with children aged 2 years and up once a week on a one to one session giving he children tailor
                made sessions as an extra addition to their room learning. She supports them through positive reinforcement offering them support and guidance
                with their choices.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The room is set out to give the children freedom of choice to choose which activities they would like to do that day. All activities are well
                presented and displayed on open shelves at the child’s level.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our activities range from practical life equipment, which supports children in their independence to become confident in their own abilities. It
                develops their fine motor skills, hand eye coordination and bilateral integration using buttons, zips, buckles and bow which in turn will
                develop their life skills.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our senatorial shelf has sound boxes, smell boxes, along with visually stimulating activities which can identify any delays in sight or hearing
                impairment.
              </Paragraph_1>
              <br />
              <Paragraph_1>Our binomial cube promotes the child’s visual perception of 3D shapes.</Paragraph_1>
              <br />
              <Paragraph_1>
                Our maths shelf has lots of tactile numbers and shapes as well as variety of counting activities to support the child in early maths, number,
                and shape recognition.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our language shelf has a variety of activities to promote language i.e. language boxes, blow games, for speech development. Cognitive activities
                and sandpaper letters, nouns, sight words, pink sentence reading cards.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Weekly informative reports are written by our teacher on the child’s choice of activity and their progress. The children have great fun in our
                teaching room and enjoy the one to one attention from the teacher.
              </Paragraph_1>
            </Column>
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(teaching)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <ContentBlock backgroundImage={pattern_002} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop>
        <Column>
          <Row>
            <Column>
              <Heading>Garden</Heading>
            </Column>
          </Row>
          <Row between direction={direction}>
            <Column columns={IsTablet ? 1 : 2}>
              <Paragraph_1>We are very lucky to have a small outside area for the children to play in.</Paragraph_1>
              <Paragraph_1>
                On fine days the area is set up with a range of different toys. There is a home area for role play and a swing and plenty of ride on toys a
                slides for physical play. The sand and water trays are also put out for the children to have greater freedom in their exploratory play.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Babies have the opportunity for outdoor play too with their specially designed garden directly off our exploratory room.
              </Paragraph_1>
              <br />
              <br />
              <Paragraph_1 weight={400}>Further outdoor experiences in our daily curriculum:</Paragraph_1>
              <br />
              <Paragraph_1>Children are encouraged to wear weather appropriate clothing to enjoy outdoor play in all weathers.</Paragraph_1>
              <br />
              <Paragraph_1>
                We encourage children to develop a wider experience of the world around them. We have double buggies to take the babies out on daily walks and
                visits to the park or canal to feed the ducks.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                In developing our older children’s out door experiences, they also have the opportunity to visit the local parks and canal. They also partake in
                extracurricular outings to widen their knowledge and experiences, they visit places of interest, such as museums, City farm, Buckingham palace,
                City airport and aquarium to name a few.
              </Paragraph_1>
            </Column>
            <br />
            <Column columns={IsTablet ? 1 : 2.8}>
              <ImageGallery items={getImages(garden)} showPlayButton={false} slideInterval={3000} autoPlay lazyLoad showBullets />
            </Column>
          </Row>
        </Column>
      </ContentBlock>
      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default OurNursery;
