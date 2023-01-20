import React, { useState } from "react";
import { CopyIcon, CheckIcon, Tooltip } from "@components";

interface SnippetProps {}

const Snippet: React.FC<SnippetProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("npm install tailwind-variants");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div className="flex items-center justify-between bg-neutral/20 w-[420px] h-10 font-mono text-sm px-6 py-2 rounded-full text-black">
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
