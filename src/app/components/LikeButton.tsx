import React from "react";

interface LikeButton {
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
}

function LikeButton(props: LikeButton) {
  const { isLiked, setIsLiked } = props;
  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className={`${isLiked ? "bg-red-500" : "bg-white"}`}
    >
      Like
    </div>
  );
}

export default LikeButton;
