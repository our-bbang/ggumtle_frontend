import styled from 'styled-components';

import { Loader } from '@components/common/Loader';

export const Loading = () => {
  return (
    <LoadingContainer>
      <MainText>
        <div>목표를 위한</div>
        <div>
          <span className="highlight">만다라트 계획표</span>를 생성 중이에요.
        </div>
      </MainText>
      <SmallText>잠시만 기다려 주세요.</SmallText>
      <Loader />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;

  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_900};
  font-size: 26px;
  line-height: 32px;

  span.highlight {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const SmallText = styled.div`
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_400};
  font-size: 16px;

  margin-bottom: 20px;
`;
