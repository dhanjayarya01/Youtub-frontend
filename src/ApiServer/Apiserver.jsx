import axios from 'axios';



class Apiservice{

  registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/v1/users/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  loginUser = async (userData) => {
  try {
    const response = await axios.post('/api/v1/users/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// apiService.js

  logoutUser = async () => {
  try {
    const response = await axios.post('/api/v1/users/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  refreshAccessToken = async (refreshTokenData) => {
  try {
    const response = await axiosInstance.post('/refresh-token', refreshTokenData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  changeCurrentPassword = async (passwordData) => {
  try {
    const response = await axiosInstance.patch('/users/change-password', passwordData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  updateAccountDetails = async (accountDetails) => {
  try {
    const response = await axiosInstance.patch('/users/update-details', accountDetails);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  getCurrentUser = async () => {
  try {
    const response = await axios.get('/api/v1/users/current-user');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  updateUserAvatar = async (avatarData) => {
  try {
    // Note: This requires handling multipart/form-data for file upload
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    const response = await axiosInstance.patch('/users/update-avatar', avatarData, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  updateUserCoverImage = async (coverImageData) => {
  try {
    // Similar to updateUserAvatar, handle multipart/form-data
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    const response = await axiosInstance.patch('/users/update-cover', coverImageData, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

 getUserChannelProfile = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/channel/${username}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

  getWatchHistory = async () => {
  try {
    const response = await axiosInstance.get('/users/watch-history');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

}

export default Apiservice