import React from "react";
import Image from "next/image";
import { tv } from "tailwind-variants";

interface SlotsExampleProps {}

const card = tv({
  slots: {
    base: "md:flex rounded-xl p-8 md:p-0 ",
    avatar:
      "w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg",
    wrapper: "flex-1 pt-6 md:p-8 text-center md:text-left space-y-4",
    description: "text-md font-medium",
    infoWrapper: "font-medium",
    name: "text-sm",
    role: "text-sm",
  },
  variants: {
    color: {
      primary: {
        base: "bg-blue-100 dark:bg-blue-900",
        name: "text-blue-500 dark:text-blue-400",
        role: "text-blue-700 dark:text-blue-500",
      },
      secondary: {
        base: "bg-purple-100 dark:bg-purple-900",
        name: "text-purple-500 dark:text-purple-400",
        role: "text-purple-700 dark:text-purple-500",
      },
      warning: {
        base: "bg-yellow-100 dark:bg-yellow-900",
        name: "text-yellow-500 dark:text-yellow-400",
        role: "text-yellow-700 dark:text-yellow-500",
      },
    },
  },
});

const SlotsExample: React.FC<SlotsExampleProps> = () => {
  // FIXME: For some reason on resposinve variants with slots Tailwind is not generating the correct classes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { base, avatar, wrapper, description, infoWrapper, name, role } = card({
    color: {
      initial: "primary",
      sm: "secondary",
      md: "warning",
    },
  });

  return (
    <figure className="md:flex rounded-xl p-8 md:p-0 sm:bg-purple-100 sm:dark:bg-purple-900 md:bg-yellow-100 md:dark:bg-yellow-900 bg-blue-100 dark:bg-blue-900">
      <Image
        alt=""
        className={avatar()}
        height="512"
        src="/intro-avatar.png"
        width="384"
      />
      <div className={wrapper()}>
        <blockquote>
          <p className={description()}>
            “Tailwind variants allows you to reduce repeated code in your
            project and make it more readable. They fixed the headache of
            building a design system with TailwindCSS.”
          </p>
        </blockquote>
        <figcaption className={infoWrapper()}>
          <div className="text-sm sm:text-purple-500 sm:dark:text-purple-400 md:text-yellow-500 md:dark:text-yellow-400 text-blue-500 dark:text-blue-400">
            Zoey Lang
          </div>
          <div className="text-sm sm:text-purple-700 sm:dark:text-purple-500 md:text-yellow-700 md:dark:text-yellow-500 text-blue-700 dark:text-blue-500">
            Full-stack developer, NextUI
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default SlotsExample;
