import SelectField from "../Form";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Header1 } from "../_shared/styles";

function App(props) {

    const { fetchCharactersList, data: { charactersListLoaded } } = props;

    useEffect(() => {
        fetchCharactersList();
    }, [])

    if (!charactersListLoaded) return <CircularProgress />;

    return (
        <>
            <Header1>Star Wars</Header1>
            <SelectField {...props} />
        </>
    )
}

export default App;