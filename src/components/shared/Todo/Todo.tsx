import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

export const Todo = () => {
  return (
    <Box sx={{ width: '100%' }}>
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
            </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            {/* <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton> */}
            <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            {/* <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton> */}
            </Box>
        </Box>
        {/* <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
        /> */}
        </Card>
    </Box>
  )
}
