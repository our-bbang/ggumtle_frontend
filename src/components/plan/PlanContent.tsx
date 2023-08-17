import styled from 'styled-components';

export const PlanContent = () => {
  return (
    <PlanContentContainer>
      <BackgroundImg
        src={import.meta.env.BASE_URL + './image/plan_background_img.svg'}
        alt="tree"
      />
      <PlanText>나의 목표</PlanText>
    </PlanContentContainer>
  );
};

const PlanContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const BackgroundImg = styled.img``;

const PlanText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
