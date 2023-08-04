import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { inputProgressState, inputProgressPercent } from '@recoil/progress';
import { isUserInfoCompletedSelector } from '@recoil/userinput';

import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';
import { MainText } from '@components/userinfo/MainText';
import { UserInputs } from '@components/userinfo/UserInputs';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

import { useInputProgress } from '@hooks/useProgress';

export const UserInfoPage = () => {
  const navigate = useNavigate();

  const updateProgress = useInputProgress();

  const inputProgress = useRecoilValue(inputProgressState);
  const progressPercent = useRecoilValue(inputProgressPercent);
  const isUserInfoComplete = useRecoilValue(isUserInfoCompletedSelector);

  useEffect(() => {
    updateProgress(1);
  }, []);

  useEffect(() => {
    if (isUserInfoComplete) updateProgress(2);
    else updateProgress(1);
  }, [isUserInfoComplete]);

  const handleClickBtn = () => {
    navigate('/');
  };

  return (
    <UserInfoPageContainer>
      <ProgressbarWrapper>
        <Progressbar progressState={inputProgress} percent={progressPercent} />
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
