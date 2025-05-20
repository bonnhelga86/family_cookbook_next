"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { logOut } from "@/lib/slices/usersSlice";
import "./Header.scss";

export const Header = () => {
  const isLogin = useAppSelector((state) => state.users.isLogin);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand as={Link} href="/">
            Family CookBook
          </Navbar.Brand>
          <Nav className="header__menu">
            {isLogin && (
              <Nav.Link className="header__link" as={Link} href="/recipes">
                Меню
              </Nav.Link>
            )}
            <Nav.Link className="header__link" as={Link} href="/recipes">
              Рецепты
            </Nav.Link>

            {isLogin ? (
              <Nav.Link className="header__link" as={Link} href="/profile">
                Профиль
              </Nav.Link>
            ) : (
              <Nav.Link className="header__link" as={Link} href="/signin">
                Войти
              </Nav.Link>
            )}

            {isLogin && (
              <button
                className="header__button"
                onClick={() => dispatch(logOut())}
              />
            )}
          </Nav>
          <div className="header__burger"></div>
        </Container>
      </Navbar>
    </header>
  );
};
