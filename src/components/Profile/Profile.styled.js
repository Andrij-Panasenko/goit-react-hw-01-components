import styled from "styled-components";

export const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 300px;
   margin: 0 auto;
   padding: ${p => p.theme.spacing(5)};
   background-color: ${p => p.theme.colors.profileBcgColor}; 
`;

export const Description = styled.div`
   display: inline-flex;
   flex-direction: column;
   align-items: center;
   gap: ${p => p.theme.spacing(3)};
   margin-bottom: ${p => p.theme.spacing(7)};
`;

export const Image = styled.img`
   width: 200px;
`;

export const UserInfo = styled.p`
   color: ${p => p.theme.colors.profileLightTextColor};
`;

export const StatusList = styled.ul`
   display: flex;
   gap: ${p => p.theme.spacing(2)};
   padding: ${p => p.theme.spacing(2)};
`;

export const StatusListItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${p => p.theme.spacing(1)};
   padding: ${p => p.theme.spacing(1)};
`;

export const StatusLabel = styled.span`
   color: ${p => p.theme.colors.profileLightTextColor};
`;