import { useState } from 'react';
import { PhoneDetailsForm } from './PhoneDetailsForm';
import { Container } from '@material-ui/core';
import { ContactTable } from './ContactTable';
import '../assets/styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <div className="container">
        <PhoneDetailsForm />
      </div>

      <div className="container">
        <ContactTable />
      </div>
      
    </div>
  )
}

export default App
