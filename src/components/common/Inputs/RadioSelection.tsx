import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { SetterOrUpdater } from 'recoil';

interface RadioSelectionPropsType extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  borderRadius?: string;
  option1?: string;
  option2?: string;
  selectedOption: number;
  setOption: SetterOrUpdater<number>;
}

//두가지 옵션 중에 하나를 선택하는 UI
export const RadioSelection = ({
  selectedOption,
  setOption,
  ...props
}: RadioSelectionPropsType) => {
  const handleClickOption = (option: number) => {
    setOption(option);
  };

  return (
    <RadioSelectionContainer {...props}>
      <OptionBtn
        onClick={() => handleClickOption(1)}
        className={`left ${selectedOption === 1 ? 'selected' : ''}`}
        borderRadius={props.borderRadius}
      >
        {props.option1}
      </OptionBtn>
      <DivideLine />
      <OptionBtn
        onClick={() => handleClickOption(2)}
        className={`right ${selectedOption === 2 ? 'selected' : ''}`}
        borderRadius={props.borderRadius}
      >
        {props.option2}
      </OptionBtn>
    </RadioSelectionContainer>
  );
};

const RadioSelectionContainer = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>`
  ${({ width = '300px', height = '30px', borderRadius = '8px' }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
  `}

  display: flex;

  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const DivideLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_400};
`;

const OptionBtn = styled.button<{ borderRadius?: string }>`
  width: 50%;
  height: 100%;

  background-color: transparent;
  border: none;
  ${({ borderRadius = '8px' }) => css`
    &.left {
      border-radius: ${borderRadius} 0 0 ${borderRadius};
    }
    &.right {
      border-radius: 0 ${borderRadius} ${borderRadius} 0;
    }
  `};

  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_800};

  &:hover {
    cursor: pointer;
  }
  transition: background-color 0.1s ease;
  &.selected {
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
  }
`;
