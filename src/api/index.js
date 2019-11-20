import axios from "axios";
/*
const URL = "https://xkcd-api.now.sh";
const movies = [
  {
    num: 1,
    img: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg",
    alt: "Don't we all."
  },
  {
    num: 2,
    img: "https://imgs.xkcd.com/comics/tree_cropped_(1).jpg",
    alt:
      "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch"
  },
  {
    num: 3,
    img: "https://imgs.xkcd.com/comics/island_color.jpg",
    alt: "Hello, island"
  },
  {
    num: 4,
    img: "https://imgs.xkcd.com/comics/landscape_cropped_(1).jpg",
    alt: "There's a river flowing through the ocean"
  }
];
*/
const fetchMoies = async () => {
  // const response = movies;
  // const response = await axios.get(`${URL}/${comicNumber}`);
  const response = await axios.get(
    `http://ec2-3-80-8-109.compute-1.amazonaws.com:8000/getMovies`
  );
  if (response.status >= 400) {
    throw new Error(response);
  }
  return response.data;
};

export default fetchMoies;
