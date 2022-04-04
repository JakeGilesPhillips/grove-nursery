import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 0px;
`;

const BrochureWrapper = styled.div`
  position: relative;
`;

const Prev = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  left: 0;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  &::after {
    content: '→';
    position: absolute;
    color: white;
    font-size: 15pt;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Next = styled(Prev)`
  right: 0;
  left: unset;
  transform: translateY(-50%);
`;

export { Wrapper, BrochureWrapper, Next, Prev };
