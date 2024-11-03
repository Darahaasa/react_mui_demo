// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';



// export default function DatePicker(props) {
//     const {name, label, value, onChange} = props

//     const convertToDefEventPara = (name,value) => ({
//         target : {
//             name,value
//         }
//     })
//     return (
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined'
//                 label={label}
//                 formate="MM/dd/yyyy"
//                 name={name}
//                 value={value}
//                 onChange={date => onChange(convertToDefEventPara(name,date))}
//             />
//         </MuiPickersUtilsProvider>
//     )
// }






import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker({
    name = '', 
    label = '', 
    value = null, 
    onChange = () => {},
    error = false,
    helperText = '',
}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value || null} // Allow null value
                onChange={date => onChange(date)} // Directly pass the date
                clearable // Allow clearing the date
                placeholder="MM/DD/YYYY"
                error={error} // Pass error state
                helperText={helperText} // Pass helper text for validation feedback
            />
        </MuiPickersUtilsProvider>
    );
}





















// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';

// export default function DatePicker({
//     name = '', 
//     label = '', 
//     value = null, 
//     onChange = () => {}
// }) {
//     const convertToDefEventPara = (name, value) => ({
//         target: {
//             name, value
//         }
//     });

//     return (
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker
//                 disableToolbar
//                 variant="inline"
//                 inputVariant="outlined"
//                 label={label}
//                 format="MM/dd/yyyy"
//                 name={name}
//                 value={value} 
//                 onChange={date => onChange(convertToDefEventPara(name, date))}
//                 clearable// Ensure it's a boolean
//                 placeholder="MM/DD/YYYY"
//             />
//         </MuiPickersUtilsProvider>
//     );
// }
