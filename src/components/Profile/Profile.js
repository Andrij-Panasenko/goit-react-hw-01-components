import { ProfileWrapper, Description, Image, UserInfo,StatusList,StatusListItem,StatusLabel} from "./Profile.styled"

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Image
          src={avatar}
          alt={username}
        />
        <h3>{username}</h3>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatusList>
        <StatusListItem>
          <StatusLabel >Followers</StatusLabel>
          <b >{stats.followers}</b>
        </StatusListItem>
        <StatusListItem>
          <StatusLabel >Views</StatusLabel>
          <b >{stats.views}</b>
        </StatusListItem>
        <StatusListItem>
          <StatusLabel >Likes</StatusLabel>
          <b >{stats.likes}</b>
        </StatusListItem>
      </StatusList>
    </ProfileWrapper>
  )
}