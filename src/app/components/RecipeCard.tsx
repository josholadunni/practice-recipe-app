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
        let hours = null;
        hours = Math.floor((cookTime / 60) * 10) / 10;
        return `${hours} hours`;
      } else {
        return `${cookTime} mins`;
      }
    }
  };

  return (
    <div className="w-48 p-2">
      <div className="w-fit">
        <div className="relative size-48 mt-4">
          <Image
            src={photoUrl}
            alt={title}
            loading="lazy"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="bg-white px-4 pb-2">
          <div className="h-30 flex flex-col pt-3">
            <h2 className="text-lg leading-6 font-bold text-center">{title}</h2>
          </div>
          <div>{formattedCookTime()}</div>
          <LikeButton isLiked={isLiked} setIsLiked={setisLiked} />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
