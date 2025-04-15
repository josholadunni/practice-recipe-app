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
    <div className="w-48 p-2 shadow-md">
      <div className="h-20 flex flex-col justify-end">
        <h2 className="text-lg leading-6 font-bold text-center">{title}</h2>
      </div>
      <div className="bg-white">
        <div className="relative size-48 mt-4">
          <Image src={photoUrl} alt={title} loading="lazy" fill={true} />
        </div>
        <div>{cookTime}</div>
        <LikeButton isLiked={isLiked} setIsLiked={setisLiked} />
      </div>
    </div>
  );
}

export default RecipeCard;
