import { Container } from "./style";

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
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </Container>
  );
};

export default DevCard;
