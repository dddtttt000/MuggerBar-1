import React from "react";

function Comment({ comment }) {
  return (
    <div className="r-box">
      <div className="r-name">{comment.user.user_nickname}</div>
      <div>{comment.comment_content}</div> <hr></hr>
    </div>
  );
}

export default Comment;
