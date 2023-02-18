import React, { useState } from "react";
import { CopyIcon, CheckIcon, Tooltip } from "@components";
import cn from "classnames";

interface Props {}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type SnippetProps = Props & NativeAttrs;

const Snippet: React.FC<SnippetProps> = ({ className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("npm install tailwind-variants");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-neutral/20 backdrop-blur md:w-[420px] w-[320px] h-10 font-mono md:text-sm text-xs px-6 py-2 rounded-full text-black",
        className
      )}
    >
      <div className="dark:text-white">$ npm install tailwind-variants</div>
      <Tooltip content="Copy to clipboard" delay={600} onClick={handleCopyCode}>
        {copied ? (
          <CheckIcon className="text-success" size={18} />
        ) : (
          <CopyIcon
            className="text-neutral-600 dark:text-neutral-400"
            size={18}
          />
        )}
      </Tooltip>
    </div>
  );
};

export default Snippet;
