import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const AddPlanBtn = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/write');
  };
  return (
    <StyledAddPlanBtn onClick={handleClickBtn}>
      <img
        src={import.meta.env.BASE_URL + './icon/plus_icon.svg'}
        alt="계획 생성"
      />
    </StyledAddPlanBtn>
  );
};

const StyledAddPlanBtn = styled.button`
  position: fixed;
  bottom: 28px;
  right: 28px;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;

  background-color: ${({ theme }) => theme.colors.green};
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_dark};
  }
`;
