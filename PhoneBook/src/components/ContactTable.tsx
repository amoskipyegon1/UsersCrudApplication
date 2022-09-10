import { DialogTitle, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'


const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '2px 10px',
  gap: '1.6rem',
  transition: 'padding 300ms ease',

  ['@media (max-width: 780px)']: {
    padding: '0px 10px',
  },
})
const StyleTH = styled(TableCell)({
  backgroundColor: '#e5e7eb',
  color: 'steelblue',
  borderRight: '1px solid #fff',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '14px 4px 2px 8px',
  transition: 'fonts 300ms ease',
  ['&:last-child']: {
    borderRight: '0px',
    borderTopRightRadius: '4px',
  },

  ['@media (max-width: 950px)']: {
    fontSize: '14px',
  },

  ['@media (max-width: 780px)']: {
    fontSize: '14px',
  },

})
const ContactsTable = styled(Table)({
  border: '1px solid #d1d5db',
  minHeight: ''
})
const TableData = styled(TableCell)({
  borderRight: '1px solid #e5e7eb',
  padding: '12px 4px',
  color: '#475569',

  ['&:last-child']: {
    borderRight: '0px',
  }
})
const TableDataRow = styled(TableRow)({
  ['&:nth-of-type(odd)']: {
    backgroundColor: '#f9fafb',
  },
})

interface UserDetail {
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
}


export const ContactTable = (props: {userDetailList: UserDetail[]}) => {

  const listSavedUsers = props.userDetailList.map((user) => 
    <TableDataRow>
      <TableData>{user.firstName}</TableData>
      <TableData>{user.lastName}</TableData>
      <TableData>{user.phone}</TableData>
    </TableDataRow>
  );
  
  return (
    <Section>
      <DialogTitle style={{textAlign: 'start', padding: '0px'}}>Saved Users</DialogTitle>
      <ContactsTable>
        <TableHead>
          <TableRow>
            <StyleTH align='left'>First Name</StyleTH>
            <StyleTH align='left'>Last Name</StyleTH>
            <StyleTH align='left'>Phone</StyleTH>
          </TableRow>
        </TableHead>
        <TableBody>
          {listSavedUsers}
        </TableBody>
      </ContactsTable>
    </Section>
  )
}
