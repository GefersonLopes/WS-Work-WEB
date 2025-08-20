import React, { useEffect, useMemo, useRef, useState } from "react";

import Spinner from "../Spinner";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholder?: React.ReactNode;
  aspectRatio?: string;
  imgClassName?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc = "/assets/img/placeholder.png",
  placeholder,
  aspectRatio,
  className,
  imgClassName,
  loading = "lazy",
  decoding = "async",
  sizes,
  srcSet,
  onLoad,
  onError,
  ...rest
}) => {
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    "idle",
  );
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const wrapperStyle = useMemo<React.CSSProperties>(() => {
    if (!aspectRatio) return {};

    const [w, h] = aspectRatio.split("/").map(Number);
    return { aspectRatio: `${w} / ${h}` };
  }, [aspectRatio]);

  useEffect(() => {
    let canceled = false;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");
    setCurrentSrc(null);

    const preload = (source: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        if (srcSet) img.srcset = srcSet;
        if (sizes) img.sizes = sizes;
        img.src = source;

        const finish = () => {
          if (canceled || controller.signal.aborted) return;
          resolve();
        };

        if ("decode" in img) {
          img.decode().then(finish).catch(reject);
        } else {
          (img as HTMLImageElement).onload = finish;
          (img as HTMLImageElement).onerror = reject;
        }
      });

    preload(src)
      .then(() => {
        if (controller.signal.aborted || canceled) return;
        setCurrentSrc(src);
        setStatus("loaded");
      })
      .catch(async () => {
        if (controller.signal.aborted || canceled) return;
        if (fallbackSrc && fallbackSrc !== src) {
          try {
            await preload(fallbackSrc);
            if (controller.signal.aborted || canceled) return;
            setCurrentSrc(fallbackSrc);
            setStatus("loaded");
          } catch {
            setStatus("error");
          }
        } else {
          setStatus("error");
        }
      });

    return () => {
      canceled = true;
      controller.abort();
    };
  }, [src, srcSet, sizes, fallbackSrc]);

  const showImg = status === "loaded" && currentSrc;

  return (
    <div
      className={className}
      style={{
        ...wrapperStyle,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!showImg && (
        <div className="w-full h-full min-h-[120px] bg-gray-100 flex items-center justify-center">
          {placeholder ?? <Spinner />}
        </div>
      )}

      {showImg && (
        <img
          src={currentSrc!}
          alt={alt}
          loading={loading}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          decoding={decoding as any}
          sizes={sizes}
          srcSet={srcSet}
          className={imgClassName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: showImg ? "block" : "none",
          }}
          onLoad={(e) => onLoad?.(e)}
          onError={(e) => onError?.(e)}
          {...rest}
        />
      )}
    </div>
  );
};

export default Image;
