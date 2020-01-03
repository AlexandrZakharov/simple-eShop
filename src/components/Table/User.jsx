import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const User = props => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">{props.userInfo.id}</TableCell>
      <TableCell align="center">{props.userInfo.firstName}</TableCell>
      <TableCell align="center">{props.userInfo.lastName}</TableCell>
      <TableCell align="center">{props.userInfo.eMail}</TableCell>
      <TableCell align="center">{(props.userInfo.removeRequest) ? (<Button onClick={props.remove} id={props.userInfo.id} variant="contained" color="secondary">Remove</Button>) : ''}</TableCell>
    </TableRow>
  )
}

export default User;