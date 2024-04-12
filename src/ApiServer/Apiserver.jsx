import axios from 'axios';

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/api/v1'
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
      const response = await this.axios.post('/refresh-token', refreshTokenData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async changeCurrentPassword(passwordData) {
    try {
      const response = await this.axiosInstance.patch('/users/change-password', passwordData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateAccountDetails(accountDetails) {
    try {
      const response = await this.axiosInstance.patch('/users/update-details', accountDetails);
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
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      const response = await this.axiosInstance.patch('/users/update-avatar', avatarData, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async updateUserCoverImage(coverImageData) {
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      const response = await this.axiosInstance.patch('/users/update-cover', coverImageData, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getUserChannelProfile(username) {
    try {
      const response = await this.axiosInstance.get(`/users/channel/${username}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getWatchHistory() {
    try {
      const response = await this.axiosInstance.get('/users/watch-history');
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
}

export default ApiService;
