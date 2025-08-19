import React, { lazy, Suspense } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Spinner from "../../ui/Spinner";

const Image = lazy(() => import("../../ui/Img"));

type HeroBannerProps = {
  titleLines?: [string, string, string];
  ctaLabel?: string;
  ctaHref?: string;
  imgSrc?: string;
  imgAlt?: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  titleLines = ["Qualidade,", "Segurança,", "Transparência."],
  ctaLabel = "Acessar estoque completo",
  ctaHref = "/estoque",
  imgSrc = "/public/assets/img/cars/banner/banner.png",
  imgAlt = "Carro esportivo cinza visto de lado",
}) => {
  return (
    <section
      aria-label="Banner principal"
      className="relative overflow-hidden bg-white max-w-[1700px] mx-auto"
    >
      <div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full ms-12 xl:ms-[15%]">
            <h1 className="leading-[0.95] font-extrabold tracking-tight text-gray-900 text-4xl [@media(min-width:429px)]:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl [@media(min-width:1630px)]:text-8xl">
              <span className="block">{titleLines[0]}</span>
              <span className="block">{titleLines[1]}</span>
              <span className="block">{titleLines[2]}</span>
            </h1>

            <div className="mt-4">
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs sm:text-lg px-6 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
              >
                {ctaLabel}
                <FaChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="w-full h-[360px] lg:h-[420px] xl:h-[460px] flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <div className="relative w-full">
              <div className="hidden md:block relative h-[360px] lg:h-[420px] xl:h-[460px]">
                <picture>
                  <source
                    media="(min-width: 1700px)"
                    srcSet="/public/assets/img/cars/banner/banner2.png"
                  />
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </picture>

                <div className="absolute right-24 left-24 bottom-2 h-6 rounded-full blur-2xl opacity-30 bg-black/30" />
              </div>

              <div className="md:hidden">
                <div className="relative h-[240px] sm:h-[280px]">
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="absolute mt-[-90px] object-contain object-right h-full md:h-[340px] w-full select-none pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute left-10 right-10 bottom-0 h-5 rounded-full blur-2xl opacity-30 bg-black/30" />
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_60%)]"
      />
    </section>
  );
};

export default HeroBanner;
