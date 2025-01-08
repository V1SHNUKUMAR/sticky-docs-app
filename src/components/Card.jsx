import { motion } from "framer-motion";
import { CircleArrowDown, FileText } from "lucide-react";
import { useState } from "react";

function Card(props) {
  const { constraintsRef, cardData } = props;

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileDrag={{ scale: 0.9, zIndex: 999, cursor: "grab" }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 30, bounceDamping: 20 }}
      className="relative pt-4 h-[300px] w-[250px] overflow-hidden rounded-3xl bg-white flex-shrink-0 drop-shadow-lg flex flex-col gap-4"
    >
      <div className="px-5">
        <FileText size={20} />
      </div>
      <div className="px-5 flex-1 flex-shrink-0 overflow-auto">
        <p className="text-[13px] font-medium">{cardData?.description}</p>
      </div>
      <div
        className={`px-5 text-sm flex items-center gap-3 justify-between ${
          !cardData.close ? "pb-4" : ""
        }`}
      >
        <p>{cardData?.fileSize}</p>
        <div className="cursor-pointer">
          <CircleArrowDown size={20} />
        </div>
      </div>
      {cardData.close && (
        <div>
          <button
            className={`p-4 w-full text-sm font-medium text-white duration-200 hover:brightness-90`}
            style={{
              backgroundColor: cardData?.tag?.tagColor,
            }}
          >
            {cardData?.tag?.tagTitle}
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
