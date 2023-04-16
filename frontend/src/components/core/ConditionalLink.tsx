import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  to: string;
  condition: boolean;
  children: React.ReactNode;
}

const ConditionalLink: React.FC<IProps> = ({ to, condition, children }) => {
  if (condition) {
    return <Link to={to}>{children}</Link>;
  }
  return <>{children}</>;
};

export default ConditionalLink;
