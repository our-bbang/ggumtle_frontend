import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop } from '@components/common/Modal/ModalBackdrop';
import { ModalView } from '@components/common/Modal/ModalView';

interface ModalPropsType {
  width?: string;
  height?: string;
  padding?: string;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}
export const Modal = ({
  isOpenModal,
  setIsOpenModal,
  children,
  ...props
}: ModalPropsType) => {
  const handleClickBackdrop = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal &&
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
