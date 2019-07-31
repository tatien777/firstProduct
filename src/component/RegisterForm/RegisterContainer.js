import {connect} from "react-redux"
import Register from './index';
import {register} from './RegisterForm.action';

const mapStateToProps = state => {
    console.log(state,"state")
    return {
      loading: state.LoginReducer.load,
      data: state.LoginReducer.data,
      error: state.LoginReducer.error
    };
  };
  
  const mapDispatchToProps = { register }

  export default connect(mapStateToProps , mapDispatchToProps)(Register);
  