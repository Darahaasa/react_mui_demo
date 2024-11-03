import { FormControl, FormControlLabel, FormLabel,RadioGroup as MuiRadioGroup, Radio } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {
    const {name,label,value,onChange,items,error,helperText} = props
    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <MuiRadioGroup row
            name={name}
            value={value}
            onChange={onChange} 
            label={label} 
            error={error}
            helperText={helperText}
            >
                {
                    items.map(
                        (item, index)=>(
                            <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}/>
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
