import React from 'react';
import { TextField } from '@material-ui/core'

export default function Inputs() {
    return (
        <div style={{ backgroundColor: "white", display: "block", width: "100vw", padding: "1em", color: "black" }}>
            <h2>Textfields</h2>
            <TextField
                variant="standard"
                color="primary"
                type="email"
                label="email"
                placeholder="test@gome"
            />
        </div>
    )
}