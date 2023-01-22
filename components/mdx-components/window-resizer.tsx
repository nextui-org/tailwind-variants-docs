import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { tv } from "tailwind-variants";

const resizer = tv({
  base: "flex items-center justify-end absolute right-[5px] z-10 w-auto xs:hidden h-full",
  slots: {
    main: "relative w-full",
    barWrapper:
      "cursor-ew-resize select-none absolute d-flex justify-center flex items-center justify-center w-[10px] h-full",
    barInner: "relative z-10",
    bar: "w-[6px] h-[40px] rounded-full bg-neutral/60 active:opacity-80",
    iframeWrapper: "border border-neutral/20 rounded-lg overflow-hidden",
    iframe:
      "w-full h-full border-none overflow-x-visible overflow-y-scroll z-10",
  },
  variants: {
    hasInitialWidth: {
      true: {
        base: "justify-start",
      },
    },
  },
});

interface WindowResizerProps {
  height?: string | number;
  minWidth?: number;
  iframeZoom?: number;
  iframeSrc?: string;
  iframeInitialWidth?: number;
  iframeTitle?: string;
}

const MIN_WIDTH = 200;

const WindowResizer: React.FC<WindowResizerProps> = (props) => {
  let constraintsResizerRef = React.useRef<HTMLDivElement>(null);
  let resizerRef = React.useRef<HTMLDivElement>(null);
  let iframeRef = React.useRef<HTMLIFrameElement>(null);

  const {
    iframeSrc,
    iframeTitle,
    height = "420px",
    iframeZoom = 1,
    iframeInitialWidth,
    minWidth = MIN_WIDTH,
  } = props;
  const hasInitialWidth = iframeInitialWidth !== undefined;

  const { main, base, barInner, barWrapper, bar, iframe, iframeWrapper } =
    resizer({ hasInitialWidth });

  const resizerX = useMotionValue(0);
  const browserWidth = useTransform(resizerX, (x) =>
    hasInitialWidth
      ? `calc(${iframeInitialWidth}px + ${x}px + 14px)`
      : `calc(100% + ${x}px - 14px)`
  );

  React.useEffect(() => {
    if (!resizerRef.current) {
      return;
    }
    resizerRef.current.onselectstart = () => false;
  }, []);

  const iframeStyles = `
  body {
    zoom: ${iframeZoom};
  }
  footer {
    display: none !important;
  }
  .nextra-sidebar-container {
    display: none !important;
  }
  `;

  // inject iframe styles
  React.useEffect(() => {
    if (!iframeRef.current) {
      return;
    }
    const iframeDocument = iframeRef.current.contentDocument;

    if (!iframeDocument) {
      return;
    }
    const style = iframeDocument.createElement("style");

    style.innerHTML = iframeStyles;
    iframeDocument.head.appendChild(style);
  }, []);

  return (
    <div className={main()} style={{ height }}>
      <motion.div
        className={iframeWrapper()}
        style={{
          width: browserWidth,
          height,
        }}
      >
        <motion.iframe
          ref={iframeRef}
          className={iframe()}
          src={iframeSrc}
          title={iframeTitle}
        />
      </motion.div>
      <div
        ref={constraintsResizerRef}
        className={base({
          className: "top-0 bottom-0 right-0",
        })}
        style={{
          width: `calc(100% - ${
            hasInitialWidth ? iframeInitialWidth : minWidth
          }px - 20px)`,
        }}
      >
        <motion.div
          ref={resizerRef}
          _dragX={resizerX}
          className={barWrapper()}
          drag="x"
          dragConstraints={constraintsResizerRef}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: resizerX, height }}
          onDragEnd={() => {
            document.documentElement.classList.remove("dragging-ew");
            iframeRef.current?.classList.remove("dragging-ew");
          }}
          onDragStart={() => {
            document.documentElement.classList.add("dragging-ew");
            iframeRef.current?.classList.add("dragging-ew");
          }}
        >
          <div className={barInner()}>
            <div className={bar()} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WindowResizer;
