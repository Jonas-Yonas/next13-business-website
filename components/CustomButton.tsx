interface ICustomButtonProps {
  title: string;
  containerStyle: string;
  iconRight?: any;
}

const CustomButton = (props: ICustomButtonProps) => {
  const { title, containerStyle, iconRight } = props;

  return (
    <button className={`inline-flex items-center ${containerStyle}`}>
      {title}
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
