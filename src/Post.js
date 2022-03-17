import React from "react";

function Post({ post, deletePost }) {
	return (
		<li className="post" style={{ listStyleType: "none" }}>
			{post.type === "Text" ? <p>{post.content}</p> : <img src={post.content} alt="post" />}
			<br />
			<button name="delete" onClick={deletePost}>
				Delete
			</button>
		</li>
	);
}

export default Post;
