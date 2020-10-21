import React from 'react';
import BoardItem from "./BoardItem";
import styles from './styles.module.css'

const data = [
    {
        userName: 'oleg',
        date: '01.12.19',
        time: '12:00'
    },
    {
        userName: 'oleg',
        date: '01.12.19',
        time: '12:00'
    },
    {
        userName: 'oleg',
        date: '01.12.19',
        time: '12:00'
    }
]

const LeaderBoard = () => {
    return (
        <div className={styles.leaderBoard}>
            {data.map(item => {
               return <BoardItem data={item}/>
            })}

        </div>
    );
};

export default LeaderBoard;
