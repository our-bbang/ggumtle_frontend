import styled from 'styled-components';

enum PlanView {
  Image = 'Image',
  Graph = 'Graph',
}
interface ViewToggleProps {
  view: PlanView;
  setView: React.Dispatch<React.SetStateAction<PlanView>>;
}
export const ViewToggle = ({ view, setView }: ViewToggleProps) => {
  const handleClickToggleBtn = () => {
    if (view === PlanView.Image) setView(PlanView.Graph);
    else setView(PlanView.Image);
  };
  return (
    <ViewToggleContainer>
      <ToggleBtn
        className={view === PlanView.Image ? 'selected' : ''}
        onClick={handleClickToggleBtn}
      >
        {view === PlanView.Image ? (
          <img
            src={import.meta.env.BASE_URL + './icon/apple_icon_selected.svg'}
            alt="꿈틀나무"
          />
        ) : (
          <img
            src={import.meta.env.BASE_URL + './icon/apple_icon.svg'}
            alt="꿈틀나무"
          />
        )}
        꿈틀나무
      </ToggleBtn>
      <ToggleBtn
        className={view === PlanView.Graph ? 'selected' : ''}
        onClick={handleClickToggleBtn}
      >
        {view === PlanView.Graph ? (
          <img
            src={import.meta.env.BASE_URL + './icon/pen_icon_selected.svg'}
            alt="만다라트"
          />
        ) : (
          <img
            src={import.meta.env.BASE_URL + './icon/pen_icon.svg'}
            alt="만다라트"
          />
        )}
        만다라트
      </ToggleBtn>
    </ViewToggleContainer>
  );
};

const ViewToggleContainer = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 300;

  width: 140px;
  height: 32px;
  padding: 4px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.gray_300};

  display: flex;
  justify-content: space-between;
`;

const ToggleBtn = styled.button`
  width: 64px;
  height: 24px;
  border-radius: 4px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'PretendardMedium';
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  color: ${({ theme }) => theme.colors.gray_600};
  &.selected {
    background-color: white;
    color: ${({ theme }) => theme.colors.green};
    box-shadow: 1px 1px 8px 0px #d9d9d9;
  }

  img {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }

  transition: background-color 0.1s ease;
`;
