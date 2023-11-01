import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/home');
  };

  return (
    <BackButton onClick={handleClickBtn}>
      <img
        src={import.meta.env.BASE_URL + './icon/leftarrow_icon.svg'}
        alt="뒤로가기"
      />
    </BackButton>
  );
};

const BackButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 28px;
  height: 28px;

  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  z-index: 300;

  img {
    width: 22px;
    height: 22px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
