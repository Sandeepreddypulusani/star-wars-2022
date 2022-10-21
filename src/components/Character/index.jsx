import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import MovieIcon from '@mui/icons-material/Movie';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PropTypes from "prop-types";

import { Circle, StyledButton } from "./styles";
import Films from "../Films";
import Vehicles from "../Vehicles";
import { Body1 } from "../_shared/Fonts"


function CharacterDetails(props) {

    const { data: { characterDetails, openFilmsModal, openVehiclesModal }, fetchFilmsList, fetchVehiclesList, toggleFilmsModal, toggleVehiclesModal } = props;

    if (characterDetails) {
        const { eye_color, films, height, name, vehicles } = characterDetails;
        const imageName = name && name.toLowerCase().split(" ").join("-");

        return (
            <>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing={3}>
                    <Grid item>
                        <Avatar
                            alt={imageName}
                            src={`../images/characters/${imageName}.jpeg`}
                            sx={{ width: 120, height: 120 }}
                        />
                    </Grid>
                    <Grid item>
                        <Body1 color="white"> {name}</Body1>
                    </Grid>
                    <Grid item xs={12}>
                        <Body1 color="white"> Height - {height}cm</Body1>
                    </Grid>
                    <Grid item xs={12}>
                        <Body1 color="white"> Eyecolor - {eye_color} <Circle bgColor={eye_color} /> </Body1>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>

                            {films.length > 0 && (
                                <Grid item>
                                    <StyledButton buttoncolor="#0363cc" variant="contained" startIcon={<MovieIcon />} onClick={() => {
                                        toggleFilmsModal(true);
                                        fetchFilmsList(films);
                                    }}>
                                        Films List
                                    </StyledButton>
                                </Grid>
                            )}

                            {vehicles.length > 0 && (
                                <Grid item>
                                    <StyledButton buttoncolor="orange" variant="contained" startIcon={<TwoWheelerIcon />} onClick={() => {
                                        toggleVehiclesModal(true);
                                        fetchVehiclesList(vehicles);
                                    }}>
                                        Vehicles List
                                    </StyledButton>
                                </Grid>
                            )}

                        </Grid>
                    </Grid>
                </Grid>
                {openFilmsModal && <Films {...props} />}
                {openVehiclesModal && <Vehicles {...props} vehiclesURL={vehicles} />}
            </>
        )
    }

    return null;
}

CharacterDetails.prototypes = {
    data: PropTypes.object.isRequired,
    fetchFilmsList: PropTypes.func.isRequired,
    fetchVehiclesList: PropTypes.func.isRequired,
    toggleFilmsModal: PropTypes.func.isRequired,
    toggleVehiclesModal: PropTypes.func.isRequired
}

CharacterDetails.defaultProps = {}

export default CharacterDetails;