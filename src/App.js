import { styled } from "@mui/system";
import "./App.css";
import Component from "./components/App";

const Wrapper = styled("div")({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "300px",
  height: "300px",
  padding: "50px",
  position: "absolute", /*Can also be `fixed`*/
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "auto"
})

function App() {
  return <Wrapper><Component/></Wrapper>
}

export default App;
