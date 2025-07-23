import axios from "axios";
import { RegistrationData } from "../types/registrationData";

//const API_BASE_URL: string = 'http://localhost:8080/api';
const API_BASE_URL: string =
  "https://8080-lennoxgonz-scubagearpic-7ekuzl7v3mq.ws-us120.gitpod.io/api";

export async function fetchAllGear() {
  try {
    const response = await axios.get(`${API_BASE_URL}/gear`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function fetchGearByCategory(category: String) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/gear/category/${category}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function registerUser(registrationData: RegistrationData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      registrationData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    }
    throw new Error("An unexpected error occurred during registration.");
  }
}
