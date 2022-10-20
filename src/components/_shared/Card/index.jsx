import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    const { header, caption, description} = props;
    const imageName = header && header.toLowerCase().split(" ").join("-");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={`../images/films/${imageName}.jpeg`}
          alt={imageName}
        />
        <CardContent>
<h1>{header}</h1>
<h3>{caption}</h3>
<p>{description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
