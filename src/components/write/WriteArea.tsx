import styled from 'styled-components';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { useProgress } from '@hooks/useProgress';

import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';
import { goalState } from '@recoil/goal';

export function WriteArea() {
  const navigate = useNavigate();

  const updateProgress = useProgress();
  const [text, setText] = useRecoilState(goalState);

  const handleChangeTextBox = (e: FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    if (e.currentTarget.value.length === 0) {
      updateProgress('percent', 50);
      updateProgress('completedStep', 1);
    } else if (e.currentTarget.value.length > 0) {
      updateProgress('percent', 100);
      updateProgress('completedStep', 2);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length > 0) {
      navigate('/create');
    }
  };

  return (
    <WriteAreaContainer onSubmit={handleSubmit}>
      <TextBox
        placeholder="내가 이루고 싶은 꿈은?"
        maxLength={50}
        value={text}
        onChange={handleChangeTextBox}
        className={text.length > 0 ? 'green' : ''}
      />
      <MaxLengthText>최대 50자</MaxLengthText>
      <BtnBottomContainer>
        <BottomBtn
          type="submit"
          className={text.length > 0 ? 'active' : 'disabled'}
        >
          입력 완료
        </BottomBtn>
      </BtnBottomContainer>
    </WriteAreaContainer>
  );
}

const WriteAreaContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-top: 40px;
`;

const TextBox = styled.textarea`
  width: 360px;
  height: 80px;
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
