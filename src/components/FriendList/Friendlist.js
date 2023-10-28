import friends from './friends.json';
import { Friendlist, ListItem, OnlineStatus, Avatar, FriendName } from './Friendlist.styled';

export const FriendList = () => { 
   return (
      <Friendlist>
         {friends.map(friend => {
            return (
               <ListItem key={friend.id} >
                  <OnlineStatus $variant={friend.isOnline}></OnlineStatus>
                  <Avatar src={friend.avatar} alt={friend.name} />
                  <FriendName>{friend.name}</FriendName>
               </ListItem>
            )
         })}
      </Friendlist>
   )
};



