import axios from "axios";
import {
  SET_CONTRACTS,
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
// Get contracts - load contracts from server for this user
export const getContracts = userData => dispatch => {
  axios
    .get("/contracts/" + userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const contracts = res.data;
      dispatch(setContracts(contracts));
    })
    .catch(err => console.log("FIX ERRORS")
    );
};

// Set logged in user
export const setContracts = contracts => {
    return {
      type: SET_CONTRACTS,
      payload: contracts
    };
  };
  // User loading
  export const setUserLoading = () => {
    return {
      type: ADD_CONTRACT
    };
  };