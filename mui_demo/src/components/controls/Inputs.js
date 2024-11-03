import { TextField } from '@material-ui/core'
import React from 'react'



export default function Inputs(props) {
    const {name,label,value,onChange,error, helperText} = props
    return (
        <TextField 
            variant='outlined' label={label} 
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            fullWidth
        />
    )
}
