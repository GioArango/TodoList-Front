import { Box, Card, CardContent, Unstable_Grid2 as Grid, Skeleton } from '@mui/material/';

export const TodoCardSkeleton = () => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', mx: 4, my: 0.5 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                {/* Title */}
                <Skeleton height={40} width="100%" />

                {/* Status */}
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Skeleton height={15} width="20%" />
                </Box>

                {/* Description */}
                <Skeleton height={50} width="100%" />
            </CardContent>
            <Grid container sx={{ display: 'flex', alignSelf: 'end', p: 1 }}>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Skeleton variant="circular" width={30} height={30} />
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Skeleton variant="circular" width={30} height={30} />
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Skeleton variant="circular" width={30} height={30} />
                </Grid>
                <Grid xs={3} sm={3} sx={{ px: 0.5 }}>
                    <Skeleton variant="circular" width={30} height={30} />
                </Grid>
            </Grid>
        </Card>
    );
};