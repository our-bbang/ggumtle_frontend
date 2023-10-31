import styled, { css } from 'styled-components';

import { useRecoilValue } from 'recoil';
import { goalState } from '@recoil/goal';
import { planresult } from '@recoil/planresult';

import { SmallPlan } from 'src/types/plan';

interface MiddleTableProps {
  order?: string;
  content?: SmallPlan;
}
export const MiddleTable = ({ order, content }: MiddleTableProps) => {
  return (
    <StyledMiddleTable>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell>
          <div>{content?.Detail1}</div>
        </StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell>
          <div>{content?.Detail2}</div>
        </StyledMiddleTableCell>
        <StyledMiddleTableCell className="middle" order={order}>
          {content?.Value}
        </StyledMiddleTableCell>
        <StyledMiddleTableCell>
          <div>{content?.Detail3}</div>
        </StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell>
          <div>{content?.Detail4}</div>
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
`;

export const PlanImg = () => {
  const goal = useRecoilValue(goalState);
  const plan = useRecoilValue(planresult);

  return (
    <Container>
      <StyledBigTable>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable order="1" content={plan?.MainKeyword} />
          <MiddleTable />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable order="2" content={plan?.MainKeyword2} />
          <CenterTable>
            <div>{goal}</div>
          </CenterTable>
          <MiddleTable order="3" content={plan?.MainKeyword3} />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable order="4" content={plan?.MainKeyword4} />
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
