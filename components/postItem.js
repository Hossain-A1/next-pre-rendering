import Link from "next/link";

const PostItem = ({ post }) => {

  return (
    <Link href={`/posts/${post.id}`} className="mt-3">
      <h2>
        {post.id} - {post.title}
      </h2>
  
    </Link>
  );
  
};

export default PostItem;
