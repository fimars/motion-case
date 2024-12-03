import { GridPattern } from "~/magic-ui/grid-pattern";
import type { Route } from "./+types/mask1";
import { motion, useCycle } from "motion/react";
import clsx from "clsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Motion Case" },
    { name: "description", content: "A mask with clip-path" },
  ];
}

export default function Home() {
  let [mode, cycleMode] = useCycle(true, false);

  return (
    <div className="flex flex-col items-start gap-4 ">
      <motion.button
        className="p-2 px-4 bg-black text-white"
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          cycleMode();
        }}
      >
        open.
      </motion.button>
      <Mask isVisible={mode} />
    </div>
  );
}

let list = {
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0% round 0)",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  hidden: {
    clipPath: "inset(10% 50% 90% 50% round 0)",
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

let variants = {
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
  }),
  hidden: { opacity: 0, y: -20 },
};
function Mask({ isVisible }: { isVisible: boolean }) {
  let liclsx = "p-2 px-4 bg-white min-w-36";
  let items = [1, 2, 3, 4];

  return (
    <motion.nav initial={false} animate={isVisible ? "visible" : "hidden"}>
      <motion.ul
        key="modal"
        className="p-1 drop-shadow-md bg-black flex flex-col gap-0.5 min-w-36"
        variants={list}
      >
        {items.map((item, index) => (
          <motion.li className={liclsx} custom={index} variants={variants}>
            Item {index + 1}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
