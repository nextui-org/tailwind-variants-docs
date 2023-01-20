import { tv } from "tailwind-variants";

export const button = tv({
  base: "px-4 py-1.5 rounded-full hover:opacity-80",
  variants: {
    color: {
      primary: "bg-primary text-white",
      neutral: "bg-neutral text-black dark:text-white",
    },
    flat: {
      true: "bg-transparent",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      color: "primary",
      flat: true,
      class: "bg-primary/40",
    },
    {
      color: "neutral",
      flat: true,
      class: "bg-neutral/20",
    },
  ],
});

export const box = tv({
  base: "flex flex-col",
  variants: {
    center: {
      true: "items-center",
    },
    row: {
      true: "flex-row justify-center",
    },
  },
  defaultVariants: {
    center: true,
  },
});

export const badge = tv({
  base: [
    box({ center: true, row: true }),
    ...[
      "text-slate-700",
      "dark:text-slate-400",
      "font-sans",
      "font-medium",
      "text-xs",
      "mx-2",
      "px-2",
      "py-1",
      "rounded-full",
      "bg-neutral/20",
    ],
  ],
});

export const card = tv({
  base: [
    "flex",
    "flex-col",
    "rounded-lg",
    "shadow-lg",
    "bg-white",
    "dark:bg-neutral/900",
    "overflow-hidden",
    "dark:bg-neutral/10",
  ],
});

export const tvs = {
  button,
  badge,
  box,
  card,
};
