import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import VideoCard from '../VideoCard/VideoCard';

const VideoGrid = ({ videos, title = null }) => {
  if (!videos || videos.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '200px' 
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No videos found
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {title && (
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ mb: 3, fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      )}
      
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            xl={3} 
            key={video.id}
          >
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoGrid;
