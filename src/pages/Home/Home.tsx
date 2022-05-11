import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { getImages } from '../../utils/helpers';
import { Direction } from '../../models/models';
import { TabletSize } from '../../models/variables';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { SPACE_XL, HEADER_HEIGHT } from '../../styles/global';
import { Wrapper } from './Home.styles';

const Home = () => {
  const navigate = useNavigate();
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;

  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} shadow />
      <Footer color={'black'}></Footer>
    </Wrapper>
  );
};

export default Home;
