import { useContext, useState } from "react";
import Button from "../global/Button";
import PostItem from "./PostItem";
import Model from "../global/Model";
import { FiImage } from "react-icons/fi";
import ImageUploadIcon from "../global/ImageUploadIcon";
import { postContext } from "../../context/PostContext";
import { userprofileassets } from "../../assets/images/user Profile/userprofileAssets";
import { SetupContext } from "../../context/SetupContext";
import { convertBlobUrlToBase64 } from "../../Api_Calls/SetupServices";
import { setup } from "../../assets/images/setup/setupAssets";

function PostsList({ userPosts = null }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData,Pic } = useContext(SetupContext)
  const IntialFormdata = {
    userId: "",
    id: Date.now(),
    name: "Peter Charles",
    role: "Call Center",
    avatar: null,
    isFollowing: true,
    text: "",
    image: null,
    actions: { like: true, comment: true, views: true },
    comments: []
  }
  const [form, setForm] = useState(IntialFormdata)
  const { posts, addPost } = useContext(postContext)
  const AllPostsORuser = userPosts ? userPosts : posts
  const handleAddPost =async () => {
    const base64Img = await convertBlobUrlToBase64(Pic);
    const PostData = {
      ...form,
      userId: userData.applicationUserId,
      name: userData.firstName + ' ' + userData.lastName,
      role: userData.desiredJobTitle,
      avatar:Pic?base64Img:setup.defImg,
    }
    addPost(PostData)
    setIsModalOpen(false)
    setForm(IntialFormdata)
  }

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <img
          className="w-16 h-16 rounded-full"
          src={Pic?Pic:setup.defImg}
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
      {AllPostsORuser.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}

      {isModalOpen && (
        <Model onClose={() => setIsModalOpen(false)}>
          <h3 className="text-xl font-semibold mb-4 pb-4 border-b text-center">Share Post</h3>
          <textarea
            rows={8}
            className="min-h-auto w-full border-none p-2 rounded placeholder:text-zinc-400"
            placeholder="What do you think?"
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
          {
            form?.image &&
            <img
              src={form.image}
              alt="preview"
              className="h-full object-contain rounded-xl m-auto p-1"
            />
          }
          <div className="mt-4 flex justify-between items-center">
            <ImageUploadIcon onFileChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setForm({ ...form, image: reader.result }); // ⬅️ base64 string
                };
                reader.readAsDataURL(file);
              }

              <FiImage size={22} className="cursor-pointer" />
            }} />
            <button
              onClick={handleAddPost}
              className="text-white px-10 py-3 rounded-[18px] bg-primry_purble"
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










/* const post = [
  {
    name: "Sally Ahmed",
    role: "UI/UX designer",
    avatar:userprofileassets.profileImage,
    isFollowing: true,
    text: "Laboriosam corrupti odit neque aperiam...",
    image: null,
    actions: { like: true, comment: true, views: true }
  },
  {
    name: "Waleed Ali",
    role: "UI/UX designer",
    avatar:userprofileassets.profileImage,
    isFollowing: false,
    text: "Today’s Interviews !",
    image: "interview_image.jpg",
    actions: { like: true, comment: true, views: true }
  },
  {
    name: "Peter Charles",
    role: "Call Center",
    avatar:userprofileassets.profileImage,
    isFollowing: true,
    text: "Debitis ab vel illo hic nisi quia suscipit esse...",
    image: null,
    actions: { like: true, comment: true, views: true }
  }
]; */