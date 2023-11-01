import styled, { css } from 'styled-components';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { goalState } from '@recoil/goal';
import { planresult } from '@recoil/planresult';

import { SmallGoal } from 'src/types/plan';
import { planEditState } from '@recoil/plan';

import { contentState } from '@components/planedit/PlanEditLayout';

interface MiddleTableProps {
  order?: string;
  content?: SmallGoal;
  setIsOpenEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  current?: contentState;
}
export const MiddleTable = ({
  order,
  content,
  setIsOpenEditModal,
  current,
}: MiddleTableProps) => {
  const setPlanEdit = useSetRecoilState(planEditState);

  const handleClickPlan = (num: number, value: string) => {
    if (current === contentState.Edit) {
      setPlanEdit({
        small_goal: content?.small_goal || '',
        mini_num: num,
        value: value,
      });
      if (setIsOpenEditModal) setIsOpenEditModal(true);
    }
  };

  return (
    <StyledMiddleTable>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell
          className={content?.cmini1 === 1 ? 'done' : ''}
          onClick={() => {
            handleClickPlan(1, content?.mini1 || '');
          }}
        >
          <div>{content?.mini1}</div>
        </StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell
          className={content?.cmini2 === 1 ? 'done' : ''}
          onClick={() => {
            handleClickPlan(2, content?.mini2 || '');
          }}
        >
          <div>{content?.mini2}</div>
        </StyledMiddleTableCell>
        <StyledMiddleTableCell className="middle" order={order}>
          {content?.small_goal}
        </StyledMiddleTableCell>
        <StyledMiddleTableCell
          className={content?.cmini3 === 1 ? 'done' : ''}
          onClick={() => {
            handleClickPlan(3, content?.mini3 || '');
          }}
        >
          <div>{content?.mini3}</div>
        </StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell
          className={content?.cmini4 === 1 ? 'done' : ''}
          onClick={() => {
            handleClickPlan(4, content?.mini4 || '');
          }}
        >
          <div>{content?.mini4}</div>
        </StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
    </StyledMiddleTable>
  );
};

const StyledMiddleTable = styled.div`
  display: table-cell;
  width: 130px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
`;

const StyledMiddleTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 33.33%;
`;

const StyledMiddleTableCell = styled.div<{ order?: string }>`
  display: table-cell;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};

  font-family: 'Pretendard';
  &.middle {
    font-family: 'PretendardMedium';
    font-size: 12px;
  }
  font-size: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  ${({ order = '' }) => {
    if (order === '1')
      return css`
        background-color: #d7d6fb;
      `;
    else if (order === '2')
      return css`
        background-color: #fdebe0;
      `;
    else if (order === '3')
      return css`
        background-color: #e3ebfb;
      `;
    else if (order === '4')
      return css`
        background-color: #f8e3fb;
      `;
  }};

  &.done {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.gray_100};
    border: 1px solid transparent;
  }
`;

interface PlanImgProps {
  isOpenEditModal: boolean;
  setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: contentState;
}

export const PlanImg = ({ setIsOpenEditModal, content }: PlanImgProps) => {
  const goal = useRecoilValue(goalState);
  const plan = useRecoilValue(planresult);

  return (
    <Container>
      <StyledBigTable>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable
            order="1"
            content={plan?.result[0]}
            setIsOpenEditModal={setIsOpenEditModal}
            current={content}
          />
          <MiddleTable />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable
            order="2"
            content={plan?.result[1]}
            setIsOpenEditModal={setIsOpenEditModal}
            current={content}
          />
          <CenterTable>
            <div>{goal}</div>
          </CenterTable>
          <MiddleTable
            order="3"
            content={plan?.result[2]}
            setIsOpenEditModal={setIsOpenEditModal}
            current={content}
          />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable
            order="4"
            content={plan?.result[3]}
            setIsOpenEditModal={setIsOpenEditModal}
            current={content}
          />
          <MiddleTable />
        </StyledBigTableRow>
      </StyledBigTable>
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
  height: 390px;
  margin-bottom: 30px;
`;

export const StyledBigTable = styled.div`
  //margin: 10px;
  background-color: white;
  width: 390px;
  height: 390px;
`;

export const StyledBigTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 33.33%;
`;

export const CenterTable = styled.div`
  width: 130px;
  height: 130px;
  background-color: #e3fbe4;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'PretendardMedium';
  font-size: 15px;
  word-break: keep-all;
  div {
    text-align: center;
  }
`;
