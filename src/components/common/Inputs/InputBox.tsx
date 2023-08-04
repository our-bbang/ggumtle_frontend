import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { SetterOrUpdater } from 'recoil';

import { useFocusedOnce } from '@hooks/useFocusedOnce';

interface InputBoxPropsType extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  borderRadius?: string;
  type?: string;
  min?: number;
  value: any;
  setValue: SetterOrUpdater<any>;
}

export const InputBox = ({ value, setValue, ...props }: InputBoxPropsType) => {
  const { isFocusedOnce, handleFocus } = useFocusedOnce();

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <InputBoxContainer {...props}>
      <StyledInput
        onFocus={handleFocus}
        value={value}
        onChange={handleChangeInput}
        type={props.type || 'text'}
        {...props}
        className={isFocusedOnce && value ? 'filled' : ''}
      />
    </InputBoxContainer>
  );
};

const InputBoxContainer = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>`
  ${({ width = '300px', height = '30px' }) => css`
    width: ${width};
    height: ${height};
  `}

  background-color: transparent;
`;

const StyledInput = styled.input<{ borderRadius?: string }>`
  width: 100%;
  height: 100%;
  padding: 0 10px;

  ${({ borderRadius = '8px' }) => css`
    border-radius: ${borderRadius};
  `}

  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
  &.filled {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;
