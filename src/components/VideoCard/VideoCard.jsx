import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip
} from '@mui/material';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/video/${video.id}`);
  };

  const formatViews = (views) => {
    return views;
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        mb: 2
      }}
      onClick={handleVideoClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="194"
          image={video.thumbnail}
          alt={video.title}
          sx={{
            objectFit: 'cover'
          }}
        />
        <Chip
          label={video.duration}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            fontSize: '0.75rem'
          }}
        />
      </Box>
      
      <CardContent sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar
            src={video.channelAvatar}
            alt={video.channelName}
            sx={{ width: 36, height: 36, mt: 0.5 }}
          />
          
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 500,
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                mb: 0.5
              }}
            >
              {video.title}
            </Typography>
            
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.25 }}
            >
              {video.channelName}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {formatViews(video.views)} views
              </Typography>
              <Typography variant="body2" color="text.secondary">
                •
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.uploadTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
