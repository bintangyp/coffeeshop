const InputText = ({ label, value, placeholder, disable }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {disable === true ? (
        <input
          type="text"
          defaultValue={value}
          placeholder={placeholder !== undefined ? placeholder : "Input Disini"}
          className="input input-bordered w-full "
          disabled
        />
      ) : (
        <input
          type="text"
          defaultValue={value}
          placeholder={placeholder !== undefined ? placeholder : "Input Disini"}
          className="input input-bordered w-full "
        />
      )}
    </label>
  );
};

export default InputText;
