import axios from "axios";
const createAPI = (baseURL) => {
    return axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


const USER_API = createAPI("https://localhost:7287/api/UserProfile");
const COMP_API = createAPI("https://localhost:7287/api/CompanyProfile");
const FEATURE_API = createAPI("https://localhost:7287/api/AccessibilityFeature");

/* setup user profile */
export const setupNewUser = async (formData) => {
    const res = await USER_API.post('', formData);
    return res.data;
};

export const getUserData = async (userid, setdata) => {
    try {
        const res = await USER_API.get(`/ByUser/${userid}`);
        setdata(res.data);
        return res.data;

    } catch (err) {
        console.error("Error fetching company data:", err);
    }
};
export const PostuserPic=async(img)=>{
    
}

/* setup company profile */
export const setupNewCompany = async (formData) => {
    const res = await COMP_API.post('', formData);
    return res.data;
};

export const getCompanyData = async (userid, setdata) => {
    try {
        const res = await COMP_API.get(`/ByUser/${userid}`);
        setdata(res.data);
        return res.data;

    } catch (err) {
        console.error("Error fetching company data:", err);
    }
};

/* handle add, delete, update AccessibilityFeatures */
export const handleFeatures = async (companyId,featuresList) => {
    try {
        // 1. Get old features
        const oldFeatures = await FEATURE_API.get(`/by-company/${companyId}`);

        // 2. Delete each one by id
        await Promise.all(
            oldFeatures.data.map(f => axios.delete(`https://localhost:7287/api/AccessibilityFeature/${f.id}`))
        );

        // 3. Prepare selected features
        const selectedFeatures = featuresList
            .filter(f => f.selected)
            .map(f => ({
                featureName: f.title,
                companyProfileId: companyId
            }));

        // 4. Post new features
        await Promise.all(
            selectedFeatures.map(f =>
                FEATURE_API.post('', f)
            )
        );
    } catch (err) {
        console.error("Error updating features", err.response?.data);
    }
};
/* handle get AccessibilityFeatures */
export const getFeatures = async (companyId,setfeatures) => {
    try {
        const Features = await FEATURE_API.get(`/by-company/${companyId}`);
        console.log(Features)
        setfeatures(Features)
    } catch (err) {
        console.error("Error getting features", err.response?.data);
    }
};

