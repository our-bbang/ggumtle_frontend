import styled from 'styled-components';
import { useState } from 'react';

import { EditButtons } from './EditButtons';
import { EditModal } from './EditModal';
import { DoneModal } from './DoneModal';

import { CompletePlan } from './CompletePlan';
import { useParams } from 'react-router-dom';

import { contentState } from './PlanEditLayout';

interface PlanEditContentProps {
  isOpenEditModal: boolean;
  setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: contentState;
  setContent: React.Dispatch<React.SetStateAction<contentState>>;
}
export const PlanEditContent = ({
  isOpenEditModal,
  setIsOpenEditModal,
  content,
  setContent,
}: PlanEditContentProps) => {
  const [isOpenDoneModal, setIsOpenDoneModal] = useState<boolean>(false);

  const [doneModalData, setDoneModalData] = useState<{
    mini_num: number;
    small_goal: string;
    mini_goal: string;
  }>({ mini_num: 0, small_goal: '', mini_goal: '' });

  const params = useParams();
  const { planId } = params;

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
        plan={doneModalData.small_goal}
        mini_num={doneModalData.mini_num}
        main_id={planId || ''}
        mini_goal={doneModalData.mini_goal}
      />
      {content === contentState.Done ? (
        <CompletePlan
          setContent={setContent}
          setDoneModalData={setDoneModalData}
          setIsOpenDoneModal={setIsOpenDoneModal}
        />
      ) : null}
    </PlanEditContentContainer>
  );
};

const PlanEditContentContainer = styled.div``;
