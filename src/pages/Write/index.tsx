import { useState } from 'react';

import { MainText } from '@components/write/MainText';
import { WriteArea } from '@components/write/WriteArea';
import { Modal } from '@components/common/Modal';

export const WritePage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  return (
    <>
      <Modal
        isModalOpen={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        width="360px"
        height="400px"
        padding="20px"
      >
        모달
      </Modal>
      <MainText />
      <WriteArea />
    </>
  );
};
