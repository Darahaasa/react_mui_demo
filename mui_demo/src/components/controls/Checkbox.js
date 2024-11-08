import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core'

export default function Checkbox(props) {
    const {name, label, value, onChange,error,helperText} = props

    const convertToDefEventPara = (name,value) => ({
        target: {
            name,value
        }
    })
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckBox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                    error={error}
                    helperText={helperText}
                />}
                label={label}
            />
                
        </FormControl>
    )
}
