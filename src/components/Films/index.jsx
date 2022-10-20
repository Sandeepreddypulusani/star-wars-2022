import MovieIcon from '@mui/icons-material/Movie';
import Dialog from "../_shared/Dialog";
import {useEffect} from "react"
import Card from "../_shared/Card";
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function Films(props) {
const {fetchFilmsList, filmsURL, data} = props;

const { filmsList, filmsListLoaded } = data;
useEffect(() => {
    fetchFilmsList(filmsURL)
}, [fetchFilmsList, filmsURL ])
    return (
        <Dialog 
        content={
            !filmsListLoaded ? <CircularProgress /> : 
            filmsList.length > 0 && filmsList.map((item) => {
const { data: {title, director, opening_crawl}} = item;
            return <Grid container spacing={2} key={title}>
                <Grid item xs={12}>
            <Card
{...props}
header={title}
caption={director}
description={opening_crawl}
            />
            <Divider />
            </Grid></Grid>
        })} 
        title="Films List" icon={<MovieIcon />} buttonColor="#0363cc">
            Films List
        </Dialog>

    )
}
export default Films;