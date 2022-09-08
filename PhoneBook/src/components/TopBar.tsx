import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    header: {
        minHeight: '4rem',
        width: '100%',
        backgroundColor: 'papayawhip',
        // padding: '0px 18px',
        display: 'flex',
        flexDirection: 'column'
    },
    header_footer: {
        padding: '10px 0px',
        borderTop: '1px solid gray'
    }
})
export const TopBar = () => {
    const classes = useStyles();
  return (
    <header className={classes.header}>
        <h2>Save Users - React js</h2>
        <Box className={classes.header_footer}>
            <small>Sep 8, 2022</small>
        </Box>
    </header>
  )
}
