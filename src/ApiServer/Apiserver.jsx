import axios from 'axios';

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://backendproject-sd57.onrender.com/api/v1'
    });
  }

  async registerUser(userData) {
    try {
      const response = await this.axiosInstance.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async loginUser(userData) {
    try {
      const response = await this.axiosInstance.post('/users/login', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async logoutUser() {
    try {
      const response = await this.axiosInstance.post('/users/logout');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async refreshAccessToken(refreshTokenData) {
    try {
      const response = await this.axiosInstance.post('/refresh-token', refreshTokenData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async changeCurrentPassword(passwordData) {
    try {
      const response = await this.axiosInstance.post('/users/change-password', passwordData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateAccountDetails(accountDetails) {
    try {
      const response = await this.axiosInstance.patch('/users/update-account', accountDetails);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getCurrentUser() {
    try {
      const response = await this.axiosInstance.get('/users/current-user');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateUserAvatar(avatarData) {
    try {
    
      const response = await this.axiosInstance.patch('/users/avatar', avatarData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateUserCoverImage(coverImageData) {
    try {
      const response = await this.axiosInstance.patch('/users/coverImage', coverImageData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getUserChannelProfile(username) {
    try {
      const response = await this.axiosInstance.get(`/users/c/${username}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getWatchHistory() {
    try {
      const response = await this.axiosInstance.get('/users/history');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getAllVideos(params) {

    try {
      const response = await this.axiosInstance.get('/videos', { params });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async publishAVideo(videoData) {
    try {
      const response = await this.axiosInstance.post('/videos', videoData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getVideoById(videoId) {
    try {
      const response = await this.axiosInstance.get(`/videos/v/${videoId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateVideo(videoId, videoData) {
    try {
      const response = await this.axiosInstance.patch(`/videos/v/${videoId}`, videoData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async deleteVideo(videoId) {
    try {
      const response = await this.axiosInstance.delete(`/videos/v/${videoId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async togglePublishStatus(videoId) {
    try {
      const response = await this.axiosInstance.patch(`/videos/toggle/publish/${videoId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getVideoComments(videoId, page = 1, limit = 10) {
    try {
      const response = await this.axiosInstance.get(`/comment/c/${videoId}`)
      return response.data;
    } catch (error) {
      console.log("err ",error);
      throw error.response.data;
    }
  }

    async addComment(videoId, content) {
      try {
        const response = await this.axiosInstance.post(`/comment/c/${videoId}`, { content });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  
    async updateComment(commentId, content) {
      try {
        const response = await this.axiosInstance.patch(`/comment/c/${commentId}`, { content });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  
    async deleteComment(commentId) {
      try {
        const response = await this.axiosInstance.delete(`/comment/c/${commentId}`);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  
  
  async toggleVideoLike(videoId) {
    try {
      const response = await this.axiosInstance.post(`/likes/toggle/v/${videoId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async toggleCommentLike(commentId) {
    try {
      const response = await this.axiosInstance.post(`/likes/toggle/c/${commentId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async toggleTweetLike(tweetId) {
    try {
      const response = await this.axiosInstance.post(`/tweets/${tweetId}/like`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getLikedVideos() {
    try {
      const response = await this.axiosInstance.get(`/likes/videos`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }



  async toggleSubscription(channelId) {
  try {
    const response = await this.axiosInstance.post(`/subcription/c/${channelId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

async getUserChannelSubscribers(channelId) {
  try {
    const response = await this.axiosInstance.get(`/subcription/c/${channelId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

async getSubscribedChannels(subscriberId) {
  try {
    const response = await this.axiosInstance.get(`/subcription/u/${subscriberId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
}


export default ApiService;
