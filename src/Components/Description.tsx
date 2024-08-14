import React from "react";

enum DetailType {
  title = "title",
  subtitle = "subtitle",
  description = "description",
}

interface Detail {
  type: DetailType;
  content: string;
}

const details: Detail[] = [
  {
    type: DetailType.title,
    content: `Hi, I'm Catalysto`,
  },
  {
    type: DetailType.subtitle,
    content: "Frontend Engineer",
  },
  {
    type: DetailType.description,
    content: "Programming with React, Next.js and Typescript",
  },
];

const getClass = (type: DetailType) => {
  switch (type) {
    case DetailType.title:
      return "font-sora text-4xl font-bold tracking-wide md:text-5xl animate-fade-up duration-300";
    case DetailType.subtitle:
      return "text-xs font-light tracking-wide md:text-sm duration-300";
    case DetailType.description:
      return "text-sm font-normal tracking-wide md:text-base animate-fade-in duration-300";
  }
};

const Description: React.FC = () => {
  return (
    <div className="grid grid-cols-1 place-content-center place-items-center gap-5">
      {details.map(detail => (
        <p className={getClass(detail.type)} key={detail.content}>
          {detail.content}
        </p>
      ))}
    </div>
  );
};

export default Description;
