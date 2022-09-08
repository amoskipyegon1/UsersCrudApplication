import React from 'react';
import { Button, Input, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        padding: '0px 10px',
        gap: '1.5rem',
        border: '1px',
        borderColor: 'black',
    },
    input_field: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    input: {
        width: '60%',
        '&:hover': {
            borderColor: 'green',
        }
    },
    title: {
        borderColor: ''
    }
})


export const PhoneDetailsForm = (): JSX.Element => {
    const classes = useStyles();
    return (
        <form className={classes.form}>
            <Typography>Add User Details</Typography>
            <div className={classes.input_field}>
                <label htmlFor="fname">First Name:</label>
                <Input type='text' id='fname' className={classes.input} placeholder='Omic' />
            </div>
            <div className={classes.input_field}>
                <label htmlFor="lname">Last Name:</label>
                <Input type='text' id='lname' className={classes.input} placeholder='Rocks' />
            </div>
            <div className={classes.input_field}>
                <label htmlFor="phone">Phone:</label>
                <Input type='text' id='phone' className={classes.input} placeholder='5558675309' />
            </div>
            <div className="submit-btn">
                <Button color="primary" variant="contained" size='medium' type='submit'>Add User</Button>
            </div>
        </form>
    )
}
