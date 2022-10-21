import PropTypes from "prop-types";
import { Body1 } from "../styles";

function BodyOne(props) {
    
    const { children, color, center } = props;

    return <Body1 color={color} center={center}>
        {children}
    </Body1>
}

BodyOne.prototypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    center: PropTypes.bool
}

BodyOne.defaultProps = {
    color: "black",
    center: false
}

export default BodyOne;