const CommonButton = (
  { children, classes }: { children: string; classes: string },
  props: any
) => {
  return (
    <button
      className={`py-1 px-2 rounded-full w-fit transition duration-200 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
