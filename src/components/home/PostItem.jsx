import Button from "../global/Button";

const PostItem = ({ post }) => {
  return (
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
        <button className="hover:text-black">💬 Comment</button>
        <button className="hover:text-black">👁️ Views</button>
      </div>
    </div>
  );
};

export default PostItem;
