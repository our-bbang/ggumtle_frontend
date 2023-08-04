import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop } from '@components/common/Modal/ModalBackdrop';
import { ModalView } from '@components/common/Modal/ModalView';

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
