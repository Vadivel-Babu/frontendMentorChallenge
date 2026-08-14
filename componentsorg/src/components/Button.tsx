interface btnProps {
  text: string;
  click: () => void;
  isDisabled?: boolean;
}

const Button = ({ text, click, isDisabled = false }: btnProps) => {
  return (
    <button
      className="px-2 py-1 rounded-md capitalize bg-black text-white"
      disabled={isDisabled}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
