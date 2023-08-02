import styled, { css } from 'styled-components';

export const ModalView = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;

  position: fixed;
  ${({ width = '300px', height = '300px' }) => css`
    left: calc(50vw - ${width} / 2);
    top: calc(50vh - ${height} / 2);
    width: ${width};
    height: ${height};
  `};
  z-index: 2000;

  background-color: white;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  ${({ padding = '12px' }) => css`
    padding: ${padding};
  `}
`;
