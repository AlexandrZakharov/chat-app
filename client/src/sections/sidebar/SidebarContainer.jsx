import { signOut } from "./../../redux/reducers/auth";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
