import axios from "axios";
import {
  SET_PROPERTIES,
  ADD_PROPERTY,
  DELETE_PROPERTY,
  UPDATE_PROPERTY
} from "./types";
// Register User

export const addNewProperty = (propertyData, userData, history) => dispatch => {
  axios
    .post("/api/properties/add/" + userData, propertyData)
    .then(res => {
      dispatch(addProperty(propertyData));
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
      for (let prop in properties) {
        const updatedProp = properties[prop];
        if (updatedProp.location.lon === '-1' && updatedProp.location.lat === '-1') {
          axios
            .get(`https://nominatim.openstreetmap.org/search?q=${updatedProp.location.street},${updatedProp.location.city},${updatedProp.location.state}+${updatedProp.location.zipCode}+USA&format=json&limit=1`)
            .then(res => {
              const {lat, lon} = res.data[0];
              updatedProp.location.lat = lat;
              updatedProp.location.lon = lon;
              axios
                .put("/api/properties/update/" + userData, updatedProp)
                .then(res => {
                  dispatch(updateProperty(updatedProp));
                })
                .catch(err => console.log("ERRORS: " + err)
                );
          })
          .catch(err => console.log("Couldn't retrieve information: " + err));
        }
      }
    })
    .catch(err => console.log("Error, get properties failed with: " + err)
    );
};

export const deleteExistingProperty = (propertyId, userData, history) => dispatch => {
  axios
    .delete("/api/properties/delete/" + propertyId)
    .then(res => {
      console.log("HERE!")
      dispatch(deleteProperty(propertyId));
      history.push("/dashboard");
    })
    .catch(err => console.log("ERRORS: " + err)
    );
};

export const updateExistingProperty = (propertyData, userData, history) => dispatch => {
  axios
    .put("/api/properties/update/" + userData, propertyData)
    .then(res => {
      dispatch(updateProperty(propertyData));
      history.push("/dashboard");
    })
    .catch(err => console.log("ERRORS: " + err)
    );
};

// set properties
export const setProperties = properties => {
  return {
    type: SET_PROPERTIES,
    payload: properties
  };
};

// set properties
export const deleteProperty = property => {
  return {
    type: DELETE_PROPERTY,
    payload: property._id
  };
};

// Add a property
export const addProperty = property => {
  return {
    type: ADD_PROPERTY,
    payload: property
  };
};

// Add a property
export const updateProperty = property => {
  return {
    type: UPDATE_PROPERTY,
    payload: property
  };
};