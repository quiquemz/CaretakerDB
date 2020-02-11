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
    })
    .catch(err => console.log("Error, get properties failed with: " + err)
    );
};

export const deleteExistingProperty = (propertyId, userData, history) => dispatch => {
  axios
    .delete("/api/properties/delete/" + propertyId)
    .then(res => {
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
  const newProperty = {
    userId: property.userId,
    season: property.season,
    price: property.price,
    additionalCosts: property.additionalCosts,
    additionalCostsDetails: property.additionalCostsDetails,
    currentOwed: property.currentOwed,
    dateCreated: property.dateCreated,
    owner: {
        firstName: property.ownerFirstName,
        lastName: property.ownerLastName,
        plowing: property.plowing,
        email: property.email,
        address: {
            street: property.ownerAddress,
            city: property.ownerCity,
            state: property.ownerState,
            zipCode: property.ownerZipCode
        },
        homePhone: property.ownerHomePhone,
        officePhone: property.ownerOfficePhone,
        otherPhone: property.ownerOtherPhone,
        cellPhone: property.ownerCellPhone,
        repToNotify: property.ownerRepToNotify,
        repAddress: {
            street: property.ownerRepStreet,
            city: property.ownerRepCity,
            state: property.ownerRepState,
            zipCode: property.ownerRepZipCode
        },
        repPhone: property.ownerRepPhone,
        repSecondPhone: property.ownerRepSecondPhone,
        alarmCode: property.ownerAlarmCode,
        additional: property.ownerAdditional
    },
    services: {
        irrigation: {
            contact: property.servicesIrrigationContact,
            phone: property.servicesIrrigationPhone
        },
        plumber: {
            contact: property.servicesPlumberContact,
            phone: property.servicesPlumberPhone
        },
        electrician: {
            contact: property.servicesElectricianContact,
            phone: property.servicesElectricianPhone
        },
        carpenter: {
            contact: property.servicesCarpenterContact,
            phone: property.servicesCarpenterPhone
        },
        appliance: {
            contact: property.servicesApplianceContact,
            phone: property.servicesAppliancePhone
        },
        furnace: {
            contact: property.servicesFurnaceContact,
            phone: property.servicesFurnacePhone
        },
        cleaner: {
            contact: property.servicesCleanerContact,
            phone: property.servicesCleanerPhone
        },
        boatsAndDocks: {
            contact: property.servicesBoatsAndDocksContact,
            phone: property.servicesBoatsAndDocksPhone
        },
    },
    special: {
        outsideShower: property.specialOutsideShower,
        outsideFaucet: property.specialOutsideFaucet,
        outsideSpa: property.specialOutsideSpa,
        other: property.specialOther
    },
    terms: {
        date: property.termsDate,
        signed: property.termsSigned
    },
    location: {
        street: property.locationStreet,
        city: property.locationCity,
        zipCode: property.locationZipCode,
        state: property.locationState
    }
  };
  return {
    type: ADD_PROPERTY,
    payload: newProperty
  };
};

// Add a property
export const updateProperty = property => {
  const newProperty = {
    _id: property._id,
    userId: property.userId,
    season: property.season,
    price: property.price,
    additionalCosts: property.additionalCosts,
    additionalCostsDetails: property.additionalCostsDetails,
    currentOwed: property.currentOwed,
    dateCreated: property.dateCreated,
    owner: {
        firstName: property.ownerFirstName,
        lastName: property.ownerLastName,
        plowing: property.plowing,
        email: property.email,
        address: {
            street: property.ownerAddress,
            city: property.ownerCity,
            state: property.ownerState,
            zipCode: property.ownerZipCode
        },
        homePhone: property.ownerHomePhone,
        officePhone: property.ownerOfficePhone,
        otherPhone: property.ownerOtherPhone,
        cellPhone: property.ownerCellPhone,
        repToNotify: property.ownerRepToNotify,
        repAddress: {
            street: property.ownerRepStreet,
            city: property.ownerRepCity,
            state: property.ownerRepState,
            zipCode: property.ownerRepZipCode
        },
        repPhone: property.ownerRepPhone,
        repSecondPhone: property.ownerRepSecondPhone,
        alarmCode: property.ownerAlarmCode,
        additional: property.ownerAdditional
    },
    services: {
        irrigation: {
            contact: property.servicesIrrigationContact,
            phone: property.servicesIrrigationPhone
        },
        plumber: {
            contact: property.servicesPlumberContact,
            phone: property.servicesPlumberPhone
        },
        electrician: {
            contact: property.servicesElectricianContact,
            phone: property.servicesElectricianPhone
        },
        carpenter: {
            contact: property.servicesCarpenterContact,
            phone: property.servicesCarpenterPhone
        },
        appliance: {
            contact: property.servicesApplianceContact,
            phone: property.servicesAppliancePhone
        },
        furnace: {
            contact: property.servicesFurnaceContact,
            phone: property.servicesFurnacePhone
        },
        cleaner: {
            contact: property.servicesCleanerContact,
            phone: property.servicesCleanerPhone
        },
        boatsAndDocks: {
            contact: property.servicesBoatsAndDocksContact,
            phone: property.servicesBoatsAndDocksPhone
        },
    },
    special: {
        outsideShower: property.specialOutsideShower,
        outsideFaucet: property.specialOutsideFaucet,
        outsideSpa: property.specialOutsideSpa,
        other: property.specialOther
    },
    terms: {
        date: property.termsDate,
        signed: property.termsSigned
    },
    location: {
        street: property.locationStreet,
        city: property.locationCity,
        zipCode: property.locationZipCode,
        state: property.locationState
    }
  };
  return {
    type: UPDATE_PROPERTY,
    payload: newProperty
  };
};