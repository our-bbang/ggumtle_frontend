import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './ProgressCircle.css';

import styled from 'styled-components';

export const ProgressCircle = ({
  percent,
  index,
}: {
  percent: number;
  index: number;
}) => {
  const emojis = ['🍎', '🍊', '🍋', '🍑', '🍓'];
  return (
    <ProgressCircleContainer style={{ width: 60, height: 60 }}>
      <CircularProgressbarWithChildren value={percent}>
        <FruitIcon>{emojis[index % 5]}</FruitIcon>
        <ProgressText>{percent}%</ProgressText>
      </CircularProgressbarWithChildren>
      {/* <CircularProgressbar value={20} text={`${30}%`} /> */}
    </ProgressCircleContainer>
  );
};

const ProgressCircleContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
`;

const FruitIcon = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

const ProgressText = styled.div`
  font-family: 'PretendardSemiBold';
  font-size: 12px;
  color: #eff0f5;
`;
