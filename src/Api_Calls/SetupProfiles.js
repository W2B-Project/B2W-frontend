import axios from "axios";
const BASE_URL = "https://localhost:7287/api/UserProfile";

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const setupNewUser = async (formData) => {
    const res = await api.post('', formData);
    return res.data;
};

export const getUserData = async (userid,setdata) => {
        try {
            const res = await api.get(`/ByUser/${userid}`);
            setdata(res.data);
            return res.data;
            
        } catch (err) {
            console.error("Error fetching user data:", err);
        }
};