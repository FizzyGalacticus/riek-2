'use strict';

import { useState, useRef, useCallback } from 'react';

export default (defaultValue, onChange = null) => {
    const [value, setValue] = useState(defaultValue);
    const [editing, setEditing] = useState(false);

    const ref = useRef();

    const onClick = useCallback(() => {
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

    const onKeyDown = useCallback(
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

    return { value, editing, ref, onClick, onKeyDown, onBlur };
};
