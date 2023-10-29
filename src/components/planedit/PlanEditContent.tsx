import styled from 'styled-components';
import { useState } from 'react';

import { EditButtons } from './EditButtons';
import { EditModal } from './EditModal';
import { DoneModal } from './DoneModal';

export enum contentState {
  Default = 'Default',
  Edit = 'Edit',
  Done = 'Done',
}
export const PlanEditContent = () => {
  const [content, setContent] = useState<contentState>(contentState.Default);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDoneModal, setIsOpenDoneModal] = useState<boolean>(true);

  return (
    <PlanEditContentContainer>
      <EditButtons content={content} setContent={setContent} />
      <EditModal
        isOpenModal={isOpenEditModal}
        setIsOpenModal={setIsOpenEditModal}
      />
      <DoneModal
        isOpenModal={isOpenDoneModal}
        setIsOpenModal={setIsOpenDoneModal}
        plan="프로그래밍 공부하기"
      />
    </PlanEditContentContainer>
  );
};

const PlanEditContentContainer = styled.div``;
