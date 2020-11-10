import { connect } from "react-redux";
import { saveTheme } from "../actions/changeThemeAction";
import Footer from "../../components/layout/Footer";

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  saveColorTheme: (color) => dispatch(saveTheme(color)),
});

const mapStateToProps = (state) => ({
  themeColor: state.color,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
