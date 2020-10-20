import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";


const Picker = ({
                    size,
                    name,
                    pickerData,
                }) => {
    const classes = classnames(styles.picker, {

    })

    return (
        <select
            size={size}
            name={name}
        className={classes}
        >
            {pickerData.map(opt => {
                return <option value={opt}>{opt}</option>
            })}
        </select>
    );
};

export default Picker;
