import { useState } from "react";
import Button from "../global/Button";
import PostItem from "./PostItem";
import Model from "../global/Model";
import { FiImage } from "react-icons/fi";
import ImageUploadIcon from "../global/ImageUploadIcon";
function PostsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts = [
    {
      name: "Sally Ahmed",
      role: "UI/UX designer",
      isFollowing: true,
      text: "Laboriosam corrupti odit neque aperiam...",
      image: null,
      actions: { like: true, comment: true, views: true }
    },
    {
      name: "Waleed Ali",
      role: "UI/UX designer",
      isFollowing: false,
      text: "Today’s Interviews !",
      image: "interview_image.jpg",
      actions: { like: true, comment: true, views: true }
    },
    {
      name: "Peter Charles",
      role: "Call Center",
      isFollowing: true,
      text: "Debitis ab vel illo hic nisi quia suscipit esse...",
      image: null,
      actions: { like: true, comment: true, views: true }
    }
  ];

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 border rounded-3xl p-2 mb-3"
          
        />
        <Button btn_text="Share Post" width="15%" onHandleClick={() => setIsModalOpen(true)} />
      </div>

      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}

      {isModalOpen && (
        <Model onClose={() => setIsModalOpen(false)}>
          <h3 className="text-xl font-semibold mb-4 pb-4 border-b text-center">Share Post</h3>
          <textarea
            rows={10}
            className="w-full border-none p-2 rounded placeholder:text-zinc-400"
            placeholder="What do you think?"
          />
          <div className="mt-4 flex justify-between items-center">
            <ImageUploadIcon onFileChange={(e) => {
              const file = e.target.files[0];
              console.log("Selected image:", file);
              <FiImage size={22} className="cursor-pointer" />
            }} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-[#66666E] px-10 py-3 rounded-[18px] bg-[#E3E3E5]"
            >
              Share
            </button>
          </div>
        </Model>
      )}
    </>
  );
}

export default PostsList;
