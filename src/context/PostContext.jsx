import { createContext, useState,useEffect } from "react";
import { loadFromLocalStorage } from "./JobContext";

export const postContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(() =>
    loadFromLocalStorage("posts", [])
)

    const [isMyPost,setIsMyPost]=useState(false)
    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    const addPost = (postData) => {
        setPosts((prev) => [...prev, postData]);
    };

    return (
        <postContext.Provider value={{ posts,addPost,setPosts,isMyPost,setIsMyPost }}>
            {children}
        </postContext.Provider>
    );
};

export default PostProvider;
