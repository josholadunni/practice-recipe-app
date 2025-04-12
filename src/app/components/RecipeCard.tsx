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
    <div className="w-48">
      <h2>{title}</h2>
      <div className="relative size-48">
        <Image src={photoUrl} alt={title} loading="lazy" fill={true} />
      </div>
      <div>{cookTime}</div>
      <LikeButton isLiked={isLiked} setIsLiked={setisLiked} />
    </div>
  );
}

export default RecipeCard;
