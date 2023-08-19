import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendsListWrapper, FriendListWrapperItem} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <>
            <FriendsListWrapper className="friend-list">
                {friends.map(el =>
                    <FriendListWrapperItem key={el.id} className="item">
                        <FriendListItem info={el} />
                    </FriendListWrapperItem>)}
            </FriendsListWrapper>
        </>
    );
}