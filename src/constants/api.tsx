import images from './images'

export interface Video {
    id: number;
    title: string;
    channel: string;
    duration: string;
    thumbnail: string;
    viewCount: string;
    likeCount: number;
    dislikeCount: number;
    publishDate: string;
    avatar: string;
  }
  
  export interface VideosData {
    title: string;
    videos: Video[];
  }
  
  const api: VideosData = {
    title: "Popular videos",
    videos: [
      
      {
        id: 1,
        title: "How to make an omelette",
        channel: "Twitter",
        thumbnail: images.Thumbnail1,
        duration:'12:00',
        viewCount: '100M Views',
        likeCount: 10000,
        dislikeCount: 100,
        publishDate: "2023-09-16T15:32:46Z",
        avatar: images.Avatar
      },
      
      {
        id: 2,
        title: "The top 10 cats of all time",
        channel: "Spotify",
        thumbnail: images.Thumbnail2,
        duration:'42:00',
        viewCount: "20K Views",
        likeCount: 20000,
        dislikeCount: 200,
        publishDate: "2023-09-15T12:00:00Z",
        avatar: images.Avatar
      },
      
      {
        id: 3,
        title: "How to play the guitar",
        channel: "Discord",
        thumbnail: images.Thumbnail3,
        duration:'32:00',
        viewCount: '300K Views',
        likeCount: 30000,
        dislikeCount: 300,
        publishDate: "2023-09-14T09:00:00Z",
        avatar: images.Avatar
      },
      
      {
        id: 4,
        title: "Cooking a gourmet dinner",
        channel: "Twitter.",
        thumbnail: images.Thumbnail1,
        duration:'52:00',
        viewCount: '500K Views',
        likeCount: 5000,
        dislikeCount: 50,
        publishDate: "2023-09-13T18:45:00Z",
        avatar: images.Avatar
      },
      
      {
        id: 5,
        title: "Travel vlog: Exploring Europe",
        channel: "Spotify",
        thumbnail: images.Thumbnail2,
        duration:'42:00',
        viewCount: '800K Views',
        likeCount: 8000,
        dislikeCount: 80,
        publishDate: "2023-09-12T14:20:00Z",
        avatar: images.Avatar
      },
      
      {
        id: 6,
        title: "Home workout routine",
        channel: "Discord",
        thumbnail: images.Thumbnail3,
        duration:'12:00',
        viewCount: '1.2M Views',
        likeCount: 12000,
        dislikeCount: 120,
        publishDate: "2023-09-11T10:10:00Z",
        avatar: images.Avatar
      },
      
      {
        id: 7,
        title: "DIY gardening tips",
        channel: "Twitter",
        thumbnail: images.Thumbnail1,
        duration:'1:30:00',
        viewCount: '900K Views',
        likeCount: 9000,
        dislikeCount: 90,

        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      },
      {
        id: 8,
        title: "DIY gardening tips",
        channel: "Spotify",
        thumbnail: images.Thumbnail2,
        duration:'9:00',
        viewCount: '9M Views',
        likeCount: 9000,
        dislikeCount: 90,
        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      },
      {
        id: 9,
        title: "DIY gardening tips",
        channel: "Discord",
        thumbnail: images.Thumbnail3,
        duration:'6:00',
        viewCount: '20M Views',
        likeCount: 9000,
        dislikeCount: 90,
        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      },
      {
        id: 10,
        title: "DIY gardening tips",
        channel: "Twitter.",
        thumbnail: images.Thumbnail1,
        duration:'2:00',
        viewCount: '90M Views',
        likeCount: 9000,
        dislikeCount: 90,
        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      },
      {
        id: 11,
        title: "DIY gardening tips",
        channel: "Spotify",
        thumbnail: images.Thumbnail2,
        duration:'25:00',
        viewCount: '9K Views',
        likeCount: 9000,
        dislikeCount: 90,
        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      },
      {
        id: 12,
        title: "DIY gardening tips",
        channel: "Discord.",
        thumbnail: images.Thumbnail3,
        duration:'25:00',
        viewCount: '20k Views',
        likeCount: 9000,
        dislikeCount: 90,
        publishDate: "2023-09-10T16:30:00Z",
        avatar: images.Avatar
      }
    ],
  };
  
  export default api;
  