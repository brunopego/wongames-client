import { Wrapper, Logo, Title, Description, Illustration } from './styles';

const Main = ({
  title = 'Boilerplate NextJs',
  description = 'Typescript, ReactJs, NextJs e Styled Components'
}) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Wrapper>
);

export default Main;
