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
const IMG_API = createAPI("https://localhost:7287/api/UserProfilePic");

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

/* handle userPic */
export const AddUserPic = async (userId, file) => {
    const formData = new FormData();
    formData.append("UserId", userId);
    formData.append("Image", file);
    const res = await axios.post(
        "https://localhost:7287/api/UserProfilePic/AddUserProfilePicture",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return res.data;
};

/*get user pic */
export const GetUserPic = async (userId, setData) => {
    try {
        const res = await IMG_API.get(`/GetUserProfilePictureByUserId/${userId}`, {
            responseType: "blob",
        });

        const imageBlob = res.data;
        const imageUrl = URL.createObjectURL(imageBlob);
        setData(imageUrl)
        return imageUrl;
    } catch (err) {
        console.error("Error getting user picture:", err);
    }
};
/* handle image data type */
const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};
export const convertBlobUrlToBase64 = async (blobUrl) => {
    const response = await fetch(blobUrl);         
    const blob = await response.blob();
    return await convertBlobToBase64(blob);        
};



/* handle add, delete, update AccessibilityFeatures */
export const handleFeatures = async (companyId, featuresList) => {
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
export const getFeatures = async (companyId, setfeatures) => {
    try {
        const Features = await FEATURE_API.get(`/by-company/${companyId}`);
        setfeatures(Features)
    } catch (err) {
        console.error("Error getting features", err.response?.data);
    }
};

