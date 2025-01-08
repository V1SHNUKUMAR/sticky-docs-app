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
      className="relative pt-4 h-[250px] w-[200px] overflow-hidden rounded-3xl bg-white flex-shrink-0 drop-shadow-lg flex flex-col gap-4 md:h-[300px] md:w-[250px]"
    >
      <div className="px-5">
        <FileText size={20} />
      </div>
      <div className="px-5 flex-1 flex-shrink-0 overflow-auto">
        <p className="text-xs font-medium md:text-[13px]">
          {cardData?.description}
        </p>
      </div>
      <div
        className={`px-5 text-[13px] flex items-center gap-3 justify-between md:text-sm ${
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
            className={
              "p-4 w-full text-[13px] font-medium text-white duration-200 hover:brightness-90 md:text-sm "
            }
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
