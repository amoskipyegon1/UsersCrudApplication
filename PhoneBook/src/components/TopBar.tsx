import { makeStyles, styled } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    header: {
        minHeight: '5rem',
        width: '100%',
        backgroundColor: '#e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        
    },
})
const NameTitle = styled('h3')({
    color: '#447489',
    padding: '0px 50px',
    fontWeight: 'bolder',
    fontSize: '28px',
    // fontFamily: 'Cambria',
    fontStyle: 'italic',
    transition: 'font-size 300ms ease , padding 300ms ease',
    ['@media (max-width: 640px)']: {
        padding: '0px 8px',
        fontSize: '26px',
    }
})
export const TopBar = () => {
    const classes = useStyles();
  return (
    <header className={classes.header}>

        <NameTitle>Save Users - React js</NameTitle>

    </header>
  )
}
