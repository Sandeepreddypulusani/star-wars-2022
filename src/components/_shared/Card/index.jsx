import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import PropTypes from "prop-types";

import { Header1, Header3, Body2 } from "../Fonts";

function ActionAreaCard(props) {
  const { header, imgLocation, caption, description } = props;
  const imageName = header && header.toLowerCase().split(" ").join("-");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={`../images/${imgLocation}/${imageName}.jpeg`}
          alt={imageName}
        />
        <CardContent>
          {header && (<Header1>{header}</Header1>)}
          {caption && (<Header3>{caption}</Header3>)}
          {description && (<Body2>{description}</Body2>)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ActionAreaCard.prototypes = {
  header: PropTypes.string.isRequired,
  imgLocation: PropTypes.string.isRequired,
  caption: PropTypes.string,
  description: PropTypes.string
}

ActionAreaCard.defaultProps = {
  caption: undefined,
  description: undefined
}

export default ActionAreaCard;