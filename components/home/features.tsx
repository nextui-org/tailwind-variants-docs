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
      "Tailwind-variants is zero-runtime and tree-shakeable. It only takes care of the classNames generation.",
    icon: <FlashIcon fill="#0072f5" />,
  },
  {
    name: "Fully typed",
    description:
      "Auto-completion and type-safety are provided by TypeScript. No need to worry about typos.",
    icon: <CodeDocumentIcon fill="#0072f5" />,
  },
  {
    name: "Safe",
    description:
      "Forget about TailwindCSS style conflicts. Tailwind-variants efficiently merges conflicting styles.",
    icon: <MagicIcon fill="#0072f5" />,
  },
  {
    name: "Framework agnostic",
    description:
      "Tailwind-variants is a utility library that works with any framework. It's not tied to React.",
    icon: <ServerIcon fill="#0072f5" />,
  },
];

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="my-10 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={card({ class: "gap-2 p-4" })}>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/10">
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
