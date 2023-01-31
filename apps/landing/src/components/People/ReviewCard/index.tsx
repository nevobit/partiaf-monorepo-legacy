import Image from "next/image";
import User from "public/images/user.jpg";
import StarIcon from "public/icons/starRatingIcon.svg";

export default function ReviewCard(): JSX.Element {
  return (
    <div className="card h-auto min-h-max justify-center p-4 w-full md:w-4/5 max-w-[1232px] 2xl:w-[88%]  bg-accent 2xl:p-8">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={User}
          alt="user avatar"
          className="rounded-full w-20 h-20 2xl:h-24 2xl:w-24"
        />
        <div className="flex flex-col justify-center  gap-4">
          <p className="font-bold text-[32px] 2xl:text-5xl">Mondolt</p>
          <p className="text-[17px] text-base-300">Usuario partiaf</p>
        </div>
      </div>

      <div className="card-body py-2 px-0 items-center text-center">
        <p className="text-2xl text-base-300 text-left  overflow-hidden 2xl:text-[34px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-around w-48 mt-6">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
