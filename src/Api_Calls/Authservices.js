import axios from "axios";

const BASE_URL = "https://localhost:7287/api/Authentication";

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Include cookies in requests
    headers: {
        'Content-Type': 'application/json',
    }
});

export const registerUser = async (formData) => {
    const res = await api.post(`/register`, formData);
    return res.data;
};

export const loginUser = async (formData) => {
    const res = await api.post(`/Login`, formData);
    console.log(res.data)
    return res.data;
};
export const AddRole = async (role) => {
    const res = await api.post(`/AddRole`, role);
    return res.data
}

export const sendResetToken = async (email) => {
    const res = await api.post(`/SendToken_ToMail`, { email });
    return res.data;
};

export const resetPassword = async (data) => {
    const res = await api.post(`/ResetPassword`, data);
    return res.data;
};
