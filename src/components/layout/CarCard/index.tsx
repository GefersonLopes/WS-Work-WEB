import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { currency } from "../../../utils/generics/formatMoneyBr";
import Image from "../../ui/Img";

type CarCardProps = {
  id: number | string;
  name: string;
  nameBrand: string;
  year: number;
  price: number;
  image: string;
  badge?: string;
  to?: string;
  className?: string;
};

function Badge({ label }: { label: string }) {
  const isHibrido =
    label.toLowerCase().includes("híbrido") ||
    label.toLowerCase().includes("hibrido");

  const isEletrico = label.toLowerCase().includes("eletrico");

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-2 text-xs font-bold",
        "bg-gray-100 text-gray-700",
        isHibrido && "!bg-[#1D85FF] text-white",
        isEletrico && "!bg-[#43cf20] text-white",
      )}
    >
      {label.toUpperCase()}
    </span>
  );
}

export default function CarCard({
  id,
  name,
  nameBrand,
  year,
  price,
  image,
  badge,
  to,
  className,
}: CarCardProps) {
  const Wrapper: React.ElementType = to ? Link : "div";
  const wrapperProps = to ? { to } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={clsx(
        "group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-xs sm:text-sm font-extrabold text-dark leading-tight line-clamp-2">
          {nameBrand} {name}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-gray-500 font-semibold">
          {year}
        </p>

        <div className="mt-3">
          <span className="mt-1 text-xs text-gray-500 font-semibold">R$</span>
          <span className="ml-1 text-lg sm:text-xl font-extrabold tracking-tight">
            {currency.format(price).replace("R$", "").trim()}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div
          aria-hidden
          className="grid place-items-center h-9 w-9 text-gray-500"
        >
          <FaChevronRight />
        </div>

        <div className="flex items-center gap-2">
          <Badge key={`${id}-${badge}`} label={badge || ""} />
        </div>
      </div>
    </Wrapper>
  );
}
