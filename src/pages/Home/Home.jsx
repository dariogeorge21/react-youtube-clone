import React from 'react';
import { Box } from '@mui/material';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { mockVideos } from '../../data/mockData';

const Home = () => {
  return (
    <Box sx={{ mt: 8 }}> {/* Add margin top to account for fixed header */}
      <VideoGrid videos={mockVideos} />
    </Box>
  );
};

export default Home;
