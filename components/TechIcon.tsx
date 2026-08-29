"use client";

import { useState } from "react";

const ICON_COLORS: Record<string, string> = {
  typescript: "3178C6",
  javascript: "F7DF1E",
  python: "3776AB",
  mysql: "4479A1",
  html5: "E34F26",
  css3: "1572B6",
  react: "61DAFB",
  nextdotjs: "000000",
  mui: "007FFF",
  tailwindcss: "06B6D4",
  nodedotjs: "339933",
  express: "000000",
  postgresql: "4169E1",
  mongodb: "47A248",
  openapiinitiative: "6BA539",
  graphql: "E10098",
  redux: "764ABC",
  reactquery: "FF4154",
  openai: "412991",
  huggingface: "FFD21E",
  langchain: "1C3C3C",
  googlegemini: "8E75B2",
  google: "4285F4",
  cursor: "000000",
  githubcopilot: "000000",
  githubactions: "2088FF",
  docker: "2496ED",
  vercel: "000000",
  figma: "F24E1E",
  w3c: "005A9C",
  lighthouse: "F44B21",
};

type TechIconProps = {
  slug: string;
  label: string;
  size?: number;
};

export default function TechIcon({ slug, label, size = 16 }: TechIconProps) {
  const [failed, setFailed] = useState(false);
  const color = ICON_COLORS[slug] ?? "78766E";
  const src = `https://cdn.simpleicons.org/${slug}/${color}`;

  if (failed) {
    return (
      <span
        aria-hidden
        title={label}
        className="inline-flex shrink-0 items-center justify-center rounded-[3px] bg-ink/10 font-mono text-[8px] font-semibold leading-none text-ink dark:bg-paper/15 dark:text-paper"
        style={{ width: size, height: size }}
      >
        {label.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0 object-contain dark:brightness-110"
      title={label}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
