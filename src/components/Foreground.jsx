import { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const foregroundRef = useRef(null);

  const data = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit",
      fileSize: "0.9 Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "#1f6fff" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9 Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit",
      fileSize: "0.9 Mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "#1f6fff" },
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit Vitae velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit Vitae velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit",
      fileSize: "0.9 Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  const [topMostCardId, setTopMostCardId] = useState(null);

  return (
    <div
      ref={foregroundRef}
      className="h-full w-full fixed top-0 left-0 p-7 flex gap-5 flex-wrap"
    >
      {data?.map((el, i) => (
        <Card
          key={i}
          id={i}
          constraintsRef={foregroundRef}
          cardData={el}
          topMostCardId={topMostCardId}
          setTopMostCardId={setTopMostCardId}
        />
      ))}
    </div>
  );
}

export default Foreground;
