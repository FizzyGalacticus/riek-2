'use strict';

import React, { useState, useCallback } from 'react';

const RIEToggle = props => {
    const { defaultValue = false, textTrue = 'yes', textFalse = 'no', onChange } = props;

    const [value, setValue] = useState(defaultValue);

    const onClick = useCallback(() => {
        const newValue = !value;

        setValue(newValue);

        onChange?.(newValue);
    }, [onChange, value]);

    return <span onClick={onClick}>{value ? textTrue : textFalse}</span>;
};

export default RIEToggle;
