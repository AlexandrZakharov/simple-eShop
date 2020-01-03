import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import style from './index.module.scss';
import { removeUserActionCreator } from '../../redux/reducers/userListReducer';
import Header from '../Header/Header';
import User from './User';

const UserListTable = props => {
  const removeUser = event => {
    props.dispatch(removeUserActionCreator(+event.currentTarget.id));
  };
  return (
    <div>
      <Header text="Logout" link="/" />
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
            <TableBody>{props.state.map(user => (<User userInfo={user} remove={removeUser} />))}</TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default UserListTable;
