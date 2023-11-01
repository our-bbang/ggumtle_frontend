import styled from 'styled-components';
import { getYear, getMonth, getDate } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const HomeHeader = () => {
  const date = new Date();
  const navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <TopContainer>
        <MainText>나의 꿈틀</MainText>
        <MyPageBtn
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <img
            src={import.meta.env.BASE_URL + './icon/mypage_icon.svg'}
            alt="마이페이지"
          />
        </MyPageBtn>
      </TopContainer>
      <BottomContainer>
        <DateText>{`${getYear(date)}년 ${getMonth(date) + 1}월 ${getDate(
          date,
        )}일`}</DateText>
      </BottomContainer>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  width: 85%;
  max-width: 391px;
  height: 100px;
  margin-bottom: 20px;
  padding-top: 24px;
  position: fixed;
  top: 0;

  background-color: white;
  z-index: 500;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainText = styled.div`
  font-family: 'PretendardSemiBold';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.green};
`;

const MyPageBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const DateText = styled.div`
  font-family: 'PretendardSemiBold';
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_800};
`;
