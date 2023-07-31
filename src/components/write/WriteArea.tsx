import styled from 'styled-components';

export const WriteArea = () => {
  return (
    <WriteAreaContainer>
      <InputBox placeholder="내가 이루고 싶은 꿈은?" maxLength={100} />
      <MaxLengthText>최대 100자</MaxLengthText>
      <CompleteBtn>입력완료</CompleteBtn>
    </WriteAreaContainer>
  );
};

const WriteAreaContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
`;

const InputBox = styled.textarea`
  width: 360px;
  height: 120px;
  padding: 12px;

  outline: none;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};

  font-family: 'PretendardMedium';
  font-size: 14px;
  &::placeholder {
    font-family: 'Pretendard';
    color: ${({ theme }) => theme.colors.gray_600};
  }
  color: ${({ theme }) => theme.colors.gray_900};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

const MaxLengthText = styled.div`
  width: 360px;
  margin-top: 5px;

  text-align: start;
  font-family: 'Pretendard';
  font-size: 11px;
  color: #525463;
`;

const CompleteBtn = styled.button`
  width: 360px;
  height: 52px;
  margin-top: 20px;

  border: none;
  border-radius: 8px;

  background-color: rgba(133, 136, 153, 0.08);

  font-family: 'PretendardMedium';
  font-size: 16px;
  color: #525463;
`;
