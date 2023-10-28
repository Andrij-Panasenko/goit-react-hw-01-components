import { ProfileWrapper, Description, Image, UserInfo,StatusList,StatusListItem,StatusLabel} from "./Profile.styled"

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Image
          src={avatar}
          alt={username}
          className="avatar"
        />
        <h3 className="name">{username}</h3>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatusList>
        <StatusListItem>
          <StatusLabel className="label">Followers</StatusLabel>
          <b className="quantity">{stats.followers}</b>
        </StatusListItem>
        <StatusListItem>
          <StatusLabel className="label">Views</StatusLabel>
          <b className="quantity">{stats.views}</b>
        </StatusListItem>
        <StatusListItem>
          <StatusLabel className="label">Likes</StatusLabel>
          <b className="quantity">{stats.likes}</b>
        </StatusListItem>
      </StatusList>
    </ProfileWrapper>
  )
}