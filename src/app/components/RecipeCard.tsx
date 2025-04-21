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

  const formattedCookTime = () => {
    if (cookTime) {
      if (cookTime >= 60) {
        const hours = Math.floor((cookTime / 60) * 10) / 10;
        return `${hours} hours`;
      } else {
        return `${cookTime} mins`;
      }
    }
  };

  return (
    <div className="w-48 border-[#d3d7dd] border-1 rounded-lg overflow-hidden">
      <div className="relative size-48">
        <Image
          src={photoUrl}
          alt={title}
          loading="lazy"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="bg-white px-4 pb-2 font-sans">
        <div className="h-30 flex flex-col pt-3">
          <h2 className="text-lg leading-6 font-sans text-center pb-4">
            {title}
          </h2>
        </div>
        <div>{formattedCookTime()}</div>
        <LikeButton isLiked={isLiked} setIsLiked={setisLiked} />
      </div>
    </div>
  );
}

export default RecipeCard;
