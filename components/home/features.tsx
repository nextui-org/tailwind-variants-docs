import React from "react";
import FlashIcon from "@components/icons/flash";
import CodeDocumentIcon from "@components/icons/code-document";
import MagicIcon from "@components/icons/magic";
import ServerIcon from "@components/icons/server";
import { card } from "@components/elements";

interface FeaturesProps {}

export const features = [
  {
    name: "Fast",
    description:
      "Tailwind Variants is zero-runtime and tree-shakeable. It only takes care of the classNames generation.",
    icon: <FlashIcon className="stroke-black dark:stroke-white" />,
  },
  {
    name: "Fully typed",
    description:
      "Auto-completion and type-safety are provided by TypeScript. No need to worry about typos.",
    icon: <CodeDocumentIcon className="stroke-black dark:stroke-white" />,
  },
  {
    name: "Safe",
    description:
      "Forget about TailwindCSS style conflicts. Tailwind Variants efficiently merges conflicting styles.",
    icon: <MagicIcon className="stroke-black dark:stroke-white" />,
  },
  {
    name: "Framework agnostic",
    description:
      "Tailwind Variants is a utility library that works with any framework. It's not tied to React.",
    icon: <ServerIcon className="stroke-black dark:stroke-white" />,
  },
];

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="my-10 gap-6 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={card({ class: "gap-2 p-4" })}>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral/10 dark:bg-white/10">
                {feature.icon}
              </div>
              <h3 className="font-bold mx-3 text-lg text-black dark:text-white">
                {feature.name}
              </h3>
            </div>
            <p className="pl-1 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
