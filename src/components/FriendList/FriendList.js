// import PropType from 'prop-type';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';


export default function FriendList({friends}) {
    return ( 
        <ul className={s.friendList}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    imageUrl={friend.avatar}
                    userName={friend.name}
                    isOnline={friend.isOnline}
                />
            ))} 
        </ul>
    )
}

// FriendList.PropType = {
//     friends: PropType.arrayOf(PropType.object)
// }