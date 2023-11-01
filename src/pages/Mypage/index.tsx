import styled from 'styled-components';
import { BackBtn } from '@components/plan/BackBtn';
import { getUserInfo } from '@api/userAPIS';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@recoil/goal';
import { useEffect } from 'react';

interface userInfoType {
  user_name: string;
  user_sex: string;
  user_age: number;
  userjob: string;
}
export const MyPage = () => {
  const userState = useRecoilValue(userInfoState);
  const [userInfo, setUserInfo] = useState<userInfoType>();

  useEffect(() => {
    const response = getUserInfo(userState.email);
    response.then((res) => {
      setUserInfo(res);
    });
  }, []);

  return (
    <MyPageContainer>
      <BackBtn />
      <Header>나의 정보</Header>
      <InfoContainer>
        <InfoText>
          <span>이메일:</span> {userState.email}
        </InfoText>
        <InfoText>
          <span>이름:</span> {userInfo?.user_name}
        </InfoText>
        <InfoText>
          <span>성별:</span> {userInfo?.user_sex === 'f' ? '여' : '남'}
        </InfoText>
        <InfoText>
          <span>나이:</span> {userInfo?.user_age}
        </InfoText>
        <InfoText>
          <span>직업:</span> {userInfo?.userjob}
        </InfoText>
      </InfoContainer>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  margin-top: 32px;
  font-family: 'PretendardMedium';
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  padding: 0 30px;
  margin-top: 30px;
`;

const InfoText = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
  margin: 6px 0;

  span {
    font-family: 'PretendardMedium';
  }
`;
