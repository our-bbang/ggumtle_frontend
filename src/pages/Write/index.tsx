import { MainText } from '@components/write/MainText';
import { WriteArea } from '@components/write/WriteArea';
import { Progressbar } from '@components/common/Progressbar';
import { styled } from 'styled-components';

export const WritePage = () => {
  return (
    <WritePageContainer>
      <ProgressbarContainer>
        <Progressbar />
      </ProgressbarContainer>
      <MainText />
      <WriteArea />
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressbarContainer = styled.div`
  margin-top: 30px;
`;
