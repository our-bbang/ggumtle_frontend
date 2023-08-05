import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { isUserInfoCompletedSelector } from '@recoil/userinput';

import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';
import { MainText } from '@components/userinfo/MainText';
import { UserInputs } from '@components/userinfo/UserInputs';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

import { useProgress } from '@hooks/useProgress';

export const UserInfoPage = () => {
  const navigate = useNavigate();
  const updateProgress = useProgress();

  const isUserInfoComplete = useRecoilValue(isUserInfoCompletedSelector);

  useEffect(() => {
    updateProgress(50);
  }, []);

  useEffect(() => {
    if (isUserInfoComplete) updateProgress(100);
    else updateProgress(50);
  }, [isUserInfoComplete]);

  const handleClickBtn = () => {
    navigate('/');
  };

  return (
    <UserInfoPageContainer>
      <ProgressbarWrapper>
        <Progressbar />
      </ProgressbarWrapper>
      <MainText />
      <UserInputs />
      <BtnBottomContainer>
        <CompleteBtn
          onClick={handleClickBtn}
          className={isUserInfoComplete ? 'active' : 'disabled'}
          disabled={!isUserInfoComplete}
        >
          입력 완료
        </CompleteBtn>
      </BtnBottomContainer>
    </UserInfoPageContainer>
  );
};

const UserInfoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompleteBtn = styled(BottomBtn)<{ disabled: boolean }>`
  ${({ disabled }) => {
    if (disabled)
      return css`
        pointer-events: none;
      `;
  }}
`;
