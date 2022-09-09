import React, { useState } from 'react';
import { Button, DialogTitle, FormLabel, Input, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        width: '100%',
        padding: '2px 10px',
        gap: '1.6rem',
        transition: 'width 300ms ease',



        ['@media (max-width: 780px)']: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            // padding: '2px 2px'
        },

        ['@media (max-width: 1050px)']: {
            justifyContent: 'start',
            alignItems: 'start',
            width: '100%',
            
        },

    
    },
    input_field: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        width: '80%',
        gap: '10px',
        transition: 'width 300ms ease',

        ['@media (max-width: 950px)']: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
        },
    
        ['@media (max-width: 780px)']: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
        },
    },
    input: {
        width: '100%',
        padding: '8px 8px',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        color: '#475569',
        letterSpacing: '1px',
        transition: 'border 300ms ease',
        '&:hover': {
            border: '1px solid steelblue',
        },
        '&:focus': {
            border: '1px solid steelblue',
        }
    },
    submit_btn: {
        marginTop: '10px',
        width: '100%'
    }
})

interface UserDetail {
    firstName?: string;
    lastName?: string;
    phone?: string;
}

export const PhoneDetailsForm = (): JSX.Element => {
    const classes = useStyles();

    const [userDetails, setUserDetails] = useState<UserDetail>({
        firstName: 'Omic', lastName: 'Rocks', phone: '555867509'
    })
    // Input Data
    const [firstName, setFirstName] = useState<String | null>('Omic');

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value.trim());
        console.log(firstName);
        
    }

    // User Submit Form
    const postUser = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("Submitted");
        
    }
    return (
        <form className={classes.form} onSubmit={postUser}>
            <DialogTitle style={{textAlign: 'start', padding: '0px'}}>Add User</DialogTitle>
            <div className={classes.input_field}>
                <FormLabel htmlFor='fname' style={{textAlign: 'start', width: '100%'}}>First Name:</FormLabel>
                <Input type='text' id='fname' className={classes.input} disableUnderline placeholder='Omic' defaultValue={userDetails.firstName} onChange={handleFirstNameChange} />
            </div>
            <div className={classes.input_field}>
                <FormLabel htmlFor='lname' style={{textAlign: 'start', width: '100%'}}>Last Name:</FormLabel>
                <Input type='text' id='lname' className={classes.input} disableUnderline placeholder='Rocks' defaultValue={userDetails.lastName} />
            </div>
            <div className={classes.input_field}>
                <FormLabel htmlFor='phone' style={{textAlign: 'start', width: '100%'}}>Phone:</FormLabel>
                <Input type='text' id='phone' className={classes.input} disableUnderline placeholder='5558675309' defaultValue={userDetails.phone} />
            </div>
            <div className={classes.submit_btn}>
                <Button color="primary" variant="contained" size='medium' type='submit'>Add User</Button>
            </div>
        </form>
    )
}
