import { SPACE_XS, SPACE_S, SPACE_XXS, PLATINUM_800, RED_SECONDARY, RED_PRIMARY } from "../../styles/global";
import { Paragraph_1 } from "../../styles/shared";
import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled(Paragraph_1)<{ padL?: boolean, required?: boolean }>`
  position: relative;
  margin-bottom: ${SPACE_XXS}px;
  color: ${PLATINUM_800};

  ${props => props.padL && css`
    margin-left: ${SPACE_XS}px;
  `}

  ${props => props.required && css`
    &::after {
      content: '*';
      position: absolute;
      right: 15px;
      top: 30px;
      color: ${RED_SECONDARY};
    }
  `}
`;

const Input = styled.input<{ padL?: boolean, padR?: boolean }>`
  background: transparent;
  border: none;
  border: solid 2px rgba(255, 255, 255, 0.5);
  padding-left: ${SPACE_XS}px;
  padding-right: ${SPACE_XS}px;
  margin-bottom: ${SPACE_S}px;
  ${props => props.padL && css`
    margin-left: ${SPACE_XS}px;
  `}
  ${props => props.padR && css`
    margin-right: ${SPACE_XS}px;
  `}
  min-height: 40px;
  -webkit-appearance: none;
  outline: none;  

  font-family: 'Dongle', sans-serif;
  font-size: 14pt;
  font-weight: 300;
  
  ::placeholder { color: rgba(255, 255, 255, 0.5); }
  :-ms-input-placeholder { color: rgba(255, 255, 255, 0.5); }
  ::-ms-input-placeholder { color: rgba(255, 255, 255, 0.5); }
`;

const Error = styled(Paragraph_1)`
  color: ${RED_PRIMARY};
  margin-bottom: ${SPACE_S}px;
`;

const TextArea = styled.textarea`
  position: relative;
  background: transparent;
  border: none;
  border: solid 2px rgba(255, 255, 255, 0.5);
  margin-bottom: ${SPACE_S}px;
  padding-top: ${SPACE_XS}px;
  padding-left: ${SPACE_XS}px;
  padding-right: ${SPACE_XS}px;
  min-height: 120px;
  resize: none;
  -webkit-appearance: none;
  outline: none;

  font-family: 'Dongle', sans-serif;
  font-size: 14pt;
  font-weight: 300;

  ::placeholder { color: rgba(255, 255, 255, 0.5); }
  :-ms-input-placeholder { color: rgba(255, 255, 255, 0.5); }
  ::-ms-input-placeholder { color: rgba(255, 255, 255, 0.5); }
`;

const Button = styled.button`
  position: relative;
  -webkit-appearance: none;
  border: none;
  background: none;  
  border: solid 2px rgba(255, 255, 255, 0.5);
  height: 50px;

  cursor: pointer;
  transition: .4s;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    background: white;
    transition: .4s;
  }

  ${props => !props.disabled && css`
    :hover {
      ::before {
        height: 100%;
      }

      span {
        color: ${RED_SECONDARY};
      }
    }
  `}
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Form, Label, Input, Error, TextArea, Button, LoaderWrapper };