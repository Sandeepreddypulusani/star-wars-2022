import PropTypes from "prop-types";
import { Body2 } from "../styles";

function BodyTwo(props) {
    
    const { children, color, center } = props;

    return <Body2 color={color} center={center}>
        {children}
    </Body2>
}

BodyTwo.prototypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    center: PropTypes.bool
}

BodyTwo.defaultProps = {
    color: "black",
    center: false
}

export default BodyTwo;