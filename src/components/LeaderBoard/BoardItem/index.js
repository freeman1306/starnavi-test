import React from 'react';
import styles from "./styles.module.css";


const BoardItem = ({
                       data
                   }) => {
    const {date, time, userName} = data

    return (
        <div className={`${styles.leaderRow} row`}>
            <div className="userName">
                {userName}
            </div>
            <div className="date">
                {date} and {time}
            </div>
        </div>
    );
};

export default BoardItem;
