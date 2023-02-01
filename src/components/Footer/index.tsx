import DevCard from "../DevCard";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      Desenvolvido por:
      <DevCard
        name="The4nna"
        description="Front end developer e UX/UI designer"
        github="https://github.com/the4nna/"
        linkedin="https://www.linkedin.com/in/anna-carolina-sousa/"
      />
      <DevCard
        name="Erivan"
        description="Full stack developer"
        github="https://github.com/erivanf/"
        linkedin="https://www.linkedin.com/in/erivan-ferreira-dev/"
      />
    </Container>
  );
};

export default Footer;
