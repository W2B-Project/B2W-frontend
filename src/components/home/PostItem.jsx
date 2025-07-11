import { useContext, useState } from "react";
import Button from "../global/Button";
import Model from "../global/Model";
import { FiSend } from "react-icons/fi";
import { postContext } from "../../context/PostContext";
import { SetupContext } from "../../context/SetupContext";
import { convertBlobUrlToBase64 } from "../../Api_Calls/SetupServices";
import { setup } from "../../assets/images/setup/setupAssets";

const PostItem = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPosts } = useContext(postContext)
  const [commentInput, setCommentInput] = useState("");
  const { userData,Pic } = useContext(SetupContext)

  const handleAddComment =async (postId) => {
    if (commentInput.trim() === "") return;
    const base64Img = await convertBlobUrlToBase64(Pic);
    const newComment = {
      name: userData.firstName + ' ' + userData.lastName,
      image: Pic?base64Img:setup.defImg,
      job: userData.desiredJobTitle,
      comment: commentInput
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ))
    setCommentInput("");
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold capitalize">{post.name}</h2>
              <p className="text-sm text-gray-500 capitalize">{post.role}</p>
            </div>
          </div>
          <div>
            {post.isFollowing ? (
              <>
                {post.userId !== userData.applicationUserId && <Button btn_text="Follow" width="60px" />}
                <span className="cursor-pointer text-xl ml-4">⋮</span>
              </>
            ) : (
              <span className="cursor-pointer text-xl">⋮</span>
            )}
          </div>
        </div>

        {post.text && (
          <p className="text-sm text-gray-700 mt-3">{post.text}</p>
        )}

        {post.image && (
          <img
            src={
              post.image
            }
            alt="post visual"
            className="w-full rounded-lg mt-3 max-h-72"
          />
        )}

        <div className="flex justify-around mt-4 text-gray-500 text-sm">
          <button className="hover:text-black">👍 Like</button>
          <button className="hover:text-black" onClick={() => setIsModalOpen(true)}>💬 Comment</button>
          <button className="hover:text-black">👁️ Views</button>
        </div>
      </div>

      {isModalOpen && (
        <Model onClose={() => setIsModalOpen(false)}>
          <h3 className="text-xl font-semibold mb-4 pb-4 border-b text-center">Comments</h3>

          {/* Input Field */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-full px-4 py-2"
            />
            <button onClick={() => handleAddComment(post.id)} className="text-2xl text-blue-600">
              <FiSend />
            </button>
          </div>

          {/* Comments */}
          <div className="mt-4 flex flex-col justify-between items-center">
            {post?.comments?.map((el, index) => (
              <div key={index} className="p-4 border-b w-full">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={el.image}
                    loading="lazy"
                    alt={el.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{el.name}</h4>
                    <p className="text-sm text-gray-500">{el.job}</p>
                  </div>
                </div>
                <p className="text-gray-700">{el.comment}</p>
              </div>
            ))}
          </div>
        </Model>
      )}
    </>
  );
};

export default PostItem;
