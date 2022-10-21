
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";

import Card from "../_shared/Card";
import Dialog from "../_shared/Dialog";

function Vehicles(props) {
    const { toggleVehiclesModal, data } = props;
    const { vehiclesList, vehiclesListLoaded } = data;

    return (
        <Dialog
            content={
                <Grid container spacing={2}>
                    {!vehiclesListLoaded ? <CircularProgress /> : vehiclesList.length > 0 && vehiclesList.map((item) => {
                        const { data: { name, model, max_atmosphering_speed } } = item;
                        console.log(item)
                        return (
                        <Grid item xs={12} key={name}>
                            <Card
                                {...props}
                                header={name}
                                caption={`Modal: ${model}`}
                                description={`Max Atmosphering Speed: ${max_atmosphering_speed}`}
                                imgLocation="vehicles"
                            />
                        </Grid>
    )})}
                </Grid>
            }
            onClose={() => toggleVehiclesModal(false)}
            title="Vehicles List"
            open
            />

    )
}

Vehicles.prototypes = {
    toggleVehiclesModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

Vehicles.defaultProps = {}

export default Vehicles;