import React from 'react';
import './styles.module.css'
import classnames from 'classnames'
import styles from './styles.module.css'

const Square = () => {
    const classes = classnames(styles.square)

    return (
        <div id='square' className={classes}>

        </div>
    );
};

export default Square;
