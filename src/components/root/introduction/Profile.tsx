import React from "react";
import { TextMark } from "@/components/root/introduction/format/mark/TextMark";
import Image from "next/image";
interface ProfileProps {
  name: string;
  nicknames?: string[];
  description: React.ReactNode;
  avatarLink: string;
  avatarAlt: string;
}
export function Profile({
  name,
  nicknames,
  description,
  avatarLink,
  avatarAlt,
}: ProfileProps) {
  let nicks;
  if (nicknames) {
    nicks = nicknames.map((nick) => `${nick}, `);
    const lastElement = nicks[nicks.length - 1];
    nicks[nicks.length - 1] = lastElement.slice(0, lastElement.length - 2);
  } else {
    nicks = null;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Image
        width={96}
        height={96}
        alt={avatarAlt}
        src={avatarLink}
        className="w-24 rounded-2xl"
      />
      <h1 className="m-0 text-2xl font-bold">{name}</h1>
      {nicks ? (
        <span className="text-white/75">
          <TextMark>aka</TextMark> {nicks}
        </span>
      ) : null}
      {description}
    </div>
  );
}
