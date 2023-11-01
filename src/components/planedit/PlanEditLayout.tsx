import styled from 'styled-components';
import { useState } from 'react';
import { PlanImg } from '@components/planimg';
import { PlanEditContent } from '@components/planedit/PlanEditContent';

export enum contentState {
  Default = 'Default',
  Edit = 'Edit',
  Done = 'Done'
}
export const PlanEditLayout = () => {
  const [content, setContent] = useState<contentState>(contentState.Default);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  return (
    <PlanEditLayoutContainer>
      <PlanImg
        isOpenEditModal={isOpenEditModal}
        setIsOpenEditModal={setIsOpenEditModal}
        content={content}
      />
      <PlanEditContent
        isOpenEditModal={isOpenEditModal}
        setIsOpenEditModal={setIsOpenEditModal}
        content={content}
        setContent={setContent}
      />
    </PlanEditLayoutContainer>
  );
};

const PlanEditLayoutContainer = styled.div`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
