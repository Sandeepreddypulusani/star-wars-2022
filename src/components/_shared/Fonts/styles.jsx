import { styled } from "@mui/system";

export const Header1 = styled("h1")(({center, color}) => ({
    color: color,
    textAlign: center ? "center" : "left"
}))

export const Header3 = styled("h3")(({center, color}) => ({
    color: color,
    textAlign: center ? "center" : "left"
}))

export const Body1 = styled("span")(({center, color}) => ({
    color: color,
    textAlign: center ? "center" : "left",
    fontWeight: "bold",
    fontSize: "18px"
}))

export const Body2 = styled("span")(({center, color}) => ({
    color: color,
    textAlign: center ? "center" : "left",
    fontSize: "16px"
}))
