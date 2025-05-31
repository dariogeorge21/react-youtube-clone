// Mock data for YouTube clone
export const mockVideos = [
  {
    id: '1',
    title: 'React Tutorial for Beginners - Complete Course',
    description: 'Learn React from scratch in this comprehensive tutorial. Perfect for beginners who want to master React development.',
    thumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
    channelName: 'React Academy',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLQDrlqGL4wbdRzW6qpQjGg-kb8TUFjOLZQB8SpF=s68-c-k-c0x00ffffff-no-rj',
    views: '1.2M',
    uploadTime: '2 weeks ago',
    duration: '3:45:20'
  },
  {
    id: '2',
    title: 'JavaScript ES6+ Features You Must Know',
    description: 'Explore the latest JavaScript features including arrow functions, destructuring, async/await, and more.',
    thumbnail: 'https://img.youtube.com/vi/NCwa_xi0Uuc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/NCwa_xi0Uuc',
    channelName: 'JavaScript Mastery',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLTDzKjbJkLGHxeaktv_BXV7Vz4J8nbr7_7hHKBH=s68-c-k-c0x00ffffff-no-rj',
    views: '856K',
    uploadTime: '1 week ago',
    duration: '2:15:30'
  },
  {
    id: '3',
    title: 'Building a Full Stack App with Node.js and MongoDB',
    description: 'Complete tutorial on building a full-stack application using Node.js, Express, and MongoDB.',
    thumbnail: 'https://img.youtube.com/vi/fgTGADljAeg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/fgTGADljAeg',
    channelName: 'Full Stack Dev',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLRDtTNH5i_cp7_J8Q8VXudy_FqGfqOOA_6oRw=s68-c-k-c0x00ffffff-no-rj',
    views: '432K',
    uploadTime: '3 days ago',
    duration: '4:20:15'
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox - When to Use Each',
    description: 'Learn the differences between CSS Grid and Flexbox and when to use each layout method.',
    thumbnail: 'https://img.youtube.com/vi/hs3piaN4b5I/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/hs3piaN4b5I',
    channelName: 'CSS Tricks',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLSKJKLJHGFDSASDFGHJKL=s68-c-k-c0x00ffffff-no-rj',
    views: '298K',
    uploadTime: '5 days ago',
    duration: '45:30'
  },
  {
    id: '5',
    title: 'Python Machine Learning Crash Course',
    description: 'Get started with machine learning in Python using scikit-learn, pandas, and numpy.',
    thumbnail: 'https://img.youtube.com/vi/7eh4d6sabA0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/7eh4d6sabA0',
    channelName: 'Python Pro',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLQwertyuiop=s68-c-k-c0x00ffffff-no-rj',
    views: '1.8M',
    uploadTime: '1 month ago',
    duration: '5:30:45'
  },
  {
    id: '6',
    title: 'Docker for Developers - Complete Guide',
    description: 'Master Docker containerization for development and deployment workflows.',
    thumbnail: 'https://img.youtube.com/vi/3c-iBn73dDE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/3c-iBn73dDE',
    channelName: 'DevOps Hub',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLasdfghjkl=s68-c-k-c0x00ffffff-no-rj',
    views: '675K',
    uploadTime: '2 weeks ago',
    duration: '2:45:20'
  },
  {
    id: '7',
    title: 'Vue.js 3 Composition API Deep Dive',
    description: 'Explore Vue.js 3 Composition API with practical examples and best practices.',
    thumbnail: 'https://img.youtube.com/vi/bwItFdPt-6M/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/bwItFdPt-6M',
    channelName: 'Vue Mastery',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLzxcvbnm=s68-c-k-c0x00ffffff-no-rj',
    views: '234K',
    uploadTime: '4 days ago',
    duration: '1:55:10'
  },
  {
    id: '8',
    title: 'GraphQL with Apollo Server Tutorial',
    description: 'Build a GraphQL API with Apollo Server and integrate it with React frontend.',
    thumbnail: 'https://img.youtube.com/vi/DyvsMKsEsyE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/DyvsMKsEsyE',
    channelName: 'GraphQL Academy',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AKedOLqwertyui=s68-c-k-c0x00ffffff-no-rj',
    views: '189K',
    uploadTime: '1 week ago',
    duration: '3:15:40'
  }
];

// Function to search videos
export const searchVideos = (query) => {
  if (!query) return mockVideos;
  
  return mockVideos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.description.toLowerCase().includes(query.toLowerCase()) ||
    video.channelName.toLowerCase().includes(query.toLowerCase())
  );
};

// Function to get video by ID
export const getVideoById = (id) => {
  return mockVideos.find(video => video.id === id);
};

// Function to get related videos (excluding current video)
export const getRelatedVideos = (currentVideoId) => {
  return mockVideos.filter(video => video.id !== currentVideoId).slice(0, 4);
};
