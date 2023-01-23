import React from "react";
import { tvs, LinkIcon, Snippet, Logo } from "@components";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className={tvs.box({ class: "my-20 gap-6" })}>
      <div className={tvs.box()}>
        <Logo height={120} />
        <h1 className="font-extrabold mt-4 text-4xl md:text-5xl text-black dark:text-white">
          tailwind-variants
        </h1>
        <p className="mt-2 text-center font-medium text-xl sm:text-lg">
          The power of Tailwind combined with a first-class variant API.
        </p>
      </div>

      <div className={tvs.box({ row: true, class: "gap-2" })}>
        <a className={tvs.button()} href="/docs">
          Documentation
        </a>
        <a
          className={tvs.button({
            flat: true,
            color: "neutral",
          })}
          href="https://github.com/nextui-org/tailwind-variants"
          rel="noopener noreferrer"
          target="_blank"
          title="github homepage"
        >
          <span className={tvs.box({ row: true })}>
            Github
            <LinkIcon className="ml-1" />
          </span>
        </a>
      </div>
      <Snippet />
    </section>
  );
};

export default Hero;
