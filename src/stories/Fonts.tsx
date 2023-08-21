import styled, { css } from 'styled-components';

interface FontsPropsType {
  fontName: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}
export const Fonts = ({ ...props }: FontsPropsType) => {
  return (
    <FontsStyled {...props}>
      <div>다람쥐 헌 쳇바퀴에 타고파</div>
      <div>The quick brown fox jumps over the lazy dog</div>
    </FontsStyled>
  );
};

const FontsStyled = styled.div<{
  fontName: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}>`
  ${({
    fontName,
    fontWeight = 'Regular',
    fontSize = '18px',
    color = 'black',
  }) => css`
    font-family: ${fontName}${fontWeight};
    font-size: ${fontSize};
    color: ${color};
  `}
`;
