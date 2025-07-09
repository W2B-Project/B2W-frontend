import { useContext } from "react";
import { postContext } from "../../../context/PostContext";
import { SetupContext } from "../../../context/SetupContext";
import PostsList from "../../home/PostsList";

function Posts() {
    const { posts } = useContext(postContext)
    const { userData } = useContext(SetupContext)
    const userPosts = posts.filter(
        (post) => post?.userId === userData.applicationUserId
    );
    if (userPosts.length !== 0)
        return <PostsList userPosts={userPosts} userProfile={true} />
    else
        return <div className="text-center text-2xl mt-20 font-semibold">No Added Posts Yet</div>

}

export default Posts