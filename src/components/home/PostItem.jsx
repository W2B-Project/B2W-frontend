import { useState } from "react";
import Button from "../global/Button";
import Model from "../global/Model";
import { FiSend } from "react-icons/fi"; // make sure to install react-icons

const initialComments = [

];

const PostItem = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim() === "") return;

    const newComment = {
      name: "You",
      image: "https://i.pravatar.cc/100?u=you",
      job: "React Developer",
      comment: commentInput
    };

    setComments([newComment, ...comments]);
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
              <h2 className="font-semibold">{post.name}</h2>
              <p className="text-sm text-gray-500">{post.role}</p>
            </div>
          </div>
          <div>
            {post.isFollowing ? (
              <>
                <Button btn_text="Follow" width="60px" />
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
            src={post.image}
            alt="post visual"
            className="w-full rounded-lg mt-3"
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
            <button onClick={handleAddComment} className="text-2xl text-blue-600">
              <FiSend />
            </button>
          </div>

          {/* Comments */}
          <div className="mt-4 flex flex-col justify-between items-center">
            {comments.map((el, index) => (
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
