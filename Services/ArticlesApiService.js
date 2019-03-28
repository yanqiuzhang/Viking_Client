import axios from "axios";

const url = `http://localhost:3000`;

export const GetArticles = async () => {
  try {
    let response = await axios.get(url + "/api/articles");
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error(error);
  }
};