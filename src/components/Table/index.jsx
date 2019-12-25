import React from 'react';
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import style from "./index.module.scss";
import Container from '@material-ui/core/Container';
import {removeUserActionCreator} from '../../redux/reducers/userListReducer';
import Header from '../Header/Header';

const UserListTable = props => {

  const removeUser = (event) => {
    console.log(event.currentTarget.id)
    props.dispatch(removeUserActionCreator(event.currentTarget.id))
  }
  
  const users = props.state.map((user, i) => {
    return (
      <TableRow key={i}>
        <TableCell component="th" scope="row">{user.id}</TableCell>
        <TableCell align="center">{user.firstName}</TableCell>
        <TableCell align="center">{user.lastName}</TableCell>
        <TableCell align="center">{user.eMail}</TableCell>
        <TableCell align="center">{(user.removeRequest) ? (<Button onClick={removeUser} id={user.id} variant="contained" color="secondary">Remove</Button>): ''}</TableCell>
      </TableRow>
    )
  })
  return (
    <div>
      <Header text={"Logout"} link={'/'} />
      <Container>
        <Paper className={style.root}>
          <Table className={style.table} aria-label="simple table">
            <TableHead>
              <TableRow className={style.head}>
                <TableCell className={style.head__item}>id</TableCell>
                <TableCell className={style.head__item} align="center">
                  Name
                </TableCell>
                <TableCell className={style.head__item} align="center">
                  Surname
                </TableCell>
                <TableCell className={style.head__item} align="center">
                  e-mail
                </TableCell>
                <TableCell className={style.head__item} align="center">
                  isRemove
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{users}</TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default UserListTable;
