import { connect } from "react-redux";
import LoginFrom from "./";
import {login} from './LoginForm.action'

const mapStateToProps = state => {
  // console.log(state,"state")
  return {
    loading: state.RegisterReducer.loading,
    data: state.RegisterReducer.data,
    error: state.RegisterReducer.error
  };
};

const mapDispatchToProps = { login }
export default connect(mapStateToProps,mapDispatchToProps)(LoginFrom);
