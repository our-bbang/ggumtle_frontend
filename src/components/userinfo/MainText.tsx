import styled from 'styled-components';

export const MainText = () => {
  return (
    <MainTextContainer>
      <Img
        src={import.meta.env.BASE_URL + './image/lemon_img.svg'}
        alt="레몬 캐릭터"
      />
      <Text>정확한 계획표 생성을 위한 정보를 입력해주세요.</Text>
    </MainTextContainer>
  );
};

const MainTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  margin: 20px 0 20px;
`;

const Img = styled.img`
  width: 35%;
  margin: 30px 0;
`;

const Text = styled.div`
  font-family: 'PretendardMedium';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_800};
`;
