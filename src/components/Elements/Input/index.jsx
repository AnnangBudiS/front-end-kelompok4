import Label from "./label";
import Input from "./input";
const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
