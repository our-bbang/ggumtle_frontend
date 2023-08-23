import styled from 'styled-components';

export const MainText = () => {
  return (
    <MainTextContainer>
      <Img
        src={import.meta.env.BASE_URL + './image/apple_img.svg'}
        alt="사과 캐릭터"
      />
      <Text className="big">
        당신의 <span className="green">목표</span>나{' '}
        <span className="green">꿈</span>을 입력해 주세요.
      </Text>
      <Text className="middle">구체적으로 입력할 수록 좋아요.</Text>
      <Text className="small">{`ex)`}</Text>
      <Text className="small">
        3년 이내에 전문적인 프론트엔드 개발자가 된다.
      </Text>
      <Text className="small">혼자서 일주일간 뉴욕 여행을 한다.</Text>
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
  width: 25%;
  margin: 30px 0;
`;

const Text = styled.div`
  &.big {
    font-family: 'PretendardBold';
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray_900};

    margin: 10px 0;
    margin-bottom: 24px;
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

  span.green {
    color: ${({ theme }) => theme.colors.green};
  }
`;
