import React from "react";

interface LikeButton {
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
}

function LikeButton(props: LikeButton) {
  const { isLiked, setIsLiked } = props;
  return (
    <>
      <svg
        onClick={() => setIsLiked(!isLiked)}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill={`${isLiked ? "red" : "white"}`}
        stroke={`${isLiked ? "red" : "black"}`}
        strokeWidth="1.15"
        className="bi bi-heart-fill"
        viewBox="-1 0 18 15"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </>
  );
}

export default LikeButton;
