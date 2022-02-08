import styled, { css } from 'styled-components';
import { PLATINUM_700, SPACE_XS } from './global';

/** FLEX STYLES */
const Row = styled.div<{ centerH?: boolean; centerV?: boolean; between?: boolean }>`
  display: flex;
  flex-direction: row;
  flex: 1;

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
const Column = styled.div<{ centerH?: boolean; centerV?: boolean; between?: boolean; columns?: number }>`
  display: flex;
  flex-direction: column;
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
const span = styled.span<{ weight?: number; underline?: boolean }>`
  display: inline-flex;
  font-family: 'Dongle', sans-serif;
  line-height: 1;
  color: ${(props) => props.color ?? PLATINUM_700};
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `};
`;

const PageTitle = styled(span)`
  font-size: 30pt;
  font-weight: ${(props) => props.weight ?? 700};
`;
const Heading = styled(span)`
  font-size: 24pt;
  font-weight: ${(props) => props.weight ?? 700};
`;
const Subheading = styled(span)`
  font-size: 22pt;
  font-weight: ${(props) => props.weight ?? 400};
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
export { PageTitle, Heading, Subheading, Title, Subtitle, Paragraph_1, Paragraph_2, HeaderNavLink, Caption };
