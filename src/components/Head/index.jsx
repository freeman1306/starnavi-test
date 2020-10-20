import React from 'react';

const Head = ({
                  size,
                  align,
                  h,
                  children,
                  padding
              }) => {
    const Tag = h

    return (
        <Tag
            style={{fontSize: size, textAlign: align, padding: padding}}
        >
            {children}
        </Tag>
    );
};

export default Head;
