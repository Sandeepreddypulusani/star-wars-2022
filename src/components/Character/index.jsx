import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Body1, VehiclesButton, Circle } from "../_shared/styles";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import Films from "../Films";


function CharacterDetails(props) {

    const { data: { characterDetails } } = props;

    if (characterDetails) {
        const { eye_color, films, height, name, vehicles } = characterDetails
        return (
            <Grid container
                justifyContent="center"
                alignItems="center"
                direction="column"
                spacing={3}>
                <Grid item>
                    <Avatar
                        alt="Remy Sharp"
                        src="../images/characters/luke-skywalker.jpeg"
                        sx={{ width: 120, height: 120 }}
                    />
                </Grid>
                <Grid item>

                    <Body1> {name}</Body1>
                </Grid>
                <Grid item xs={12}>
                    <Body1> Height - {height}cm</Body1>
                </Grid>
                <Grid item xs={12}>
                    <Body1> Eyecolor - {eye_color} <Circle bgColor={eye_color}/> </Body1>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        {films.length > 0 && (
                        <Grid item>
                            <Films {...props} />
                        </Grid>
                        )}
                         {vehicles.length > 0 && (
                        <Grid item>
                        <VehiclesButton variant="contained" startIcon={<TwoWheelerIcon />}>
                            Vehicles List
                        </VehiclesButton>
                    </Grid>
                        )}
                        
                    </Grid>

                </Grid>

            </Grid>

        )
    }

    return null;
}
export default CharacterDetails;