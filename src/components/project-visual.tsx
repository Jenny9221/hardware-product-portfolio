import Image from "next/image";
import type { CSSProperties } from "react";

export function ProjectVisual({ index, accent, label, image, imagePosition = "left center", imageRatio = "16 / 9" }: { index: string; accent: string; label: string; image?: string; imagePosition?: string; imageRatio?: string }) {
  return (
    <div className={`project-visual project-visual--${accent}`} aria-label={`${label} 项目图片`} role="img" style={{ "--project-image-ratio": imageRatio } as CSSProperties}>
      {image && <Image className="project-image" src={image} alt={label} fill sizes="100vw" quality={90} style={{ objectPosition: imagePosition }} />}
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit--one" />
      <div className="visual-orbit visual-orbit--two" />
      <div className="visual-core"><span>{index}</span></div>
    </div>
  );
}
