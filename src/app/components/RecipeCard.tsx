"use client";
import React, { useState } from "react";
import Image from "next/image";
import LikeButton from "./LikeButton";

interface RecipeCard {
  title: string;
  photoUrl: string;
  cookTime: number;
}

function RecipeCard(props: RecipeCard) {
  const [isLiked, setisLiked] = useState<boolean>(false);
  const { title, photoUrl, cookTime } = props;
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={photoUrl}
        alt={title}
        width={500}
        height={500}
        loading="lazy"
      />
      <div>{cookTime}</div>
      <LikeButton isLiked={isLiked} setIsLiked={setisLiked} />
    </div>
  );
}

export default RecipeCard;
