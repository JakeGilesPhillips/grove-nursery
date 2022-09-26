import styled, { css } from 'styled-components';
import { PLATINUM_700, SPACE_XS } from './global';
import { Direction } from '../models/models';

/** FLEX STYLES */
const Row = styled.div<{ noFlex?: boolean; centerH?: boolean; centerV?: boolean; between?: boolean; direction?: Direction }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : Direction.Row)};
  flex: ${(props) => (props.noFlex ? 0 : 1)};

  ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.centerH &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.centerV &&
    css`
      align-items: center;
    `}
`;
const Column = styled.div<{ centerH?: boolean; centerV?: boolean; between?: boolean; columns?: number; direction?: Direction }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : Direction.Column)};
  width: ${(props) => 100 / (props.columns ?? 1)}%;

  ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.centerH &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.centerV &&
    css`
      justify-content: center;
    `}
`;

/** TEXT STYLES */
const span = styled.span<{ fontSize?: number; weight?: number; underline?: boolean }>`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  color: ${(props) => props.color ?? PLATINUM_700};
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `};
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}pt !important;
    `};
`;

const Quote = styled.h1<{ fontSize?: number }>`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  font-size: 30pt;
  color: white;
  margin: unset;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}pt !important;
    `};
`;
const PageTitle = styled.h1`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  font-size: 30pt;
  font-weight: 700;
  margin: unset;
  color: ${PLATINUM_700};
`;
const Heading = styled.h2`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  font-size: 24pt;
  font-weight: 700;
  margin: unset;
  color: ${PLATINUM_700};
`;
const Subheading = styled.h3<{ weight?: number }>`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  color: ${PLATINUM_700};
  font-size: 22pt;
  font-weight: ${(props) => props.weight ?? 400};
  margin: unset;
  margin-bottom: ${SPACE_XS}px;
`;

const Title = styled(span)`
  font-size: 20pt;
  font-weight: ${(props) => props.weight ?? 400};
`;
const Subtitle = styled(span)`
  font-size: 18pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Paragraph_1 = styled(span)`
  font-size: 16pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Paragraph_2 = styled(span)`
  font-size: 12pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Caption = styled(span)`
  font-size: 10pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const HeaderNavLink = styled(span)`
  font-size: 14pt;
  font-weight: ${(props) => props.weight ?? 700};
`;

export { Row, Column };
export { Quote, PageTitle, Heading, Subheading, Title, Subtitle, Paragraph_1, Paragraph_2, HeaderNavLink, Caption };
