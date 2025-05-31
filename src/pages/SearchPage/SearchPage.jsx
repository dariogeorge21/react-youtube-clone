import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import { searchVideos } from '../../data/mockData';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      const results = searchVideos(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <Box sx={{ mt: 8 }}>
      {query && (
        <Box sx={{ px: 3, py: 2 }}>
          <Typography variant="h6" color="text.secondary">
            Search results for "{query}"
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </Typography>
        </Box>
      )}
      
      <VideoGrid 
        videos={searchResults} 
        title={searchResults.length === 0 && query ? 'No results found' : null}
      />
    </Box>
  );
};

export default SearchPage;
