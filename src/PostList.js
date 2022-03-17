import React from "react";
import Post from "./Post";

function PostList({ posts, deletePost }) {
	return (
		<div className="post-list">
			<ul style={{ padding: "0" }}>
				{posts.map((post, index) => (
					<Post deletePost={() => deletePost(index)} key="index" post={post} />
				))}
			</ul>
		</div>
	);
}

export default PostList;
