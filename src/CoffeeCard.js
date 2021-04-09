import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

function CoffeeCard(props) {
    const { avatarUrl, title, subtitle, description, imgUrl } = props;

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia style={{ height: "150px" }}
                image={imgUrl}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
                <CardActions>
                    <Button size="small">Buy Now</Button>
                    <Button size="small">Offer</Button>
                </CardActions>
        </Card>
    )
}

export default CoffeeCard
