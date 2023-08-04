import styled from 'styled-components';

interface InputWrapperPropsType {
  name: string;
  children?: React.ReactNode;
}
export const InputWrapper = ({ name, children }: InputWrapperPropsType) => {
  return (
    <InputWrapperContainer>
      <Name>{name}</Name>
      {children}
    </InputWrapperContainer>
  );
};

const InputWrapperContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin: 12px 0;
`;

const Name = styled.div`
  width: 64px;

  font-family: 'PretendardSemiBold';
  color: ${({ theme }) => theme.colors.gray_800};
`;
