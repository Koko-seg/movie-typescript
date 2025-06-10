export const getGenreName = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/genre/movie/list?language=en`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );

    const genre = await response.json();
    // console.log("genre", genre);
    return genre;
  } catch (error) {
    console.log(error);
  }
};
