import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

interface ModalPropsType {
  width?: string;
  height?: string;
  padding?: string;
  isModalOpen: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

export const Modal = ({
  isModalOpen,
  setIsOpenModal,
  children,
  ...props
}: ModalPropsType) => {
  const handleClickBackdrop = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isModalOpen &&
        createPortal(
          <ModalBackdrop onClick={handleClickBackdrop}>
            <ModalView {...props} onClick={(e: any) => e.stopPropagation()}>
              {children}
            </ModalView>
          </ModalBackdrop>,
          document.body,
        )}
    </>
  );
};

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ModalView = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;

  position: fixed;
  ${({ width = '300px', height = '300px' }) => css`
    left: calc(50vw - ${width} / 2);
    top: calc(50vh - ${height} / 2);
    width: ${width};
    height: ${height};
  `};
  z-index: 2000;

  background-color: white;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  ${({ padding = '12px' }) => css`
    padding: ${padding};
  `}
`;
