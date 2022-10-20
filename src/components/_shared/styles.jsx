import { styled } from "@mui/system";
import Button from '@mui/material/Button';

export const Header1 = styled("h1")({
    color: "#fff",
    textAlign: "center"
})

export const Header2 = styled("h2")({
    color: "#fff",
    textAlign: "center"
})

export const Body1 = styled("span")({
    color: "#fff",
    fontSize:"1.1rem"
})

export const StyledButton = styled(Button)(({buttoncolor}) => ({
    backgroundColor: buttoncolor,
    color:"#fff",
    border:`2px solid ${buttoncolor}`,
    '&:hover': {
      backgroundColor: "#fff",
      color:buttoncolor,
      border:"2px solid #fff"
    },
}));

export const VehiclesButton = styled(Button)({
    backgroundColor: "orange",
    color:"#fff",
    border:"2px solid orange",
    '&:hover': {
      backgroundColor: "#fff",
      color:"orange",
      border:"2px solid #fff"
    },
});

export const Circle = styled("span")(({bgColor}) => ({
    height: "13px",
width: "13px",
backgroundColor: bgColor,
borderRadius: "50%",
display: "inline-block"
}))