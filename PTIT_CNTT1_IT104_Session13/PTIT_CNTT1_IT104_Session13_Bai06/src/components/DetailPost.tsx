import { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  post: Post;
}

export default class DetailPost extends Component<Props> {
  render() {
    const { post } = this.props;
    return (
      <div>
        <div>
          <b>Id: {post.id}</b>{" "}
        </div>
        <div>
          <b>Title: {post.title}</b>{" "}
        </div>
        <div>
          <b>Content: {post.content}</b>{" "}
        </div>
        <div>
          <b>Author: {post.author}</b>{" "}
        </div>
        <hr />
      </div>
    );
  }
}
