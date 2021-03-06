import React from 'react';
import styles from './Friends.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";


const Friend = ({user, followingInProgress, unfollow, follow}) => {

  return (
    <div key={user.id} className={styles.friend}>
      <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                        unfollow(user.id);
                                      }}>Unfollow</button> :
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  follow(user.id);
                }}>Follow</button>
            }
          </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.aboutMe}</div>
        </span>
      </span>
    </div>
  )
}
export default Friend;