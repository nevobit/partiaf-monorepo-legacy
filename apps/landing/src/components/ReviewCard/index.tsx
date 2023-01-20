import Image from "next/legacy/image";
import User from "/public/images/user.jpg";

export default function ReviewCard() {
  return (
    <div className="card h-auto min-h-max justify-center px-7 py-10 w-full md:w-4/5 max-w-[800px]  bg-accent">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={User}
          alt="user avatar"
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col justify-center  gap-4">
          <p className="font-bold text-[32px]">Mondolt</p>
          <p className="text-[17px] text-base-300">Usuario partiaf</p>
        </div>
      </div>

      <div className="card-body items-center text-center">
        <p className="text-2xl text-base-300 text-left  overflow-hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-around w-48 mt-9">
          <Image
            src="/icons/starRatingIcon.svg"
            alt="star icon"
            width={31}
            height={29}
          />
          <Image
            src="/icons/starRatingIcon.svg"
            alt="star icon"
            width={31}
            height={29}
          />
          <Image
            src="/icons/starRatingIcon.svg"
            alt="star icon"
            width={31}
            height={29}
          />
          <Image
            src="/icons/starRatingIcon.svg"
            alt="star icon"
            width={31}
            height={29}
          />
          <Image
            src="/icons/starRatingIcon.svg"
            alt="star icon"
            width={31}
            height={29}
          />
        </div>
      </div>
    </div>
  );
}
