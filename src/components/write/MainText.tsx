import styled from 'styled-components';

export const MainText = () => {
  return (
    <MainTextContainer>
      <Img
        src={import.meta.env.BASE_URL + './image/apple_img.svg'}
        alt="사과 캐릭터"
      />
      <Text className="big">목표를 입력해 주세요.</Text>
      <Text className="middle">구체적으로 입력할 수록 좋아요.</Text>
      <Text className="small">{`ex)`}</Text>
      <Text className="small">50살에 대통령이 된다.</Text>
      <Text className="small">30살에 뉴욕 여행을 간다.</Text>
    </MainTextContainer>
  );
};

const MainTextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const Img = styled.img`
  width: 25%;
  margin: 30px 0;
`;

const Text = styled.div`
  &.big {
    font-family: 'PretendardBold';
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray_900};

    margin: 10px 0;
  }

  &.middle {
    font-family: 'Pretendard';
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray_800};

    margin-bottom: 10px;
  }

  &.small {
    font-family: 'Pretendard';
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray_600};
    margin: 2px 0;
  }
`;
