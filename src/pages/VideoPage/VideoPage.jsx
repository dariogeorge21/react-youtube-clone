import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Container, Typography } from '@mui/material';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoCard from '../../components/VideoCard/VideoCard';
import { getVideoById, getRelatedVideos } from '../../data/mockData';

const VideoPage = () => {
  const { id } = useParams();
  const video = getVideoById(id);
  const relatedVideos = getRelatedVideos(id);

  if (!video) {
    return (
      <Container maxWidth="xl" sx={{ mt: 10 }}>
        <Typography variant="h4" align="center">
          Video not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Main Video Player */}
        <Grid item xs={12} lg={8}>
          <VideoPlayer video={video} />
        </Grid>

        {/* Related Videos Sidebar */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ pl: { lg: 2 } }}>
            <Typography 
              variant="h6" 
              sx={{ mb: 2, fontWeight: 'bold' }}
            >
              Related Videos
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {relatedVideos.map((relatedVideo) => (
                <Box key={relatedVideo.id} sx={{ maxWidth: { xs: '100%', lg: 400 } }}>
                  <VideoCard video={relatedVideo} />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoPage;
