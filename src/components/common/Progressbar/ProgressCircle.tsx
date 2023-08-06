import styled, { css } from 'styled-components';

interface PropsType {
  size?: string;
  step: number;
  status?: string;
}
export const ProgressCircle = ({ size, step, status }: PropsType) => {
  return <Circle size={size} status={status}>{`${step}`}</Circle>;
};

const Circle = styled.div<{ size?: string; status?: string }>`
  ${({ size = '20px' }) => css`
    width: ${size};
    height: ${size};
    line-height: ${size};
  `}

  ${({ status = 'incomplete', theme }) => {
    if (status === 'incomplete') {
      return css`
        background-color: ${theme.colors.gray_300};
        color: ${theme.colors.gray_500};
      `;
    }
    if (status === 'complete') {
      return css`
        background-color: ${theme.colors.green};
        color: white;
      `;
    }
  }}

  font-family: "PretendardMedium";
  text-align: center;

  border-radius: 50%;

  z-index: 100;

  transition: background-color 0.1s ease;
`;
