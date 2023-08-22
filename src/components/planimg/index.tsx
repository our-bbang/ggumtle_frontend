import styled, { css } from 'styled-components';
import React from 'react';

export const MiddleTable = ({ order = '' }) => {
  return (
    <StyledMiddleTable>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell order={order}></StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
      <StyledMiddleTableRow>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
        <StyledMiddleTableCell></StyledMiddleTableCell>
      </StyledMiddleTableRow>
    </StyledMiddleTable>
  );
};

const StyledMiddleTable = styled.div`
  display: table-cell;
  width: 120px;
  height: 120px;
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
  }}
`;

interface PropsType {
  refLink: React.RefObject<HTMLDivElement>;
}

export const PlanImg = ({ refLink }: PropsType) => {
  return (
    <Container ref={refLink}>
      <StyledBigTable>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable order="1" />
          <MiddleTable />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable order="2" />
          <CenterTable />
          <MiddleTable order="3" />
        </StyledBigTableRow>
        <StyledBigTableRow>
          <MiddleTable />
          <MiddleTable order="4" />
          <MiddleTable />
        </StyledBigTableRow>
      </StyledBigTable>
    </Container>
  );
};

const Container = styled.div`
  width: 380px;
  height: 380px;
`;

export const StyledBigTable = styled.div`
  margin: 10px;
  background-color: white;
  width: 360px;
  height: 360px;
`;

export const StyledBigTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 33.33%;
`;

export const CenterTable = styled.div`
  display: table-cell;
  width: 120px;
  height: 120px;
  background-color: #e3fbe4;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
`;
