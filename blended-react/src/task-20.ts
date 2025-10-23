import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
  const posts = await fetchPosts();
  const firstThree = posts.slice(0, 3);
  firstThree.forEach((posts) => {
    console.log(posts.title, posts.body);
  });
};

logThreePosts();
