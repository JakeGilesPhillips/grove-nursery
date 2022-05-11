import styled, { css } from "styled-components";
import { Spacing } from "../../models/models";
import { SPACE_L, SPACE_M } from "../../styles/global";


const FooterWrapper = styled.div<{ fixed?: boolean; noShadow?: boolean}>`
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  bottom: ${props => props.fixed ? 0 : 'unset'};
  width: 100%;
  background: ${props => props.color};

  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => !props.noShadow && css`
    box-shadow: 0px -10px 10px 4px rgb(0 0 0 / 30%);
  `};

  &::before {
    content: "";
    position: absolute;
    top: -29px;
    left: 0;
    width: 100%;
    height: 30px;
    transform: scaleY(-1);
  }
`;

const FooterSegmentWrapper = styled.div<{ padding?: Spacing, tabletOrPhone?: boolean, hide?: boolean  }>`
  display: ${props => props?.hide ? 'none': 'flex'};
  flex-direction: ${props => props?.tabletOrPhone ? 'column' : 'row'};
  justify-content: space-between;
  flex: 1;

  padding-top: ${props => props?.padding?.top ?? 0}px;
  padding-bottom: ${props => props?.padding?.bottom ?? 0}px;
`;

const FooterSegment = styled.div<{ alignRight?: boolean, hide?: boolean }>`
  display: ${props => props?.hide ? 'none': 'flex'};
  align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  flex-direction: column;
  flex: 0 0 auto;
  min-height: 10px;
  padding-top: ${SPACE_L}px;
  padding-bottom: ${SPACE_M}px;
`;

export { FooterWrapper, FooterSegmentWrapper, FooterSegment };