import * as React from 'react';
import { useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import { TabletSize } from '../../models/variables';

import Image from '../Image';
import DynamicWrapper from '../DynamicWrapper';

import Logo from '../../assets/logos/logo-full.png';
import LogoWhite from '../../assets/logos/logo-full-white.png';

import { HeaderNavLink } from '../../styles/shared';
import { HEADER_SCROLL_THRESHOLD } from '../../styles/global';
import { HeaderWrapper, HeaderInner, HeaderLink, HeaderLogo, HeaderLinksRow, HeaderBurger, HeaderMobile, HeaderMobileBar } from './Header.styles';
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
    console.log('fuck');
    navigate(path);
  };

  return (
    <HeaderWrapper id='header' small={smallHeader}>
      <DynamicWrapper id='header-bar'>
        <HeaderInner id='header-bar-inner'>
          {/* Logo */}
          <HeaderLogo id='header-bar-logo' onClick={() => onLinkClicked(MenuOptions[0].link)}>
            {smallHeader ? <Image src={LogoWhite} height={'80%'} /> : <Image src={LogoWhite} height={'80%'} />}
          </HeaderLogo>

          {/* Hide links when reached tablet */}
          <MediaQuery minWidth={TabletSize?.max}>
            <HeaderLinksRow id='header-bar-links-navigation'>
              {MenuOptions.map(({ title, link, bubble }, index) => {
                return (
                  <HeaderLink key={index} selected={pathname === link} onClick={() => onLinkClicked(link)} bubble={bubble}>
                    <HeaderNavLink>{title}</HeaderNavLink>
                  </HeaderLink>
                );
              })}
            </HeaderLinksRow>
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
          {MenuOptions.map(({ title, link }, index) => {
            return (
              <HeaderMobileBar key={index} index={index} count={MenuOptions.length} open={menuOpen}>
                <HeaderNavLink onClick={() => onLinkClicked(link)}>{title}</HeaderNavLink>
              </HeaderMobileBar>
            );
          })}
        </HeaderMobile>
      </MediaQuery>
    </HeaderWrapper>
  );
};

export default Header;
