import { Component } from "react";

interface Props {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class DetailPost extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { id, title, content, author } = this.props;
    return (
      <div>
        <div>
          <b>Id: {id}</b>
        </div>
        <div>
          <b>Title: {title}</b>
        </div>
        <div>
          <b>Content: {content}</b>
        </div>
        <div>
          <b>Author: {author}</b>
        </div>
        <hr />
      </div>
    );
  }
}
