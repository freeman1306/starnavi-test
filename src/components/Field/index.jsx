import React, {useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";


const Field = ({
                   rounded,
                   type,
                   name,
                   placeholder,
                   className,
    view
               }) => {
    const classes = classnames(styles.field, className, {
        rounded,
        [styles.default]:view ==='default',
    })

    const [value, setValue] = useState('')

    return (
        <input className={classes} onChange={e=>setValue(e.target.value)} type={type} name={name} value={value} placeholder={placeholder}/>
    );
};

export default Field;
