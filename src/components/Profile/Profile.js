import PropType from 'prop-type';
import s from './Profile.module.css';

export default function Profile({userName, tag, location, avatar, stats}) {
    
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={s.avatar}
                />
                <p className={s.name}>{userName}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.statsItem}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.PropType = {
    avatar: PropType.string,
    userName: PropType.string,
    tag: PropType.string,
    location: PropType.string,
    followers: PropType.number,
    views: PropType.number,
    likes: PropType.number,
}