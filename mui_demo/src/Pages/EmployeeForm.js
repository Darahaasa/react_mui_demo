// import React, { useEffect, useState } from 'react'
// import { Grid } from '@material-ui/core';
// import {useForm, Form} from '../components/useForm';
// import Controls from '../components/controls/Controls';
// import * as employeeService from "../services/employeeService";

// const genderitems = [
//     {id:'male',title:'Male'},
//     {id:'female',title:'Female'},
//     {id:'other',title:'Other'},
// ]

// const initialFormValues= {
//     id : 0,
//     fullname : '',
//     email : '',
//     mobile : '',
//     city : '',
//     gender : 'male',
//     departmentid : '',
//     hireDate : new Date(),
//     isPermanent : false,
// }


// function EmployeeForm() {
//     const {values,setValues,handleInputChange} = useForm(initialFormValues);

    

//     return (
//         <Form>
//             <Grid container>
//                 <Grid item xs={6}>
//                     <Controls.Inputs
//                         name="fullname"
//                         label="Full Name"
//                         value={values.fullname}
//                         onChange={handleInputChange}
//                     />
//                     <Controls.Inputs
//                         name="email"
//                         label="Email"
//                         value={values.email}
//                         onChange={handleInputChange}
//                     />
//                     <Controls.Inputs
//                         name="mobile"
//                         label="Mobile"
//                         value={values.mobile}
//                         onChange={handleInputChange}
//                     />
//                     <Controls.Inputs
//                         name="city"
//                         label="City"
//                         value={values.city}
//                         onChange={handleInputChange}
//                     />
                    
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Controls.RadioGroup
//                         name="gender"
//                         label="Gender"
//                         value={values.gender}
//                         onChange={handleInputChange}
//                         items={genderitems}
//                     />
//                     <Controls.Select
//                         name="departmentid"
//                         label="Department"
//                         value={values.departmentid}
//                         onChange={handleInputChange}
//                         options={employeeService.getDepartmentCollection()}
//                     />
//                     <Controls.Checkbox
//                         name="isPermanent"
//                         label="Permanent Employee"
//                         value={values.isPermanent}
//                         onChange={handleInputChange}
//                     />
//                     <Controls.DatePicker
//                         name="hireDate"
//                         label="Hire Date"
//                         value={values.hireDate}
//                         onChange={handleInputChange}
//                     />
//                     <div>
//                         <Controls.Button
//                             type="submit"
//                             text="Submit"
//                         />
//                         <Controls.Button
//                             color="default"
//                             text="Reset"
//                         />
//                     </div>
//                 </Grid>
//             </Grid>
//         </Form>
//     )
// }

// export default EmployeeForm


import React from 'react';
import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Controls from '../components/controls/Controls'; 
import { Form } from '../components/useForm'; 
import * as employeeService from "../services/employeeService";
import backgroundlogin from '../images/backgroundlogin.jpg'

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
];

const initialFormValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentid: '',
    hireDate: new Date(),
    isPermanent: false,
};

// Validation schema using Yup
const validationSchema = Yup.object({
    fullname: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    city: Yup.string().required('City is required'),
    departmentid: Yup.string().required('Department is required'),
    hireDate: Yup.date().required('Hire date is required').nullable(),
});

function EmployeeForm() {
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: validationSchema,
        // validateOnChange: true,
        // validateOnBlur: true, 
        onSubmit: values => {
            console.log('Form data', values);
        },
    });

    return (
        // <Form onSubmit={formik.handleSubmit}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={6}>
        //             <Controls.Inputs
        //                 name="fullname"
        //                 label="Full Name"
        //                 value={formik.values.fullname}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 error={formik.touched.fullname && Boolean(formik.errors.fullname)}
        //                 helperText={formik.touched.fullname && formik.errors.fullname}
        //             />
        //             <Controls.Inputs
        //                 name="email"
        //                 label="Email"
        //                 value={formik.values.email}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 error={formik.touched.email && Boolean(formik.errors.email)}
        //                 helperText={formik.touched.email && formik.errors.email}
        //             />
        //             <Controls.Inputs
        //                 name="mobile"
        //                 label="Mobile"
        //                 value={formik.values.mobile}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        //                 helperText={formik.touched.mobile && formik.errors.mobile}
        //             />
        //             <Controls.Inputs
        //                 name="city"
        //                 label="City"
        //                 value={formik.values.city}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 error={formik.touched.city && Boolean(formik.errors.city)}
        //                 helperText={formik.touched.city && formik.errors.city}
        //             />
        //         </Grid>
        //         <Grid item xs={6}>
        //             <Controls.RadioGroup
        //                 name="gender"
        //                 label="Gender"
        //                 value={formik.values.gender}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 items={genderItems}
        //             />
        //             <Controls.Select
        //                 name="departmentid"
        //                 label="Department"
        //                 value={formik.values.departmentid}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //                 options={employeeService.getDepartmentCollection()}
        //                 error={formik.touched.departmentid && Boolean(formik.errors.departmentid)}
        //                 helperText={formik.touched.departmentid && formik.errors.departmentid}
        //             />
        //             <Controls.Checkbox
        //                 name="isPermanent"
        //                 label="Permanent Employee"
        //                 value={formik.values.isPermanent}
        //                 onChange={formik.handleChange}
        //                 onBlur={formik.handleBlur}
        //             />
                    
        //             <Controls.DatePicker
        //                 name="hireDate"
        //                 label="Hire Date"
        //                 value={formik.values.hireDate}
        //                 onChange={date => formik.setFieldValue('hireDate', date)}
        //                 onBlur={formik.handleBlur}
        //                 error={formik.touched.hireDate && Boolean(formik.errors.hireDate)}
        //                 helperText={formik.touched.hireDate && formik.errors.hireDate}
        //             />

        //             <div>
        //                 <Controls.Button
        //                     type="submit"
        //                     text="Submit"
        //                 />
        //                 <Controls.Button
        //                     color="default"
        //                     text="Reset"
        //                     onClick={formik.handleReset}
        //                 />
        //             </div>
        //         </Grid>
        //     </Grid>
        // </Form>

        // <Grid container spacing={2} sx={{ backgroundColor: 'blue', minHeight: '100vh' }}>
        //     <Grid item xs={12} md={6}>
        //         <Form onSubmit={formik.handleSubmit}>
        //             <Grid container spacing={2}>
        //                 <Grid item xs={12}>
        //                     <Controls.Inputs
        //                         name="fullname"
        //                         label="Full Name"
        //                         value={formik.values.fullname}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         error={formik.touched.fullname && Boolean(formik.errors.fullname)}
        //                         helperText={formik.touched.fullname && formik.errors.fullname}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Inputs
        //                         name="email"
        //                         label="Email"
        //                         value={formik.values.email}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         error={formik.touched.email && Boolean(formik.errors.email)}
        //                         helperText={formik.touched.email && formik.errors.email}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Inputs
        //                         name="mobile"
        //                         label="Mobile"
        //                         value={formik.values.mobile}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        //                         helperText={formik.touched.mobile && formik.errors.mobile}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Inputs
        //                         name="city"
        //                         label="City"
        //                         value={formik.values.city}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         error={formik.touched.city && Boolean(formik.errors.city)}
        //                         helperText={formik.touched.city && formik.errors.city}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.RadioGroup
        //                         name="gender"
        //                         label="Gender"
        //                         value={formik.values.gender}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         items={genderItems}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Select
        //                         name="departmentid"
        //                         label="Department"
        //                         value={formik.values.departmentid}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         options={employeeService.getDepartmentCollection()}
        //                         error={formik.touched.departmentid && Boolean(formik.errors.departmentid)}
        //                         helperText={formik.touched.departmentid && formik.errors.departmentid}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Checkbox
        //                         name="isPermanent"
        //                         label="Permanent Employee"
        //                         value={formik.values.isPermanent}
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.DatePicker
        //                         name="hireDate"
        //                         label="Hire Date"
        //                         value={formik.values.hireDate}
        //                         onChange={date => formik.setFieldValue('hireDate', date)}
        //                         onBlur={formik.handleBlur}
        //                         error={formik.touched.hireDate && Boolean(formik.errors.hireDate)}
        //                         helperText={formik.touched.hireDate && formik.errors.hireDate}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Controls.Button
        //                         type="submit"
        //                         text="Submit"
        //                     />
        //                     <Controls.Button
        //                         color="default"
        //                         text="Reset"
        //                         onClick={formik.handleReset}
        //                     />
        //                 </Grid>
        //             </Grid>
        //         </Form>
        //     </Grid>
        //     <Grid item xs={12} md={6}>
        //         <img 
        //             src={backgroundlogin}
        //             alt="Description" 
        //             style={{ width: '100%', height: 'auto' }} 
        //         />
        //     </Grid>
        // </Grid>

        <Grid container spacing={2} style={{ backgroundColor: '#0000ff29', minHeight: '40vh' }}>
            <Grid item xs={12} md={6}>
                <Form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controls.Inputs
                                name="fullname"
                                label="Full Name"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                helperText={formik.touched.fullname && formik.errors.fullname}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Inputs
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Inputs
                                name="mobile"
                                label="Mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                helperText={formik.touched.mobile && formik.errors.mobile}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Inputs
                                name="city"
                                label="City"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.RadioGroup
                                name="gender"
                                label="Gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                items={genderItems}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Select
                                name="departmentid"
                                label="Department"
                                value={formik.values.departmentid}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                options={employeeService.getDepartmentCollection()}
                                error={formik.touched.departmentid && Boolean(formik.errors.departmentid)}
                                helperText={formik.touched.departmentid && formik.errors.departmentid}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Checkbox
                                name="isPermanent"
                                label="Permanent Employee"
                                value={formik.values.isPermanent}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.DatePicker
                                name="hireDate"
                                label="Hire Date"
                                value={formik.values.hireDate}
                                onChange={date => formik.setFieldValue('hireDate', date)}
                                onBlur={formik.handleBlur}
                                error={formik.touched.hireDate && Boolean(formik.errors.hireDate)}
                                helperText={formik.touched.hireDate && formik.errors.hireDate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Button
                                type="submit"
                                text="Submit"
                            />
                            <Controls.Button
                                color="default"
                                text="Reset"
                                onClick={formik.handleReset}
                            />
                        </Grid>
                    </Grid>
                </Form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img 
                    src={backgroundlogin}
                    alt="Description" 
                    style={{ width: '100%', height: '70vh' }} 
                />
            </Grid>
        </Grid>

    );
}

export default EmployeeForm;
