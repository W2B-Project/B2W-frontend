import { createContext, useState } from "react";
import { userprofileassets } from "../assets/images/user Profile/userprofileAssets";

export const postContext = createContext();

const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([{
        id:Date.now(),
        name: "Peter Charles",
        role: "Call Center",
        avatar: userprofileassets.profileImage,
        isFollowing: true,
        text: "Debitis ab vel illo hic nisi quia suscipit esse...",
        image: null,
        actions: { like: true, comment: true, views: true },
        comments:[]
    }])

    const addPost = (postData) => {
        setPosts((prev) => [...prev, postData]);
    };

    return (
        <postContext.Provider value={{ posts,addPost,setPosts }}>
            {children}
        </postContext.Provider>
    );
};

export default PostProvider;
