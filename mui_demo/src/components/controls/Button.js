import React from 'react'
import { makeStyles, Button as MuiButton } from '@material-ui/core'
// import { Margin } from '@mui/icons-material'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: "none"
    }
}))

export default function Button(props) {
    const {text, size, color, variant, onClick,error,helperText, ...other} = props
    const classes = useStyles()
    return (
        <MuiButton
            variant = {variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            error={error}
            helperText={helperText}
            classes={{root:classes.root, label:classes.label}}
        >  
            {text}
        </MuiButton>
    )
}
