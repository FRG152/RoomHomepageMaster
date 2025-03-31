interface SwiperButtonProps {
  eventLeft: () => void;
  eventRight: () => void;
}

export const SwiperButton = ({ eventLeft, eventRight }: SwiperButtonProps) => {
  return (
    <div className="w-[100px] h-[100px] flex items-center absolute right-0 bottom-0 z-50">
      <button
        type="button"
        className="w-[50px] h-[50px] bg-black-500"
        onClick={eventLeft}
      ></button>
      <button
        type="button"
        className="w-[50px] h-[50px] bg-black-500"
        onClick={eventRight}
      ></button>
    </div>
  );
};
