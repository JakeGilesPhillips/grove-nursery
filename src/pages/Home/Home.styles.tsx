import styled from 'styled-components';
import { Heading, PageTitle, Subheading } from '../../styles/shared';
import { GREEN_800, SPACE_M, SPACE_XXS } from '../../styles/global';

const Wrapper = styled.div`
  padding-top: 0px;
`;

const Quote = styled(PageTitle)`
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const Tagline = styled(Subheading)`
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const ContactButton = styled(Heading)`
  background: ${GREEN_800};
  padding-top: ${SPACE_XXS}px;
  padding-left: ${SPACE_M}px;
  padding-right: ${SPACE_M}px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    transform: scale(1.1);
  }
`;

export { Wrapper, Quote, Tagline, ContactButton };
