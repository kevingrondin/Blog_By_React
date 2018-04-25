import Axios from 'axios';

import config from '../config';

export default class ArticlesService {
  async getArticleCategories() {
    const response = await Axios.get(`${config.apiUrl}/categories`);

    return response.data.categories;
  }
}
