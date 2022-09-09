import { useState } from 'react';
import { PhoneDetailsForm } from './PhoneDetailsForm';
import { makeStyles, styled } from '@material-ui/core';
import { ContactTable } from './ContactTable';


const Main = styled('main')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  padding: '0px 4px',
  gap: '12px',
  transition: 'width 300ms ease',
  // backgroundColor: '#000',
  ['@media (max-width: 950px)']: {
    flexDirection: 'row',
    width: '100%',
  },

  ['@media (max-width: 780px)']: {
    flexDirection: 'column',
    width: '100%',
    gap: '40px'
  },
})
const useStyles = makeStyles({
  container: {
    width: '550px',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 4px',
    // backgroundColor: '#abc',
    transition: 'width 300ms ease',
    ['@media (max-width: 780px)']: {
      width: '95%',
    }
  }
})
function App() {
  // const [count, setCount] = useState(0);
  const classes = useStyles();
  return (
    <Main>

      <div className={classes.container}>
        <PhoneDetailsForm />
      </div>

      <div className={classes.container}>
        <ContactTable />
      </div>

    </Main>
  )
}

export default App
