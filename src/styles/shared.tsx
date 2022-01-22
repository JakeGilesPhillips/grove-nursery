import styled, { css } from 'styled-components';
import { PLATINUM_700 } from './global';

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
const Column = styled.div<{ centerH?: boolean; centerV?: boolean; between?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;

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
  font-family: 'Open Sans', sans-serif;
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
`;

const PageTitle = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 20pt;
  font-weight: ${(props) => props.weight ?? 900};
`;
const Heading = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 18pt;
  font-weight: ${(props) => props.weight ?? 800};
`;
const Subheading = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 16pt;
  font-weight: ${(props) => props.weight ?? 700};
`;
const Title = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 14pt;
  font-weight: ${(props) => props.weight ?? 600};
`;
const Subtitle = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 12pt;
  font-weight: ${(props) => props.weight ?? 500};
`;
const Paragraph_1 = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 12pt;
  font-weight: ${(props) => props.weight ?? 400};
`;
const Paragraph_2 = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 10pt;
  font-weight: ${(props) => props.weight ?? 400};
`;
const Caption = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 8pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const HeaderNavLink = styled(span)`
  color: ${(props) => props.color ?? PLATINUM_700};
  font-size: 10pt;
  font-weight: ${(props) => props.weight ?? 700};
`;

export { Row, Column };
export { PageTitle, Heading, Subheading, Title, Subtitle, Paragraph_1, Paragraph_2, HeaderNavLink, Caption };
