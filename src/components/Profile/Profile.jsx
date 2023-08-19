
import {
  Wrapper, ProfileInfoWrapper, ImgAvatar, UserName, ProfileTagAndLocation, UserStats, UserStatsItem,
UserStatsItemDescription } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <>
            <Wrapper className="profile">
  <ProfileInfoWrapper className="description">
    <ImgAvatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName className="name">{ username}</UserName>
    <ProfileTagAndLocation className="tag">@{tag}</ProfileTagAndLocation>
    <ProfileTagAndLocation className="location">{location}</ProfileTagAndLocation>
  </ProfileInfoWrapper>

  <UserStats className="stats">
    <UserStatsItem>
      <span className="label">Followers</span>
      <UserStatsItemDescription className="quantity">{followers}</UserStatsItemDescription>
    </UserStatsItem>
    <UserStatsItem>
      <span className="label">Views</span>
      <UserStatsItemDescription className="quantity">{views}</UserStatsItemDescription>
    </UserStatsItem>
    <UserStatsItem>
      <span className="label">Likes</span>
      <UserStatsItemDescription className="quantity">{likes}</UserStatsItemDescription>
    </UserStatsItem>
  </UserStats>
</Wrapper>
        </>
    );
}