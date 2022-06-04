// import PropType from 'prop-type';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';


export default function FriendList({friends}) {
    return ( 
        <ul className={s.friendList}>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id}
                    imageUrl={avatar}
                    userName={name}
                    isOnline={isOnline}
                />
            ))} 
        </ul>
    )
}

// FriendList.PropType = {
//     friends: PropType.arrayOf(PropType.object)
// }