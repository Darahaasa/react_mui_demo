import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';



export function useForm(initialFormValues) {
    const [values,setValues]= useState(initialFormValues);
    const handleInputChange = e => {
        const {name,value} = e.target
        setValues({
            ...values, 
            [name]:value
        })
    }
    return {
        values,
        setValues,
        handleInputChange
    }
}


const useStyles = makeStyles(theme =>({
    root: {
        // backgroundColor: '#6fb7ff4a',

        '& .MuiFormControl-root' : {
            width:'80%',
            // margin:theme.spacing(1),
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: theme.palette.background.paper,
            // backgroundColor: '#ffc0cb24',
        }
    }
}))

// export function Form(props) {
//     const classes = useStyles();
//     return (
//         <form className={classes.root} autoComplete='off'>
//             {props.children}
//         </form>
//     )
// }




export function Form(props) {
    const { children, onSubmit } = props;
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <form className={classes.root} autoComplete='off' onSubmit={handleSubmit}>
            {children}
        </form>
    );
}
