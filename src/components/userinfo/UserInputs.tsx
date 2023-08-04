import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { genderState } from '@recoil/userinput';

import { InputWrapper } from './InputWrapper';
import { RadioSelection } from '@components/common/Inputs/RadioSelection';



export const UserInputs = () => {
  const [gender, setGender] = useRecoilState(genderState);

  return (
    <UserInputsContainer>
      <InputWrapper name="성별">
        <RadioSelection
          width="100%"
          height="36px"
          borderRadius="8px"
          option1="남"
          option2="여"
          selectedOption={gender}
          setOption={setGender}
        />
      </InputWrapper>
      <InputWrapper name="나이"></InputWrapper>
      <InputWrapper name="직업"></InputWrapper>
    </UserInputsContainer>
  );
};

const UserInputsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
