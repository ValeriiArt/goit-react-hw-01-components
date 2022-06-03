import PropType from 'prop-type';
import s from './FriendListItem.module.css'

export default function FriendListItem({imageUrl, userName, isOnline, id}) {
    
    return (
        <li className={s.item} key={id}>
            <span className={isOnline ? s.statusOnLine : s.statusOffLine}></span>
            <img className={s.avatar} src={imageUrl} alt={userName} width="48" />
            <p className={s.name}>{userName}</p>
        </li>    
    )
}
FriendListItem.PropType = {
    imageUrl: PropType.string,
    userName: PropType.string,
    isOnline: PropType.bool,
    id: PropType.number
}