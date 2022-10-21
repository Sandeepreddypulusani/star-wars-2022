import PropTypes from "prop-types";
import { Header3 } from "../styles";

function HeaderThree(props) {

    const { children, color, center } = props;

    return <Header3 color={color} center={center}>
        {children}
    </Header3>
}

HeaderThree.prototypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    center: PropTypes.bool
}

HeaderThree.defaultProps = {
    color: "black",
    center: false
}

export default HeaderThree;