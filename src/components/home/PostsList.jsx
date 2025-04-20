import Button from "../global/Button";
import PostItem from "./PostItem";

function PostsList() {
    const posts = [
        {
          name: "Sally Ahmed",
          role: "UI/UX designer",
          isFollowing: true,
          text: "Laboriosam corrupti odit neque aperiam. Explicabo laudantium sit. Dolores rerum numquam deleniti voluptatem ea dolorem. Neque et quibusdam possimus saepe qui amet vel quae facere. Quod cupiditate ad esse. Quibusdam sit voluptates. Omnis doloremque distinctio et vel recusandae officia autem voluptatibus. Ut porro tenetur omnis. Esse eos quia quidem est non voluptatem exercitationem rerum veritatis. Aspernatur dolorem animi sunt quidem et nisi impedit ut.",
          image: null,
          actions: {
            like: true,
            comment: true,
            views: true
          }
        },
        {
          name: "Waleed Ali",
          role: "UI/UX designer",
          isFollowing: false,
          text: "Today’s Interviews !",
          image: "interview_image.jpg", // Replace with actual image URL/path
          actions: {
            like: true,
            comment: true,
            views: true
          }
        },
        {
          name: "Peter Charles",
          role: "Call Center",
          isFollowing: true,
          text: "Debitis ab vel illo hic nisi quia suscipit esse. Impedit quas veritatis quod consequatur est saepe. Quo possimus. Blanditiis odit nobis commodi aut quibusdam molestiae repudiandae ad recusandae. Voluptate dicta et necessitatibus est neque rerum dicta. Sapiente quaerat sunt qui sed. Nisi in nulla rerum quod blanditiis sequi aperiam. Incidunt laboriosam et ut. Nihil id illum est. Est ut omnis molestiae vel. Voluptas fugit ducimus omnis reman inventore qui perferendis autem qui necessitatibus quaerat necessitatibus quo deleniti ipsa.",
          image: null,
          actions: {
            like: true,
            comment: true,
            views: true
          }
        }
      ];
      
    return (
        <>
            <div className="flex justify-between items-center gap-4">
                <img className="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="flex-1 border rounded-3xl p-2 mb-3"
                />     
                <Button btn_text="Share Post" width="15%" />           
            </div>
            <h2>Posts</h2>
            {posts.map((post, index)=>(
                <PostItem post={post} key={index} />
            ))}
        </>
    )
}

export default PostsList
