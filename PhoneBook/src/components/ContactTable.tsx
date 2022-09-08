import { styled, Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'


const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0px 10px',
  gap: '1.6rem',
})
const StyleTH = styled(TableCell)({
  backgroundColor: 'steelblue',
  color: 'papayawhip',
  borderRight: '1px solid #fff',
  fontSize: '16px',
})
export const ContactTable = () => {
  return (
    <Section>
      <Table>
        <TableHead>
          <TableRow>
            <StyleTH align='left'>First Name</StyleTH>
            <StyleTH align='left'>Last Name</StyleTH>
            <StyleTH align='left'>Phone</StyleTH>
          </TableRow>
        </TableHead>
      </Table>
    </Section>
  )
}
