import styled from 'styled-components';

interface InputWrapperPropsType {
  name: string;
  children?: React.ReactNode;
}
export const InputWrapper = ({ name, children }: InputWrapperPropsType) => {
  return (
    <FormWrapperContainer>
      <Name>{name}</Name>
      {children}
    </FormWrapperContainer>
  );
};

const FormWrapperContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

const Name = styled.div`
  width: 64px;

  font-family: 'PretendardSemiBold';
  color: ${({ theme }) => theme.colors.gray_800};
`;
