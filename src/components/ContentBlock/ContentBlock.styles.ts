import styled, { css } from "styled-components";
import { GREEN_100 } from "../../styles/global";
import { ContentBlockProps } from "./ContentBlock";

const Block = styled.div<ContentBlockProps>`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: ${props => props.paddingTop ?? 0}px;
  padding-bottom: ${props => props.paddingBot ?? 0}px;
  background-color: ${GREEN_100};

  ${props => props.shadow && {
    boxShadow: '0px 0px 10px 6px inset rgba(0,0,0,0.25)'
  }};

  ${props => props.backgroundImage && {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: props.repeatPattern ? 'repeat' : 'no-repeat',
    backgroundSize: props.repeatPattern ? '600px' : 'cover',
  }};

  ${props => props.fixedHeight && {
    height: `${props.fixedHeight - (props.paddingTop ?? 0) + (props.paddingBot ?? 0)}px`,
    maxHeight: `${props.fixedHeight - (props.paddingTop ?? 0) + (props.paddingBot ?? 0)}px`,
  }};

  ${props => props.minHeight && {
    minHeight: `${props.minHeight - (props.paddingTop ?? 0) + (props.paddingBot ?? 0)}px`,
  }};

  ${props => props.waveTop && css`
    ::after {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 25px;
      background-image: url("${require('../../assets/backgrounds/wave-curve.svg?fill=%23e7f6e4')}");
      background-repeat: repeat-x;
      background-position: 150% top;
      z-index: 99;
    }
  `}
    
    ${props => props.waveBottom && css`
    ::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      transform: scaleY(-1);
      width: 100%;
      height: 25px;
      background-image: url("${require('../../assets/backgrounds/wave-curve.svg?fill=%23e7f6e4')}");
      background-repeat: repeat-x;
      background-position: 150% top;
      z-index: 99;
    }
  `}
`;

export { Block };