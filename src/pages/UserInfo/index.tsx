import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { INPUT_PROGRESS } from '@constants/index';

import { completedProgress, progressPercent } from '@recoil/progress';
import { allUserInfo, isUserInfoCompletedSelector } from '@recoil/userinput';

import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';
import { MainText } from '@components/userinfo/MainText';
import { UserInputs } from '@components/userinfo/UserInputs';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

import { useProgress } from '@hooks/useProgress';
import { postRegisterAPI } from '@api/userAPIS';

export const UserInfoPage = () => {
  const navigate = useNavigate();

  const updateProgress = useProgress();

  const completedProgressStep = useRecoilValue(completedProgress);
  const percent = useRecoilValue(progressPercent);
  const userInput = useRecoilValue(allUserInfo);

  const isUserInfoComplete = useRecoilValue(isUserInfoCompletedSelector);

  useEffect(() => {
    updateProgress('percent', 0);
    updateProgress('completedStep', 0);
  }, []);

  useEffect(() => {
    if (isUserInfoComplete) {
      updateProgress('percent', 50);
      updateProgress('completedStep', 1);
    } else {
      updateProgress('percent', 0);
      updateProgress('completedStep', 0);
    }
  }, [isUserInfoComplete]);

  const getUserInfoFromURL = () => {
    //쿼리 스트링에서 유저 이름, 이메일, 카카오 아이디 가져오기
    const params = new URLSearchParams(location.search);
    const user_name = params.get('user_name') || '';
    const user_email = params.get('user_email') || '';
    const kakao_id = params.get('kakao_id') || '';
    return {
      user_name,
      user_email,
      kakao_id,
    };
  };

  const handleClickBtn = () => {
    const user_age = Number(userInput.age || '0');
    const userData = getUserInfoFromURL();

    const registerResponse = postRegisterAPI({
      user_name: userData.user_name,
      user_email: userData.user_email,
      kakao_id: userData.kakao_id,
      user_sex: userInput.gender === 1 ? 'm' : 'f',
      user_age,
      user_job: userInput.job,
    });
    registerResponse.then((res) => {
      navigate('/write');
    });
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
