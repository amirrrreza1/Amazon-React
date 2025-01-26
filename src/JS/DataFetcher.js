const baseUrl = "https://amirrrreza1.github.io/Amazon-React-Link/db.json";

const dataFetcher = async apiRoute => {
  try {
    const response = await fetch(`${baseUrl}${apiRoute}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


export default dataFetcher;
