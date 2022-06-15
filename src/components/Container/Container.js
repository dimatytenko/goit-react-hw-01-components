// import s from './Container.module.css';
import ContainerShell from './Container.styled';

function Container({ children }) {
  return <ContainerShell>{children}</ContainerShell>;
}

export default Container;
