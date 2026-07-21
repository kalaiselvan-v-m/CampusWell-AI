import api from "./axios";

export const registerStudent = async (data) => {

    const response = await api.post("/students/", data);

    return response.data;

};

export const loginStudent = async (data) => {

    const response = await api.post("/auth/login", data);

    return response.data;

};