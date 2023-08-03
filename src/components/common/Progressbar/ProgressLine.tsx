import styled, { keyframes } from 'styled-components';

interface PropsType {
  progress?: number;
}
export const ProgressLine = ({ progress }: PropsType) => {
  return (
    <>
      <BackgroundLine />
      <CompletedLine progress={progress} />
    </>
  );
};

const BackgroundLine = styled.div<{ progress?: number }>`
  width: 100%;
  height: 3px;

  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  background-color: ${({ theme }) => theme.colors.gray_300};
`;

const fillAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${(props: PropsType) => (props.progress || 0) + '%'};
  }
`;

const CompletedLine = styled.div<{ progress?: number }>`
  width: ${(props) => props.progress || 0}%;
  height: 3px;

  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  background: ${({ theme }) => theme.colors.green};
  animation: ${fillAnimation} ${({ progress = 0 }) => 0.1 * (progress / 10)}s
    linear forwards;
`;
