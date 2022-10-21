import { styled } from "@mui/system";
import Button from '@mui/material/Button';

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

export const Circle = styled("span")(({bgColor}) => ({
    height: "13px",
width: "13px",
backgroundColor: bgColor,
borderRadius: "50%",
display: "inline-block"
}))