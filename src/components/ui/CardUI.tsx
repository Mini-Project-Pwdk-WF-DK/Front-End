"use client";
import { cn } from "@/lib/utils";

interface CardUIProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
}

export function CardUI({
  title,
  description,
  imageUrl,
  hoverImageUrl,
}: CardUIProps) {
  return (
    <div className="max-w-xs w-full group relative">
      {/* Card Container */}
      <div
        className={cn(
          "relative h-96 w-full rounded-md shadow-xl overflow-hidden",
          "cursor-pointer flex flex-col justify-end p-4",
          "bg-cover bg-center border border-transparent dark:border-neutral-800",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* Background Change on Hover */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 opacity-0",
            "group-hover:opacity-100 group-hover:bg-cover group-hover:bg-center"
          )}
          style={{
            backgroundImage: `url(${hoverImageUrl})`,
          }}
        />

        {/* Hover Text */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center opacity-0",
            "group-hover:opacity-100 transition-opacity duration-500"
          )}
        >
          <span className="text-white text-xl font-bold bg-slate-700 w-full h-full flex justify-center transition-opacity duration-500 items-center bg-opacity-70">
            View Event
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-4 text-center">
        <h1 className="font-bold text-lg text-gray-50">{title}</h1>
        <p className="font-normal text-base text-gray-300 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}