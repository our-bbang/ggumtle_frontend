import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorPageContainer>
      <CharaterImg
        src={import.meta.env.BASE_URL + './image/orange_error_img.png'}
        alt="character"
      />
      <MainText>
        예상치 못한 <span className="highlight">에러</span>가 발생했어요.
      </MainText>
      <Gohome
        onClick={() => {
          navigate('/');
        }}
      >
        <img
          src={import.meta.env.BASE_URL + './icon/refresh_icon.svg'}
          alt="go home"
        />
        처음으로 돌아가기
      </Gohome>
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 90vh;
`;

const CharaterImg = styled.img`
  width: 30%;
`;

const MainText = styled.div`
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_900};
  font-size: 26px;
  line-height: 32px;

  margin: 20px 0;

  span.highlight {
    color: #ffb072;
  }
`;

const Gohome = styled.div`
  display: flex;
  align-items: center;

  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 16px;

  transition: color 0.1s ease;

  img {
    width: 18px;
    margin-right: 4px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray_600};
  }
`;
