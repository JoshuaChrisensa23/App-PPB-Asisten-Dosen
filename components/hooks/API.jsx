import axios from "axios";

const AXIOS_REQUEST = async (config) => {
  try {
    const response = await axios(config);
    return { loading: false, message: "", data: response.data };
  } catch (error) {
    console.warn("Error in AXIOS_REQUEST:", error);

    let errorMessage = "Failed to process request";
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = "Invalid username or password";
      } else if (error.response.status === 400) {
        errorMessage = "Invalid request format";
      } else if (error.response.status === 404) {
        errorMessage = "Resource not found";
      } else if (error.response.status === 500) {
        errorMessage = "Internal server error";
      } else {
        errorMessage = `Server error: ${error.response.status}`;
      }
    } else if (error.request) {
      errorMessage = "No response received from server";
    } else {
      errorMessage = error.message || "An unexpected error occured";
    }

    return { loading: false, message: errorMessage, data: null };
  }
};

const AUTH_USER = async (param) => {
  try {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://fakestoreapi.com/auth/login",
      data: param,
    };

    const response = await AXIOS_REQUEST(config);
    console.log("AUTH_USER response:", response);
    return response;
  } catch (error) {
    console.warn("Error in AUTH_USER:", error);
    return {
      loading: false,
      message: "An unexpected error occured during authentication",
      data: [],
    };
  }
};

const GET_USER_BY_USERNAME = async (username) => {
  try {
    const config = {
      method: "GET",
      url: "https://fakestoreapi.com/users",
    };

    const response = await AXIOS_REQUEST(config);
    if (response.data && Array.isArray(response.data)) {
      const user = response.data.find((u) => u.username === username);
      if (user) {
        return { loading: false, message: "", data: user };
      }
      return { loading: false, message: "User details not found", data: null };
    }
    return response;
  } catch (error) {
    console.warn("Error in GET_USER_BY_USERNAME:", error);
    return {
      loading: false,
      message: "An unexpected error occurred while fetching user details",
      data: null,
    };
  }
};

export { AUTH_USER, AXIOS_REQUEST, GET_USER_BY_USERNAME };
