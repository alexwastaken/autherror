import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThumbUp, Chat } from '@mui/icons-material';
import CardMedia from '@mui/material/CardMedia';

export default function card() {

    const fetchUsers = async () => {
      const response = await fetch('/api/hello')
      const data = await response
      return data
    }


    return (
        <Card sx={{ width: 500, height: 600, margin: '0.5rem', marginTop: '20px' }}>
          <CardMedia title="Your title">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <CardMedia
                title="Your title"
                component="img"
                image="/bloggerrr.png"
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
          <Button
            onClick={fetchUsers}
            variant="contained"
            color="primary"
            sx={{ marginLeft: '4rem' }}
            startIcon={<ThumbUp />}
          >
          </Button>
          <CardContent>
              <Typography variant="body2" color="text.secondary">
              </Typography>
          </CardContent>
        </Card>
    );
}