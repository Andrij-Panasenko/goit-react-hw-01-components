import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const StatisticsSection = styled.section`
   width: 500px;
   padding: 20px;
   margin: 0 auto;
`;

export const StatTitle = styled.h2`
   padding: 30px 50px;
   text-align: center;
   text-transform: uppercase;
`;

export const StatList = styled.ul`
   display: flex;
   justify-content: center;
   
`;

export const ListItem = styled.li`
   color: #fff;
   padding: 10px;
   width: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.span`
   font-size: 14px;
`;