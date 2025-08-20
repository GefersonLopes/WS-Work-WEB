import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

import Image from "../../ui/Img";
import { Link } from "../../ui/Link";

function FigureCard({
  id,
  type,
  name,
  image,
  path,
  className,
}: {
  id: number;
  name?: string;
  image: string;
  type?: string;
  path?: string;
  className?: string;
}) {
  return (
    <Link
      to={{
        pathname: id && !type ? `${path}/${id}` : path,
        search: type
          ? `?${new URLSearchParams({ search: type }).toString()}`
          : "",
      }}
      className={clsx(
        "group block overflow-hidden rounded-xl relative",
        className,
      )}
    >
      <figure>
        <Image
          src={image}
          alt={name || "Veículo"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 via-black/10 to-transparent text-white text-sm sm:text-base">
          <span className="flex items-center gap-2">
            {name}
            {name && (
              <FaChevronRight
                size={12}
                className="opacity-80 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            )}
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default FigureCard;
