
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";

import Card from "../_shared/Card";
import Dialog from "../_shared/Dialog";

function Films(props) {
    const { toggleFilmsModal, data } = props;
    const { filmsList, filmsListLoaded } = data;

    return (
        <Dialog
            content={
                <Grid container spacing={2}>
                    {!filmsListLoaded ? <CircularProgress /> : filmsList.length > 0 && filmsList.map((item) => {
                        const { data: { title, director, opening_crawl } } = item;
                        return (
                        <Grid item xs={12} key={title}>
                            <Card
                                {...props}
                                header={title}
                                caption={director}
                                description={opening_crawl}
                                imgLocation="films"
                            />
                        </Grid>
    )})}
                </Grid>
            }
            onClose={() => toggleFilmsModal(false)}
            title="Movies List"
            open
            />

    )
}

Films.prototypes = {
    toggleFilmsModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

Films.defaultProps = {}

export default Films;