const post = {post: "This is a post"};
const comments = [{content: "Good post"}, {content: "Thank you for the post"}];

const result = {
  ...post,
  comments: [...comments]
};

console.log(result);
