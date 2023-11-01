import styled from 'styled-components';

export const TopImgContent = () => {
  return (
    <TopImgContentContainer>
      <CloudImg
        src={import.meta.env.BASE_URL + './image/cloud_img.svg'}
        alt="구름"
      />
      <SunImg
        src={import.meta.env.BASE_URL + './image/sun_img.png'}
        alt="태양"
      />
    </TopImgContentContainer>
  );
};

const TopImgContentContainer = styled.div`
  width: 100%;

  top: 0;
  left: 0;
  position: absolute;
`;

const CloudImg = styled.img`
  position: absolute;
  top: 60px;
  left: 15px;

  width: 120px;
`;

const SunImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  width: 125px;
`;
