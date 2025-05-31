import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  Paper,
  IconButton
} from '@mui/material';
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  MoreHoriz as MoreHorizIcon
} from '@mui/icons-material';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Video not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Video Player */}
      <Box
        sx={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden',
          backgroundColor: '#000',
          borderRadius: 1
        }}
      >
        <iframe
          src={video.videoUrl}
          title={video.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allowFullScreen
        />
      </Box>

      {/* Video Info */}
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {video.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {video.views} views
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.uploadTime}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              startIcon={<ThumbUpIcon />}
              variant="outlined"
              size="small"
            >
              Like
            </Button>
            <Button
              startIcon={<ThumbDownIcon />}
              variant="outlined"
              size="small"
            >
              Dislike
            </Button>
            <Button
              startIcon={<ShareIcon />}
              variant="outlined"
              size="small"
            >
              Share
            </Button>
            <IconButton size="small">
              <DownloadIcon />
            </IconButton>
            <IconButton size="small">
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Channel Info */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
          <Avatar
            src={video.channelAvatar}
            alt={video.channelName}
            sx={{ width: 48, height: 48 }}
          />
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {video.channelName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              1.2M subscribers
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 2 }}>
              {video.description}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ 
              borderRadius: 20,
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
