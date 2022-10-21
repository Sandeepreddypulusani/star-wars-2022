import { connect } from "react-redux";
import { bindActionCreators} from "redux";

import component from "./component";
import * as actions from "../../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(component);