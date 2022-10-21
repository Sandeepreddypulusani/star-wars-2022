import PropTypes from "prop-types";
import { Header1 } from "../styles";

function HeaderOne(props) {

    const { children, color, center } = props;

    return <Header1 color={color} center={center}>
        {children}
    </Header1>
}

HeaderOne.prototypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    center: PropTypes.bool
}

HeaderOne.defaultProps = {
    color: "black",
    center: false
}

export default HeaderOne;