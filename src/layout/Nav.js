
import {Navbar,
        Container,
        Nav,
        NavDropdown} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <div>
    <Navbar expand="lg" variant="dark" bg="dark">
       <Container>
       <LinkContainer to="/">
       <Navbar.Brand>LaTeX</Navbar.Brand>
       </LinkContainer>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
        <LinkContainer to="/">
        <Nav.Link>Общие сведения</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/theory">
        <Nav.Link>Теория</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/resourses">
        <Nav.Link>Ресурсы</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/templates">
        <Nav.Link>Шаблоны</Nav.Link>
        </LinkContainer>
          <NavDropdown title="Задания" id="basic-nav-dropdown">
            <LinkContainer to="/tasks">
            <NavDropdown.Item>Задания</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/first_task">
            <NavDropdown.Item>Задание № 1</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/second_task">
            <NavDropdown.Item>Задание № 2</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/third_task">
            <NavDropdown.Item>Задание № 3</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/forth_task">
            <NavDropdown.Item>Задание № 4</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/fifth_task">
            <NavDropdown.Item>Задание № 5</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/docs">
            <NavDropdown.Item>Вспомогательная информация</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Тесты" id="basic-nav-dropdown">
            <LinkContainer to="/first_test">
            <NavDropdown.Item>Первый тест</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
};

export default Navigation;
