'use strict';

import React from 'react';

import useInput from '../hooks/input';

const RIEInput = props => {
    const { defaultValue = '', onChange, ...restProps } = props;

    const { editing, ref, value, onKeyDown, onBlur, onClick } = useInput(defaultValue, onChange);

    if (editing) {
        return <input {...restProps} ref={ref} defaultValue={value} onKeyDown={onKeyDown} onBlur={onBlur} />;
    }

    return (
        <span {...restProps} onClick={onClick}>
            {value}
        </span>
    );
};

export default RIEInput;
