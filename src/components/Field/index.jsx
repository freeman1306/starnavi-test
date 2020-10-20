import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";


const Field = ({
                   rounded,
                   type,
                   name,
                   value,
                   className,
               }) => {
    const classes = classnames(styles.field, className, {
        rounded,
        [styles.default]:styles ==='default',
    })

    return (
        <input className={classes} type={type} name={name} value={value}/>
    );
};

export default Field;
