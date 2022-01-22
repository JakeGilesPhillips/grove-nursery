import * as React from 'react';
import { useState } from 'react';
import colorLerp from 'color-lerp';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import { TabletSize } from '../../models/variables';
import { CONTACT_EMAIL, PHONE_NUMBER } from '../../models/constants';

import Image from '../Image';
import DynamicWrapper from '../DynamicWrapper';

import LogoFull from '../../assets/logos/logo-full.png';
import LogoText from '../../assets/logos/logo-text.png';

import { HeaderNavLink, Paragraph_2 } from '../../styles/shared';
import { GREEN_400, GREEN_800, HEADER_SCROLL_THRESHOLD, SPACE_M, PLATINUM_700 } from '../../styles/global';
import { HeaderWrapper, HeaderInner, HeaderLink, HeaderLogo, HeaderLinks, HeaderLinksRow, HeaderBurger, HeaderMobile, HeaderMobileBar } from './Header.styles';
import BurgerMenu from '../BurgerMenu';
import Link from '../Link';

interface HeaderProps {
  scrollY?: number;
  shadow?: boolean;
}

interface MenuOption {
  title: string;
  link: string;
  bubble?: boolean;
}

const MenuOptions: MenuOption[] = [
  { title: 'HOME', link: '/' },
  { title: 'OFSTED REPORT', link: '/ofsted-report' },
  { title: 'REQUEST BROCHURE', link: '/request-brochure' },
  { title: 'CONTACT US', link: '/contact-us', bubble: true },
];

const Header = (props: HeaderProps) => {
  const { scrollY = 0, shadow = false } = props;

  // Store menu state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Store hooks
  const navigate = useNavigate();
  const location = useLocation();
  const IsTabletOrPhone = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  // Get hooks values
  const { pathname } = location;
  const smallHeader = React.useMemo(() => {
    return scrollY > HEADER_SCROLL_THRESHOLD && !IsTabletOrPhone;
  }, [scrollY]);

  // Handle link clicked
  const onLinkClicked = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderWrapper id='header' small={smallHeader} shadow={shadow}>
      <DynamicWrapper id='header-bar' style={{ background: 'white', zIndex: 9999 }}>
        <HeaderInner id='header-bar-inner'>
          {/* Logo */}
          <HeaderLogo id='header-bar-logo'>
            <Image src={smallHeader ? LogoText : LogoFull} height={'95%'} />
          </HeaderLogo>

          {/* Hide links when reached tablet */}
          <MediaQuery minWidth={TabletSize?.max}>
            <HeaderLinks id='header-bar-links'>
              <HeaderLinksRow id='header-bar-links-contact' hide={smallHeader}>
                <Link icon={{ icon: 'phone', size: 12, padding: { top: 2, right: 4 } }} url=''>
                  <Paragraph_2 weight={500}>{PHONE_NUMBER}</Paragraph_2>
                </Link>
                <Link icon={{ icon: 'mail', size: 12, padding: { top: 2, left: 24, right: 4 } }} url={`mailto:${CONTACT_EMAIL}`}>
                  <Paragraph_2 weight={500}>{CONTACT_EMAIL}</Paragraph_2>
                </Link>
              </HeaderLinksRow>
              <HeaderLinksRow id='header-bar-links-navigation'>
                {MenuOptions.map(({ title, link, bubble }, index) => {
                  return (
                    <HeaderLink key={index} selected={pathname === title} onClick={() => onLinkClicked(link)} bubble={bubble}>
                      <HeaderNavLink>{title}</HeaderNavLink>
                    </HeaderLink>
                  );
                })}
              </HeaderLinksRow>
            </HeaderLinks>
          </MediaQuery>

          {/* Show burger menu when tablet */}
          <MediaQuery maxWidth={TabletSize?.max}>
            <HeaderBurger id='header-burger-menu'>
              <BurgerMenu open={menuOpen} onPressed={setMenuOpen} />
            </HeaderBurger>
          </MediaQuery>
        </HeaderInner>
      </DynamicWrapper>

      {/* Mobile dropdown */}
      <MediaQuery maxWidth={TabletSize.max}>
        <HeaderMobile id='header-mobile' open={menuOpen}>
          {MenuOptions.map(({ title, link, bubble }, index) => {
            const color = colorLerp(GREEN_800, GREEN_400, MenuOptions.length)[index];
            return (
              <HeaderMobileBar key={index} index={index} count={MenuOptions.length} open={menuOpen} color={color}>
                <HeaderNavLink>{title}</HeaderNavLink>
              </HeaderMobileBar>
            );
          })}
        </HeaderMobile>
      </MediaQuery>
    </HeaderWrapper>
  );
};

export default Header;
