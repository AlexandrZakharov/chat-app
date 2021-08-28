import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
  return {
    companion: state.companion,
  };
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
