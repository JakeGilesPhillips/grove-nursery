import styled, { css } from "styled-components";
import wave_curve from '../../assets/backgrounds/wave-curve.svg';
import { GREEN_800, GREEN_400, HEADER_HEIGHT, HEADER_HEIGHT_SMALL, SPACE_M, SPACE_S, SPACE_XS, SPACE_XXS } from "../../styles/global";
import { PageTitle } from "../../styles/shared";
 
const HeaderWrapper = styled.div<{ small: boolean; shadow?: boolean; }>`
  position: fixed;
  top: 0px;
  z-index: 999;

	display: flex;
	justify-content: center;
  width: 100%;
  height: ${props => props.small ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT}px;
  transition: .4s;
  background-color: white;
  padding-bottom: ${SPACE_XS}px;
  overflow: visible;
  ${props => props.shadow && css`
    box-shadow: 0px 10px 10px 4px rgb(0 0 0 / 30%);
  `};

  ::before {
    content: '';
    position: absolute;
    bottom: -28px;
    left: 0;
    width: 100%;
    height: 30px;
    transition: .4s;
    background-image: url("${wave_curve}");
    background-repeat: repeat-x;
    background-position: top;
  }
`;

const HeaderInner = styled.div`
  position: relative;
	display: flex;
	justify-content: space-between;
  height: 100%;
  width: 100%;
  `;
  
  const HeaderLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
	justify-content: flex-start;
  max-width: 70%;
`;

const HeaderTitle = styled(PageTitle)`
  color: ${GREEN_800};
  padding-top: ${SPACE_S}px;
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
	justify-content: space-between;
  flex: 1;

  padding-top: ${SPACE_XS}px;
  padding-bottom: ${SPACE_XS}px;
`;

const HeaderLinksRow = styled.div<{ hide?: boolean }>`
  display: flex;
	justify-content: flex-end;
  width: 100%;
  max-height: ${props => props.hide ? 0 : HEADER_HEIGHT / 2 };
  opacity: ${props => props.hide ? 0 : 1};
  transition: .4s;
`;

const HeaderLink = styled.div<{ selected?: boolean; bubble?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: ${SPACE_M}px;
  padding-left: ${SPACE_XS}px;
  padding-right: ${SPACE_XS}px;
  padding-top: ${SPACE_XXS}px;
  padding-bottom: ${SPACE_XXS}px;
  cursor: pointer;
  
  ::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${GREEN_400};
    transition: .4s;
  }

  :hover::after {
    width: ${props => !props.bubble && `100%`};
  }

  ${props => props.bubble && {
    backgroundColor: GREEN_800,
    borderRadius: 100,
    paddingBottom: 0,
    paddingTop: 1.5,

    span: {
      color: "white",
    }
  }}

  ${props => props.selected && !props.bubble && css`
    ::after {
      width: 100%;
    }
  `}
`;

const HeaderBurger = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const HeaderMobile = styled.div<{ open: boolean }>`
  position: fixed;
  pointer-events: ${props => props.open ? 'all' : 'none'};
  top: 0;
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
  padding-top: ${HEADER_HEIGHT}px;
  transition: .4s;
  z-index: 9;

  display: flex;
  flex-direction: column;
`;

const HeaderMobileBar = styled.div<{ index: number, count: number; open: boolean, color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => 100 / props?.count}%;
  transform: ${props => `translateY(-${100 * (props.index + 2)}%)`};
  background: ${props => props.color};
  transition: .4s ${props => (props.count - props.index) * .1}s;
  z-index: ${props => props.count - props.index};
  
  ${props => props.open && css`
    transition: .4s ${props.index * .1}s;
    transform: translateY(0%);
  `}
`;

export { 
  HeaderWrapper, 
  HeaderInner, 
  HeaderLogo,
  HeaderTitle,
  HeaderLinks,
  HeaderLinksRow, 
  HeaderLink,
  
  HeaderBurger,
  HeaderMobile,
  HeaderMobileBar,
 };