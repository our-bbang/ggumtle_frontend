import styled from 'styled-components';

export const DetailModalContent = ({ modalContent }: any) => {
  return (
    <Container>
      <MainKeyword>{modalContent?.Value}</MainKeyword>
      <DetailKeyword>
        <div>{`- ${modalContent?.Details?.Detail1}`}</div>
      </DetailKeyword>
      <DetailKeyword>
        <div>{`- ${modalContent?.Details?.Detail2}`}</div>
      </DetailKeyword>
      <DetailKeyword>
        <div>{`- ${modalContent?.Details?.Detail3}`}</div>
      </DetailKeyword>
      <DetailKeyword>
        <div>{`- ${modalContent?.Details?.Detail4}`}</div>
      </DetailKeyword>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainKeyword = styled.div`
  height: 40px;
  font-family: 'PretendardMedium';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.green};
`;

const DetailKeyword = styled.div`
  width: 240px;
  height: 40px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Pretendard';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
`;
