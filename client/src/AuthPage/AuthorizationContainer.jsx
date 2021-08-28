import { signup, signin } from "./../redux/reducers/auth";
import { connect } from "react-redux";
import Authorization from "./Authorization";

const mapStateToProps = state => {
  return {
    authData: state.auth
  }
}

const mapDispatchToProps = {
  signup, signin
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
