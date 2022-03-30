import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { TabletSize } from '../../models/variables';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';
import pattern_002 from '../../assets/backgrounds/pattern_002.png';
import welcome_area from '../../assets/nursery/welcome-area-001.jpeg';
import foodlogo from '../../assets/icons/foodhygiene.png';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';
import Image from '../../components/Image';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Column, Row, Heading, Subheading, Paragraph_1, Quote } from '../../styles/shared';
import { Wrapper } from './OurClasses.styles';
import { Tagline } from '../Home/Home.styles';

const OurNursery = () => {
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const titleHeight = IsTablet ? 200 : 400;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} />
      <ContentBlock
        backgroundImage={welcome_area}
        scroll={{ start: 60, friction: 0.8 }}
        paddingTop={headerOffset}
        paddingBot={SPACE_XL}
        shadow
        fixedHeight={titleHeight}
        waveBottom
      >
        <Column centerH centerV>
          <Quote fontSize={42}>Our Extra Classes</Quote>
          <Tagline>
            The Grove offers extra lessons taught by specialised teachers in French, Spanish, music, dance, baby and toddler yoga, and Sports school sessions.
          </Tagline>
        </Column>
      </ContentBlock>

      {/* Music  */}
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Music At The Grove</Heading>
              <Subheading>Taught by Patty Armstrong</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                We at The Grove believe exposing children to music helps them to learn sounds mean words and words have meaning. Music supports all areas of
                child development including intellectual, social-emotional, motor, language and overall literacy. It helps the body and mind work together and
                is a vital part of children’s learning at The Grove.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Throughout the day children are encouraged to participate in music and dance as part of their everyday curriculum and calming music is played
                during sleep time. Circle times are fun and engaging We provide extracurricular music sessions for children aged 2 years – 4 years.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Our visiting music teacher takes classes once a week. She guides and supports the children through sound, rhythm and repetition. These music
                classes improve the child’s ability to learn, it improves their memory, cognitive development, learning skills and expressive ability.
              </Paragraph_1>
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      {/* Languages */}
      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Foreign Languages</Heading>
              <Subheading>Spanish &amp; French</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                At the Grove we are always looking at ways to enrich children’s learning and develop the skills they already have. Additional languages boost
                problem-solving, critical- thinking and listening skills, it can improve memory and concentration and the ability to multi-task. Research has
                shown children proficient in other languages also show signs of enhanced creativity and mental flexibility. Pre-school children learn
                effortlessly and communicate naturally in another language at this young age.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We offer Spanish and French as extra classes both are taught by external teacher fluent in the language they are teaching.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                We offer Spanish for our older children in Oak room as part of our curriculum and French is offered as an optional extra class for our 2 older
                classes, younger children who have knowledge of French or Spanish can join these classes if there is availability.
              </Paragraph_1>
              <br />
              <Paragraph_1>We are always open for new ideas from parents on teaching other languages and in the past have offered Mandarin.</Paragraph_1>
            </Column>
            <br />
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>French at The Grove</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                “Les Coccinelles French for Children”, specialises in teaching French in nurseries and are an excellent start and introduction to learning a new
                language. The classes are fun and engaging and are taught through games, flash cards and songs. The use of puppets is valuable in engaging the
                children’s listening skills. They take the children form basic greetings to real life situations through role play. All teachers are French
                speaking and can introduce the children to French customs and way of life.
              </Paragraph_1>
            </Column>
            <br />
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Spanish at The Grove</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Our Spanish classes are taught by an ex-parent of The Grove, Maria. As like the French classes all lessons are fun and engaging. Children learn
                through flash cards, games, songs and repetition. The teacher takes time to ensure the children are comfortable and understand the lesson before
                she moves on. Children can often be heard singing Spanish or French songs throughout the day without any prompting and are always excited to
                tell their parents what new things they have learnt.
              </Paragraph_1>
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      {/* Baby Yoga */}
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>Baby &amp; Toddler Yoga</Heading>
              <Subheading>Baby Yoga and Yoga 4 Tots with Gabrielle Haynes</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                At The Grove we believe in providing all children with physical activities even for our youngest children. Once a week, a visiting Yoga
                specialist comes into take yoga sessions for our babies and toddlers.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                These classes create a fun atmosphere and are a gentle and fun way for babies and toddlers to exercise through games and songs. This encourages
                participation and social skills, such as sharing. With the use of nursery rhymes, colourful books and props provides the children with
                experiences that enriches their understanding of language.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                There are many benefits with Baby Yoga, for the youngest their gross and fine motor skills are aided and sleep is improved. Some of the yoga
                poses and stretches used help with digestion, relieve gas, colic and constipation. Yoga also helps with co- ordination and strengthens their
                muscles whilst keeping their flexibility.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Babies are encouraged through action rhymes to guide their movements and stretches. The yoga teacher and staff demonstrate yoga poses to
                represent such things as animals in the story or song. Bubbles, balls and parachutes are also used to help create a wonderful sensory experience
                for the babies.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                Once the children graduate to the toddler group their class starts with dancing and singing to yoga songs and nursery rhymes that are familiar
                to them. Through a planned theme such as transport, gardens, visiting a farm or going to the jungle the children use yoga poses to act out the
                story. We use familiar pictures to show the children what pose is required such as a gorilla, cat or dog, butterfly or frog. Breathing
                techniques are also incorporated into the class, such as hissing like a snake. Brain Gym games are also incorporated in these classes.
              </Paragraph_1>
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      {/* Dance */}
      <ContentBlock backgroundImage={pattern_002} repeatPattern shadow paddingTop={SPACE_XL} paddingBot={SPACE_XL} waveTop waveBottom>
        <Column>
          <Row>
            <Column>
              <Heading>Sport</Heading>
              <Subheading>Taught by Teacher Paul</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Physical education is paramount to the child’s wellbeing and development. At The Grove we provide the children with daily physical activities
                and weekly Sport school sessions. During the classes the children learn to negotiate space and obstacles safely, with consideration for
                themselves and others; They demonstrate strength, balance and coordination when playing; they move energetically, such as running, jumping,
                dancing, hopping, skipping and climbing.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The Sport school sessions cover all areas of the Early Years Foundation Stage (EYFS). The classes are carefully planned to support the
                children’s attention and listening skills, these are developed through listening to and carrying out instructions from the teacher. The children
                are encouraged to ask and answer questions about the equipment and how to use it. Their confidence is developed, they show self-confidence in
                expressing to their peers and teacher if they are finding the task at hand easy or difficult or explaining how they are going to carry out the
                activity.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The children are taught to control their feelings and emotions when things don’t go the way they want them to go i.e. not having the desired
                coloured ball or want to be first to try out the activity. They are encouraged to listen to their peers opinions and that not everyone is the
                same they know that other children have different likes and dislikes and they may be good at different things not everyone is good at the same
                thing. The children gain in confidence when working together; they learn to share and take turns and listen to each other and work together to
                problem solve.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                The children help the teacher to set up the equipment and count as they do so. They learn the names of the different shapes of the equipment and
                measure distance between cones or hurdles. The children learn to manoeuvre around cones hop and jump over hurdles and standing poles. They are
                also able to use equipment such as racquets and bats (as well as their hands and feet) to control a balls movement.
              </Paragraph_1>
              <br />
              <Paragraph_1>Our 3 eldest groups in Chestnut, Elm and Oak join in with these classes every Thursday.</Paragraph_1>
            </Column>
            <br />
          </Row>
        </Column>
      </ContentBlock>

      {/* HEYL */}
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Column>
          <Row>
            <Column>
              <Heading>The Grove Heatley Early years (HEYL)</Heading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Healthy Early Years London is an award scheme funded by the Mayor of London which supports and recognises achievements in children’s health,
                development and well being in early years settings.
              </Paragraph_1>
              <br />
              <Paragraph_1>In 2017 The Grove was the first nursery in Islington to be awarded this status, one we are very proud of.</Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>At The Grove</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                We support the children to:
                <br />
                • Eat more healthy, providing a balanced diet
                <br />
                • Learn the importance of oral health and teach children to clean their teeth
                <br />
                • How to manage and express their feelings
                <br />
                • Encourage lots of outside walking and activities and offer Forest school sessions
                <br />
              </Paragraph_1>
              <br />
              <Paragraph_1>In 2017 The Grove was the first nursery in Islington to be awarded this status, one we are very proud of.</Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Healthy Eating</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                We firmly believe it is important to not only educate the mind but also the palate Through our balanced and interesting menus and social
                mealtimes children learn about food that is healthy and good for them. They are encouraged to try new foods and experience with texture and
                flavours.
              </Paragraph_1>
              <br />
              <Paragraph_1>
                As part of our curriculum the children engage in cooking activities. The children thoroughly enjoy participating in these activities and love to
                take their cooking home for their parents to taste and enjoy.ourage lots of outside walking and activities and offer Forest school sessions
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Physical Activities</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Children are encouraged through a varied and wide physical curriculum, from daily walks, visits to local parks and green spaces, forest school,
                sports school, baby yoga to indoor activities such as trampoline, soft play, climbing activities and much more.
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Emotional Health &amp; Wellbeing</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Children learn about their feelings; they are encouraged to express and manage them. The children secure in the knowledge that their voices are
                listened to and heard.
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Promoting Oral Health</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                The importance of oral health is promoted, by using books, songs and displays. Children are encouraged to bring in their very own special tooth
                brush from home which they use after their lunch time meal.
              </Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Subheading>Our Menus</Subheading>
            </Column>
          </Row>
          <Row>
            <Column columns={1}>
              <Paragraph_1>
                Our meals are prepared fresh daily by our onsite cook using organic produce and free-range chicken and lamb which is sourced from a local
                butcher. Our menus are based on a balance and varied diet providing the children with the opportunity to try different tastes and textures. We
                cater for all dietary needs, gluten free, dairy free, vegan, vegetarian or religious requirements. We work on a 4-week menu and provide healthy
                snacks and all babies formula. Water is served with all meals and provided throughout the day. Milk is offered at breakfast and tea time.
              </Paragraph_1>
              <br />
              <Paragraph_1>An example of our daily menu:</Paragraph_1>
            </Column>
          </Row>
          <br />
          <Row>
            <Column>
              <Paragraph_1>
                <b>Breakfast</b>&nbsp;– Toast, cereal and fruit served with warm milk
              </Paragraph_1>
              <Paragraph_1>
                <b>Mid Morning Snack</b>&nbsp;– Fresh fruit assortment
              </Paragraph_1>
              <Paragraph_1>
                <b>Lunch</b>&nbsp;– Vegetable and butter bean casserole/chicken casserole served with rice
              </Paragraph_1>
              <Paragraph_1>
                <b>Dessert</b>&nbsp;– Crunchy pear and apricot layer with natural yogurt
              </Paragraph_1>
              <Paragraph_1>
                <b>Afternoon snack</b>&nbsp;– Apples and cheese
              </Paragraph_1>
              <Paragraph_1>
                <b>Afternoon Tea</b>&nbsp;– Creamy butternut squash soup served with warm baguettes
              </Paragraph_1>
              <br />
              <br />
              <Row centerV centerH>
                <Image src={foodlogo} height={80} />
              </Row>
            </Column>
          </Row>
        </Column>
      </ContentBlock>

      <Footer color={GREEN_200} noShadow></Footer>
    </Wrapper>
  );
};

export default OurNursery;
