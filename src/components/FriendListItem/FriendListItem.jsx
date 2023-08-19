import { FriendsStatus } from "./FriendListItem.styled";


export const FriendListItem = ({ info: { avatar, name, isOnline } }) => {
    return (
        <>
                <FriendsStatus isOnline={isOnline} className="status">{isOnline}</FriendsStatus>
                <img className="avatar" src={avatar} alt={`User avatar ${name}`} width="48" />
                <p className="name">{name}</p>
        </>
    );
}