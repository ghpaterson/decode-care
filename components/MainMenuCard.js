import Link from "next/link";
import Image from "next/image";

export default function MainMenuCard({
  imageSrc,
  title,
  description,
  linkHref,
  cardColor,
  imageWidth,
  buttonColor,
  filter,
}) {
  return (
    <main>
      <section className={`${filter}`}>
        <div className="shadow-md min-w-full py-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className={`h-60 w-60 ${cardColor} flex justify-center`}>
              <Image src={imageSrc} width={imageWidth} alt="reading images" />
            </div>
            <div className="flex flex-col gap-4 px-6 py-4 lg:py-0 items-center lg:w-1/2 lg:items-start">
              <h1 className="lg:text-4xl">{title}</h1>
              <p className="text-sm lg:text-xl">{description}</p>
            </div>
            <div className="flex justify-end items-end lg:h-60 lg:w-96 lg:px-6">
              <Link href={linkHref}>
                <button
                  className={`${buttonColor} rounded-full text-xl lg:text-2xl text-white px-4 py-2`}
                >
                  Play
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
