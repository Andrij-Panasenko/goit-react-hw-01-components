import styled from "styled-components";

export const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 300px;
   margin: 0 auto;
   padding: 20px;
`;

export const Description = styled.div`
   display: inline-flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   margin-bottom: 30px;
`;

export const Image = styled.img`
   width: 200px;
`;

export const UserInfo = styled.p`
   color: #00000085;
`;

export const StatusList = styled.ul`
   display: flex;
   gap: 10px;
   padding: 10px;
`;

export const StatusListItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 5px;
   padding: 5px;
`;

export const StatusLabel = styled.span`
   color: #00000085;
`;