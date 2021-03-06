import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Buttons() {
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                href="https://www.google.com"
                startIcon={<SaveIcon />}
            >
                Button with icon
        </Button>

            <ButtonGroup>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert("save")}
                    startIcon={<SaveIcon />}
                >
                    First Button in Group
        </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => alert("delete")}
                    startIcon={<DeleteIcon />}
                >
                    Second Button in Group
          </Button>
            </ButtonGroup>
        </div>
    )
}