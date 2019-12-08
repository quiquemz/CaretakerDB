import axios from "axios";
import {
  SET_CONTRACTS,
  ADD_CONTRACT
} from "./types";
// Register User

export const addNewContract = (contractData, history) => dispatch => {
  axios
    .post("/contracts/add", contractData)
    .then(res => {
      dispatch(setContracts(contractData))
      history.push("/dashboard");
    })
    .catch(err => console.log("ERRORS!")
    );
};
// Get contracts - load contracts from server for this user
export const getContracts = userData => dispatch => {
  axios
    .get("/contracts/" + userData)
    .then(res => {
      const contracts = res.data;
      dispatch(setContracts(contracts));
    })
    .catch(err => console.log("FIX ERRORS")
    );
};

// set contracts
export const setContracts = contracts => {
  return {
    type: SET_CONTRACTS,
    payload: contracts
  };
};

// Add a contract
export const addContract = contract => {
  return {
    type: ADD_CONTRACT,
    payload: contract
  };
};