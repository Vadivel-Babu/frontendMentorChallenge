

const Button = ({text,handler}) => {
  return (
    <button className="px-3 py-1 rounded-2xl bg-black text-white cursor-pointer hover:bg-gray-500" onClick={handler}>
      {text}
    </button>
  )
}

export default Button