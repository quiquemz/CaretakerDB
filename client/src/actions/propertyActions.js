import axios from "axios";
import {
  SET_PROPERTIES,
  ADD_PROPERTY
} from "./types";
// Register User

export const addNewProperty = (propertyData, userData, history) => dispatch => {
  console.log(propertyData);
  console.log(userData);
  axios
    .post("/api/properties/add/" + userData, propertyData)
    .then(res => {
      dispatch(addProperty(propertyData))
      history.push("/dashboard");
    })
    .catch(err => console.log("ERRORS: " + err)
    );
};
// Get properties - load properties from server for this user
export const getProperties = userData => dispatch => {
  axios
    .get("/api/properties/" + userData)
    .then(res => {
      const properties = res.data;
      dispatch(setProperties(properties));
    })
    .catch(err => console.log("FIX ERRORS")
    );
};

// set properties
export const setProperties = properties => {
  return {
    type: SET_PROPERTIES,
    payload: properties
  };
};

// Add a property
export const addProperty = property => {
  return {
    type: ADD_PROPERTY,
    payload: property
  };
};