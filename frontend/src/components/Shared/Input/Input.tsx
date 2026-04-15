
import './Input.css';

type InputPropsBase = {
  id: string,
  name: string,
  type: string,
  label: string,
  placeholder?: string,
  readOnly?: boolean,
  required?: boolean
}

type TextInputProps = InputPropsBase & {
  rows?: 1;
  ref?: React.RefObject<HTMLInputElement>;
}

type TextAreaProps = InputPropsBase & {
  rows?: number;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

type InputProps = TextInputProps | TextAreaProps;

// default rows value is 1, so it will render an input element. If rows is greater than 1, it will render a textarea element.
const Input = ({rows = 1, ...props}: InputProps) => {
  if (rows > 1) { // Textarea for message input
    const { ref, ...textAreaProps } = props as TextAreaProps;
    return(
      <div className='form-control'>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
          ref={ref}
          {...textAreaProps}
        />
      </div>
    )
  }
  const { ref, ...textInputProps } = props as TextInputProps;
  return (
    <div className="form-control">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        {...textInputProps}
      />
    </div>
  )
};

export default Input;