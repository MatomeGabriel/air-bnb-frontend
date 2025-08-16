import { Form } from "react-router-dom";
import apiClient from "./apiClient";

export const login = async (credentials) => {
  const res = await apiClient.post("/users/login", credentials);
  return res.data;
};

export const logout = async () => {
  const res = await apiClient.post("/users/logout");
  return res.data;
};

export const signUp = async (data) => {
  const res = await apiClient.post("/users/signup", data);
  return res.data;
};

export const getCurrentUser = async () => {
  console.log("Fetching current user...");
  const res = await apiClient.get("/users/me");
  return res.data;
};

export const updateProfileImage = async (file) => {
  const formdata = new FormData();
  formdata.append("photo", file);
  const res = await apiClient.patch("/users/upload-profile-image", formdata, {
    headers: { "Content-Type": undefined },
  });
  console.log(res);
  return res;
};
