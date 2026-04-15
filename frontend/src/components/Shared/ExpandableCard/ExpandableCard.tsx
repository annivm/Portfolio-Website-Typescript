import { useState } from "react";
import Card from "../Card/Card";

type ExpandableCardProps = {
  title: string;
  description: string;
  other?: string;
  children?: React.ReactNode;
}

const ExpandableCard = ({ title, description, other, children }: ExpandableCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`exp-card`} onClick={() => setExpanded(prev => !prev)}>
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
      <p className={`secondary-text`}>{other}</p>
      <div className={`details ${expanded ? 'show' : ''}`}>
        {children}
      </div>
    </Card>
  );
};

export default ExpandableCard;
