import Grid from '@mui/material/Grid';
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from "prop-types";

import SelectField from "../Form";
import { Header1 } from "../_shared/Fonts";
import CharacterDetails from "../Character";

function App(props) {

    const { fetchCharactersList, data: { charactersListLoaded } } = props;

    useEffect(() => {
        fetchCharactersList();
    }, [fetchCharactersList])

    if (!charactersListLoaded) return <CircularProgress />;

    return (
        <>
        <Header1 center color="white">Star Wars</Header1>
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

App.prototypes = {
    fetchCharactersList: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

App.defaultProps = {}

export default App;