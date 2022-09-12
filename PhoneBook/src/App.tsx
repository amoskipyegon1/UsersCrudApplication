import { useEffect, useState } from 'react';
import { PhoneDetailsForm } from './components/PhoneDetailsForm';
import { makeStyles, styled } from '@material-ui/core';
import { ContactTable } from './components/ContactTable';
import { createUserContact } from './Composables/FetchApi';


const Main = styled('main')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'start',
  width: '80%',
  height: '100%',
  padding: '0px 4px',
  gap: '12px',
  transition: 'width 300ms ease',
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
    transition: 'width 300ms ease',
    ['@media (max-width: 780px)']: {
      width: '95%',
    }
  }
})

interface UserDetail {
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
}

const sortFuncAscend = (list: UserDetail[]): UserDetail[] => {
  // console.log(list);
  var names = [];
  var sortedList: UserDetail[] = [];

  for(var i=0; i<list.length; i++) {
    names.push(list[i].lastName);
  }
  // console.log("Names", list.length);
  
  console.log(names);
  
  names.sort();

  for(let i=0; i<names.length; i++) {
    for(let j=0; j<list.length; j++) {
      if(list[j].lastName === names[i]) {
        console.log('List: ', list[j]);
        
        sortedList.push(list[j]);
      }
    }
  }

  return sortedList;
}

function App() {
  
  const classes = useStyles();
  
  const [userDetail, setUserDetail] = useState<UserDetail>({
    firstName: '', lastName: '', phone: ''
  });
  const [listSort, setListSort] = useState<boolean>(false);

  const [userDetailList, setUserDetailList] = useState<UserDetail[]>([]);

  const postUser = async (user: UserDetail): Promise<void> => {
    if(user.firstName !== '') {
      let url:string = 'http://127.0.0.1:8001/api/createcontact/';
      const contact_saved = createUserContact(url, user);
      console.log(contact_saved);
      
      if((await contact_saved).firstName !== null) {
        setUserDetail(await contact_saved);
      } else {
        return;
      }
    } else {
      return;
    }
  }


  useEffect(() => {
    if(userDetail.firstName !== ''){
      let user_details = userDetailList;
      // console.log("Users: ", user_details);
      user_details.push(userDetail);

      // Sort
      if(!listSort){
        const sortedContactList = sortFuncAscend(user_details);
        setUserDetailList(sortedContactList);
      } else {
        setUserDetailList(user_details);
      }

    } else {
      return;
    }
    
  }, [userDetail]);

  useEffect(() => {
    console.log(userDetailList);
    
  }, [userDetailList])

  return (
    <Main>

      <div className={classes.container}>
        <PhoneDetailsForm 
          postUser={postUser}
        />
      </div>

      <div className={classes.container}>
        <ContactTable userDetailList={userDetailList} />
      </div>

    </Main>
  )
}

export default App
