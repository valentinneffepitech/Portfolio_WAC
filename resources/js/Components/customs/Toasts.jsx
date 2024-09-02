import { Alert, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Toast = ({ message, type = "success", reset }) => {

    const [open, setOpen] = useState(false);

    const openTab = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false)
            reset()
        }, 5000);
    }

    useEffect(() => openTab(), [message]);

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            open={open}
            onClose={reset}
        >
            <Alert
                severity={type}
                variant='filled'
                sx={{
                    width: "100%"
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}
