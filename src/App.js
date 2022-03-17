import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
	const [posts, setPosts] = useState([]);

	const createPost = (newPost) => setPosts((currentPosts) => [newPost, ...currentPosts]);

	const deletePost = (idToDelete) =>
		setPosts((currentPosts) => currentPosts.filter((post, index) => index !== idToDelete));

	return (
		<div className="App">
			<PostCreate createPost={createPost} />
			<PostList posts={posts} deletePost={deletePost} />
		</div>
	);
}

export default App;
