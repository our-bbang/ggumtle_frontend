import styled from 'styled-components';
import { useState, FormEvent } from 'react';
import { BottomBtn } from '@components/buttons/BottomBtn';

export const WriteArea = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length > 0) {
      console.log('제출');
    }
  };

  return (
    <WriteAreaContainer onSubmit={handleSubmit}>
      <TextBox
        placeholder="내가 이루고 싶은 꿈은?"
        maxLength={100}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={text.length > 0 ? 'green' : ''}
      />
      <MaxLengthText>최대 100자</MaxLengthText>
      <CompleteBtn
        type="submit"
        status={text.length > 0 ? 'active' : 'disabled'}
      >
        입력완료
      </CompleteBtn>
    </WriteAreaContainer>
  );
};

const WriteAreaContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
`;

const TextBox = styled.textarea`
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
  &.green {
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

const CompleteBtn = styled(BottomBtn)`
  margin-top: 20px;
`;
