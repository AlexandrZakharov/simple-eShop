import SignIn from './index';
import { checkUserActionCreator } from '../../redux/reducers/userListReducer';
import { connect } from "react-redux";

// const SignInContainer = props => {
//   // debugger;
//   // const checkUser = props.state.map(user => {
//   //   if() {

//   //   }
//   // })
//   let redirect = false;
//   const checkUser = user => {
//     props.dispatch(checkUserActionCreator(user))
//     if (Object.keys(props.state.authorizedUser).length == 0) {
//       alert('Вы ввели неверный email или пароль!')
//     } else {
//       redirect = true;
//     }
//     console.log(props.state)
//     debugger;
//   }
//   return (
//     <SignIn checkUser={checkUser} link={redirect} />
//   )
// }

let mapStateToProps = state => {
  return {}
}

let mapDispatchToProps = dispatch => {
  return {
    checkUser: user => {
      dispatch(checkUserActionCreator(user))
    }
  }
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer;