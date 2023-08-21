import Image, { StaticImageData } from "next/image";

interface IDevCardProps {
  imgURL: StaticImageData;
  devName: string;
  position: string;
  classNames?: any;
}

const DevCard = (props: IDevCardProps) => {
  const { imgURL, devName, position, classNames } = props;

  return (
    <div
      className={`absolute bg-white p-2 shadow-2xl rounded-lg flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300 ${classNames}`}
    >
      <div className="w-[42px] h-[42px] rounded-full">
        <Image
          src={imgURL}
          width={38}
          height={38}
          alt="Tim"
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      <div>
        <p className="font-semibold">{devName}</p>
        <p>
          <span className="text-xs font-medium">{position}</span>
        </p>
      </div>
    </div>
  );
};

export default DevCard;
