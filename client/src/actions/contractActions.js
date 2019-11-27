import axios from "axios";
import {
  GET_CONTRACTS,
  ADD_CONTRACT
} from "./types";
// Register User

export const addContract = (contractData, history) => dispatch => {
  axios
    .post("/api/contracts/add", contractData)
    .then(res => history.push("/dashboard")) // re-direct to login on successful register
    .catch(err => console.log("ERRORS!")
    );
};
// Login - get user token
export const getContracts = userData => dispatch => {
  axios
    .post("/api/contracts/", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};