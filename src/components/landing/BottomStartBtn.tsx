import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

export const BottomStartBtn = () => {
  const navigate = useNavigate();

  const handleClickStartBtn = () => {
    navigate('/write');
  };

  return (
    <BtnContainer>
      <StartBtn onClick={handleClickStartBtn}>시작하기</StartBtn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  max-width: 460px;
  height: 80px;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartBtn = styled.button`
  width: 360px;
  height: 52px;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green};

  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.green_dark};
  }
`;
