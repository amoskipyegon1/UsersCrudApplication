import React from 'react';
import { Button, DialogTitle, FormLabel, Input, makeStyles, styled, TextareaAutosize, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '0px 10px',
        gap: '1.6rem',
    },
    input_field: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '10px'
    },
    input: {
        width: '80%',
        padding: '8px 8px',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        transition: 'border 300ms ease',
        '&:hover': {
            border: '1px solid steelblue',
        },
        '&:focus': {
            border: '1px solid steelblue',
        }
    },
    submit_btn: {
        marginTop: '10px'
    }
})

const Header = styled('h3')({
    // fontSize: '20px',
    width: '100%',
    textAlign: 'start',
})

export const PhoneDetailsForm = (): JSX.Element => {
    const classes = useStyles();
    return (
        <form className={classes.form}>
            <DialogTitle style={{textAlign: 'start'}}>Add User Details</DialogTitle>
            <div className={classes.input_field}>
                <FormLabel htmlFor='fname'>First Name:</FormLabel>
                <Input type='text' id='fname' className={classes.input} disableUnderline placeholder='Omic' />
            </div>
            <div className={classes.input_field}>
                <FormLabel htmlFor='lname'>Last Name:</FormLabel>
                <Input type='text' id='lname' className={classes.input} disableUnderline placeholder='Rocks' />
            </div>
            <div className={classes.input_field}>
                <FormLabel htmlFor='phone'>Phone:</FormLabel>
                <Input type='text' id='phone' className={classes.input} disableUnderline placeholder='5558675309' />
            </div>
            <div className={classes.submit_btn}>
                <Button color="primary" variant="contained" size='medium' type='submit'>Add User</Button>
            </div>
        </form>
    )
}
// @material-ui/core
