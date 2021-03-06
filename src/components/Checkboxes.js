import { Checkbox, FormControlLabel } from '@material-ui/core';
import { Delete, Save } from '@material-ui/icons';
import React, { useState } from 'react';

export default function Checkboxes() {
    const [checked, setChecked] = useState(false)
    return (
        <div>
            <h2>Test</h2>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        icon={<Save />}
                        checkedIcon={<Delete />}
                        onClick={(e) => setChecked(e.target.checked)}
                        inputProps={{ title: "" }}
                    />
                }
                label="This is a checkbox label"
            />

        </div>
    )
}