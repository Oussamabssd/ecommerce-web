import picture1 from "../../assets/picture1.png";
import picture2 from "../../assets/picture2.png";
import picture3 from "../../assets/picture3.png";

export default function Hero() {
  const ImageList = [
    {
      id: 1,
      img: picture2,
      title: "Upto 50% off an all Men's Wear",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      img: picture1,
      title: "Upto 70% off an all products sale",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      img: picture3,
      title: "Upto 30% off an all Women's Wear",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div
      className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 
    flex justify-center items-center duration-200"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-[#F8DCA1] rounded-3xl rotate-45 absolute right-0 
      -top-1/2"
      ></div>
      {/* herro section */}
      <div></div>
    </div>
  );
}
