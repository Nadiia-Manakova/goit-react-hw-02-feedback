import React from 'react';
import css from './Statistics.module.css'
import { getRandomHexColor } from '../../js/RandomHexColor'

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics} >
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(stats =>
                <li
                    className={css.item}
                    key={stats.id}
                    style={{
                    backgroundColor: getRandomHexColor(),
                    }}>
                        <span className={css.label}>{stats.label}</span>
                        <span className={css.percentage}>{stats.percentage}%</span>
                </li>
                )} 
            </ul>
        </section>
    );
};
