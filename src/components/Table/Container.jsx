import { removeUserActionCreator } from '../../redux/reducers/userListReducer';
import Table from './index';
import { connect } from 'react-redux';
 
const mapStateToProps = state => {
  return {
    users: state.adminPanelPage.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: event => {
      dispatch(removeUserActionCreator(+event.currentTarget.id))
    }
  }
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table)

export default TableContainer;
