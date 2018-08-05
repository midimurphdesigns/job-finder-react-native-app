import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS } from "./types";

const GITHUB_BASE_URL = "https://jobs.github.com/positions.json?";

export const fetchJobs = ({
  longitudeDelta,
  latitudeDelta,
  longitude,
  latitude
}) => {
  return async dispatch => {
    try {
      const url = `${GITHUB_BASE_URL}lat=${latitude}&long=${longitude}`;

      let { data } = await axios.get(url);
      console.log("====================================");
      console.log("this is the data", data);
      console.log("====================================");

      dispatch({
        type: FETCH_JOBS,
        payload: data
      });
    } catch (err) {
      console.log("Something went wrong... ", err);
    }
  };
};
