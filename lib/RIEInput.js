'use strict';

import React, { useState, useCallback, useRef } from 'react';

const RIEInput = props => {
    const { defaultValue = '', placeholder, onChange } = props;

    const [value, setValue] = useState(defaultValue);
    const [editing, setEditing] = useState(false);

    const ref = useRef();

    const beginEditing = useCallback(() => {
        setEditing(true);

        setTimeout(() => ref.current?.focus(), 0);
    }, []);

    const stopEditing = useCallback(
        (isCancel = false) => {
            if (!isCancel) {
                const newValue = ref.current?.value;

                setValue(newValue);
                onChange?.(newValue);
            }

            setEditing(false);
        },
        [onChange]
    );

    const onKeydown = useCallback(
        e => {
            switch (e.keyCode) {
                case 13: // Enter
                    stopEditing();
                    break;
                case 27: // Escape
                    stopEditing(true);
                    break;
            }
        },
        [stopEditing]
    );

    const onBlur = useCallback(() => stopEditing(), [stopEditing]);

    if (editing) {
        return <input ref={ref} defaultValue={value} placeholder={placeholder} onKeyDown={onKeydown} onBlur={onBlur} />;
    }

    return <span onClick={beginEditing}>{value}</span>;
};

export default RIEInput;
