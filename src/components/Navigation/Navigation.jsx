import { Container, Button, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navbar className="px-3 py-3" variant="light">
        <LinkContainer to="/">
          <Navbar.Brand className="fs-2">Phonebook</Navbar.Brand>
        </LinkContainer>
        {isLoggedIn && (
          <LinkContainer to="contacts">
            <Button variant="success">Contacts</Button>
          </LinkContainer>
        )}
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <LinkContainer className="me-2" to="register">
                <Button variant="success">Register</Button>
              </LinkContainer>
              <LinkContainer to="login">
                <Button variant="success">Login</Button>
              </LinkContainer>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
