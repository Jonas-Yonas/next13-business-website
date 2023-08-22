interface IInputProps {
  type: string;
  placeholder: string;
  styles: string;
}

const Input = (props: IInputProps) => {
  const { type, placeholder, styles } = props;

  return (
    <input
      className={`rounded border border-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-base px-4 py-2 ${styles}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
