import styled, { css, keyframes } from 'styled-components';

interface LoaderPropsType {
  size?: string;
  color?: string;
}

export const Loader = ({ size, color }: LoaderPropsType) => {
  return <LoaderBox size={size} color={color}></LoaderBox>;
};

const LoaderAnimation = keyframes`
to {
      transform: rotate(1turn);
   }
`;

const LoaderBox = styled.div<{ size?: string; color?: string }>`
  ${({ size = '56px', color = '#4ed99c' }) => css`
    width: ${size};
    height: ${size};
    background:
      radial-gradient(farthest-side, ${color} 95%, #0000) 50% 1.1px/13.4px
        13.4px no-repeat,
      radial-gradient(
        farthest-side,
        #0000 calc(100% - 15.7px),
        rgba(78, 217, 156, 0.1) 0
      );
  `}
  border-radius: 50%;
  animation: ${LoaderAnimation} 1.2s infinite linear;
`;
