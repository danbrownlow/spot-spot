import { Nav, Container } from "../index";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;