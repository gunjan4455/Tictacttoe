import Home from "../components/home";
import * as stateActions from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        game: state.state

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        select: (index) => dispatch(stateActions.selectFunction(index)),
        reset: () => dispatch(stateActions.resetFunction())
    };
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
