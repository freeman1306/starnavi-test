import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";


const Head = ({
                  h,
                  children,
                  view
              }) => {
    const Tag = h
    const classes = classnames(styles.header,
        {'headerH3': h === 'h3'}
    )

    return (
        <Tag
            className={classes}
            style={{...view}}
        >
            {children}
        </Tag>
    );
};

export default Head;
