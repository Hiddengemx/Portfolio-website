const Avatar = () => {
  return (
    <div className="flex justify-center items-center rounded-full border-4 border-slate-900 select-none">
      <img
        src="/assets/img/portrait.jpg"
        alt="Selfie of me"
        width={156}
        height={156}
        className="animate-zoom-in-out rounded-full size-36 md:size-40 p-0.5 duration-300"
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
