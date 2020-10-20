import React from 'react';
import classname from 'classnames'
import styles from "./styles.module.css";


const Button = ({
                    classnames,
                    uppercase,
                    children
                }) => {
    const classes = classname(styles.button, classnames, {
        [styles.upper]: uppercase,
    })

    return (
        <>
            <button type='button' className={classes}>
                {children}
            </button>
        </>
    );
};

export default Button;
