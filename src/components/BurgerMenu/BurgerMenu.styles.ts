import styled, { css } from "styled-components";
import { GREEN_400 } from "../../styles/global";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;
`;

const MenuBar = styled.div<{ index: number }>`
  position: relative;
  top: 0px;
  width: 100%;
  height: 4px;
  background: ${GREEN_400};
  border-radius: 10px;
  transition: transform .2s, top .2s .4s;
  transform-origin: center;
  
  &.active {
    transition: top .2s, transform .2s .2s;

    ${props => props.index === 0 && css`
      top: 10.5px;
      transform: rotate(45deg);
    `}
    ${props => props.index === 1 && css`
      opacity: 0;
    `}
    ${props => props.index === 2 && css`
      top: -10.5px;
      transform: rotate(-45deg);
    `}
  }
`;

export { MenuWrapper, MenuBar };