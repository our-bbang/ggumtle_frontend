import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { INPUT_PROGRESS } from '@constants/index';

import { completedProgress, progressPercent } from '@recoil/progress';
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

  const completedProgressStep = useRecoilValue(completedProgress);
  const percent = useRecoilValue(progressPercent);

  const isUserInfoComplete = useRecoilValue(isUserInfoCompletedSelector);

  useEffect(() => {
    updateProgress('percent', 50);
    updateProgress('completedStep', 1);
  }, []);

  useEffect(() => {
    if (isUserInfoComplete) {
      updateProgress('percent', 100);
      updateProgress('completedStep', 2);
    } else {
      updateProgress('percent', 50);
      updateProgress('completedStep', 1);
    }
  }, [isUserInfoComplete]);

  const handleClickBtn = () => {
    navigate('/mandalart');
  };

  return (
    <UserInfoPageContainer>
      <ProgressbarWrapper>
        <Progressbar
          totalProgressStep={INPUT_PROGRESS}
          completedProgressStep={completedProgressStep}
          percent={percent}
        />
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
