import styled from "styled-components";

const isOnline = p => (
   p.$variant ? p.theme.colors.green : p.theme.colors.red
)

export const Friendlist = styled.ul`
   width: 300px;
   margin: 0 auto;
`;

export const ListItem = styled.li`
   display: flex;
   align-items: center;
   padding: ${p => p.theme.spacing(3)};
   gap: ${p => p.theme.spacing(3)};
   margin-bottom: ${p => p.theme.spacing(3)};
   &:last-child {
      margin-bottom: 0;
   }

   box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 
               0px 1px 1px rgba(46, 47, 66, 0.16), 
               0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const OnlineStatus = styled.span`
   display: block;
   width: 15px;
   height: 15px;
   border-radius: 25px;
   background-color: ${isOnline};
`;



export const Avatar = styled.img`
   width: 70px;
`;

export const FriendName = styled.p`
   font-weight: bold;
`;