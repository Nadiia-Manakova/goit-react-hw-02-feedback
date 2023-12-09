import React from 'react';
import css from './FriendListItem.module.css'



export const FriendListItem = ({id, isOnline, avatar, name }) => {
    return (
        <>                     
            <li className={css.item} key={id}>
                <span className={`${css.status} ${isOnline ? css.on : ''}`}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>          
        </>
    );
}