//하단 버튼
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface BtnPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnstatus?: 'active' | 'disabled';
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  handleClick?: () => void;
  children: ReactNode;
}

const BtnCustomStyle = css<BtnPropsType>`
  ${({
    width = '360px',
    height = '52px',
    borderRadius = '8px',
    fontSize = '16px',
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
  `};
`;

const BtnStatusStyle = css<BtnPropsType>`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green_dark};
    cursor: pointer;
  }
  &.disabled {
    background-color: rgba(133, 136, 153, 0.08);
    color: #525463;
    cursor: default;
  }
`;

const BtnBase = styled.button<BtnPropsType>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;

  font-family: 'PretendardMedium';

  ${BtnCustomStyle}
  ${BtnStatusStyle}
`;

export const BottomBtn = ({
  className,
  handleClick,
  children,
  ...props
}: BtnPropsType) => {
  return (
    <BtnBase className={className} onClick={handleClick} {...props}>
      {children}
    </BtnBase>
  );
};