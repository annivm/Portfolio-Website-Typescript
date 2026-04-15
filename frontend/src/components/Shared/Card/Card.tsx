import './Card.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div className={`card ${props.className}`} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;