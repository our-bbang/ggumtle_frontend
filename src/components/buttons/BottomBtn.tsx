//하단 버튼
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type BtnStatus = 'active' | 'disabled';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  status?: BtnStatus;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  handleClick?: () => void;
  children: ReactNode;
}

export const BottomBtn = ({
  className,
  handleClick,
  children,
  ...props
}: BtnProps) => {
  return (
    <BottomBtnWrapper className={className} onClick={handleClick} {...props}>
      {children}
    </BottomBtnWrapper>
  );
};

const statusStyle = css<BtnProps>`
  ${({ status = 'active' }) => {
    if (status === 'active') {
      return css`
        background-color: ${({ theme }) => theme.colors.green};
        color: white;
        &:hover {
          background-color: ${({ theme }) => theme.colors.green_dark};
          cursor: pointer;
        }
      `;
    }
    if (status === 'disabled') {
      return css`
        background-color: rgba(133, 136, 153, 0.08);
        color: #525463;
      `;
    }
  }}
`;

const BottomBtnWrapper = styled.button<BtnProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;

  font-family: 'PretendardMedium';

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

  ${statusStyle};
`;
