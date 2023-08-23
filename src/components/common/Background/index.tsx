import styled from 'styled-components';

export const Background = () => {
  return <Container></Container>;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: -100;
`;
