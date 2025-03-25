import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const video = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      const json = await video.json();

      const filterData = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData?.length ? filterData[0] : json?.results[0];

      dispatch(addTrailerVideo(trailer));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
