import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS } from "./types";

const GITHUB_BASE_URL = "https://jobs.github.com/positions.json?";

const JOB_QUERY_PARAMS = {
  publisher: "4201738803816157",
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript"
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (longitude, latitude, cb) => {
  return async dispatch => {
    try {
      const url = `${GITHUB_BASE_URL}lat=${latitude}&long=${longitude}`;
      let { data } = await axios.get(url);
      dispatch({
        type: FETCH_JOBS,
        payload: data
      });
      cb();
    } catch (err) {
      console.log("Something went wrong... ", err);
    }
  };
};
