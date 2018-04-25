import Axios from 'axios';

import config from '../config';

export default class ArticlesService {
  async getArticleCategories() {
    const response = await Axios.get(`${config.apiUrl}/categories`);

    return response.data.categories;
  }

  createArticle = async (data) => {
    await this.uploadToCloudinary(data.image);
  }

  async uploadToCloudinary(image) {
    const form = new FormData();
    form.append('file', image);
    form.append('upload_preset', 'g5ziunzg');

    const response = await Axios.post('https://api.cloudinary.com/v1_1/bahdcoder/image/upload', form);

    return response.data;
  }
}
