import Grid from '@mui/material/Grid';

import SelectField from "../Form";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Header1 } from "../_shared/styles";
import CharacterDetails from "../Character";

function App(props) {

    const { fetchCharactersList, data: { charactersListLoaded } } = props;

    useEffect(() => {
        fetchCharactersList();
    }, [fetchCharactersList])

    if (!charactersListLoaded) return <CircularProgress />;

    return (
        <>
        <Header1>Star Wars</Header1>
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
            <Grid item xs={12}>
            <SelectField {...props} />
            </Grid>
            <Grid item>
            <CharacterDetails {...props} />
            </Grid>
       </Grid>
       </>
    )
}

export default App;