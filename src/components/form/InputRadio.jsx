const InputRadio = ({ label, id, name, setCheckedId }) => {
  return (
    <li className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        className="radio checked:bg-myprimary mr-2"
        onChange={() => setCheckedId(id)}
      />
      <label htmlFor={id} className="text-center cursor-pointer">
        {label}
      </label>
    </li>
  );
};

export default InputRadio;
