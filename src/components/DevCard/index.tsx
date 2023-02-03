import { Container } from "./style";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

interface CardProps {
  name: string;
  description: string;
  github: string;
  linkedin: string;
}

const DevCard = ({ name, description, github, linkedin }: CardProps) => {
  return (
    <Container>
      <h3>{name}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin />
      </a>
      <p>{description}</p>
    </Container>
  );
};

export default DevCard;
