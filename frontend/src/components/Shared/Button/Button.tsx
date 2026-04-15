import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'big';
  inverse?: boolean;
  danger?: boolean;
  round?: boolean;
  transparent?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button button--${props.size || 'default'}
                  ${props.inverse ? 'button--inverse' : ''}
                  ${props.danger ? 'button--danger' : ''}
                  ${props.round ? 'button--round' : ''}
                  ${props.transparent ? 'button--transparent' : ''}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;