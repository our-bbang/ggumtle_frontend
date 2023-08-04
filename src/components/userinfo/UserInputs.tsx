import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { genderState, ageState, jobState } from '@recoil/userinput';

import { InputWrapper } from './InputWrapper';
import { RadioSelection } from '@components/common/Inputs/RadioSelection';
import { InputBox } from '@components/common/Inputs/InputBox';

export const UserInputs = () => {
  const [gender, setGender] = useRecoilState(genderState);
  const [age, setAge] = useRecoilState(ageState);
  const [job, setJob] = useRecoilState(jobState);

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
      <InputWrapper name="나이">
        <InputBox
          width="100%"
          height="36px"
          type="number"
          min={0}
          value={age}
          setValue={setAge}
        />
      </InputWrapper>
      <InputWrapper name="직업">
        <InputBox
          width="100%"
          height="36px"
          type="text"
          value={job}
          setValue={setJob}
          maxLength={20}
          placeholder="학생도 괜찮아요!"
        />
      </InputWrapper>
    </UserInputsContainer>
  );
};

const UserInputsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;
