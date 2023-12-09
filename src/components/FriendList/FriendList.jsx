import React from 'react';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import css from "./FriendList.module.css"


export const FriendList = ({friends}) => {
      return (
        <>
            <ul className={css.friendList}>
                  {friends.map(({ id, avatar, name, isOnline }) => {
                      return (
                          <FriendListItem
                              key={id}
                              isOnline={isOnline}
                              avatar={avatar}
                              name={name}
                          />)
                  })}
            </ul>
        </>
    );
}