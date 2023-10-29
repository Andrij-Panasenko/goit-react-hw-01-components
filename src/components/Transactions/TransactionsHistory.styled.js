import styled from 'styled-components';

export const Table = styled.table`
   width: 700px;
   margin: 0 auto;
   display: block;
   padding: ${p => p.theme.spacing(7)};
   border-collapse: collapse;
`;

export const TableHeadRow = styled.tr`
   background-color: ${p => p.theme.colors.aqua}; 
`;

export const TableHeadItem = styled.th`
   color:${p => p.theme.colors.white};
   border: 1px solid ${p => p.theme.colors.white};
   height: ${p => p.theme.spacing(10)};
   width: 530px;
   text-transform: uppercase;
   text-align: center;
`;

export const TableBodyRow = styled.tr`
   &:nth-child(even) {
      background-color: ${p => p.theme.colors.lightGrey};
   }
`;

export const TableBodyData = styled.td`
   border: 1px solid ${p => p.theme.colors.grey};
   height: ${p => p.theme.spacing(10)};
   text-transform: capitalize;
   text-align: center;
   color: ${p => p.theme.colors.darkGrey};
`;