import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
// import { IUserInputValue } from "../../../utils/interfaceList";
import "./Sign.scss";

export const Sign = ({
  handleSubmit,
  inputValue,
  setInputValue,
}: {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inputValue: any;
  setInputValue: any;
}) => {
  const pathname = usePathname();

  return (
    <section className="sign" aria-label="Секция авторизации">
      <Card className="sign__content">
        <Card.Header className="sign__header">
          <Card.Link className="sign__logo-link" as={Link} href="/">
            Family CookBook
          </Card.Link>
        </Card.Header>
        <Card.Body>
          <Card.Title className="sign__title">
            {pathname === "/signup" ? "Регистрация" : "Авторизация"}
          </Card.Title>
          <Form
            noValidate
            name="sign-form"
            onSubmit={(event) => handleSubmit(event)}
            className="sign__form"
          >
            {pathname === "/signup" && (
              <FloatingLabel
                controlId="floatingName"
                label="Логин"
                className="sign__label"
              >
                <Form.Control
                  onChange={(event) =>
                    setInputValue({ ...inputValue, name: event.target.value })
                  }
                  className="sign__input"
                  type="text"
                  placeholder="Введите логин"
                />
              </FloatingLabel>
            )}

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="sign__label"
            >
              <Form.Control
                onChange={(event) =>
                  setInputValue({ ...inputValue, email: event.target.value })
                }
                className="sign__input"
                type="email"
                placeholder="Введите Email"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
              className="sign__label"
            >
              <Form.Control
                onChange={(event) =>
                  setInputValue({ ...inputValue, password: event.target.value })
                }
                className="sign__input"
                type="password"
                placeholder="Введите пароль"
              />
            </FloatingLabel>

            {pathname === "/signup" && (
              <FloatingLabel
                controlId="floatingRepeatPassword"
                label="Повторите пароль"
                className="sign__label"
              >
                <Form.Control
                  onChange={(event) =>
                    setInputValue({
                      ...inputValue,
                      repeat_password: event.target.value,
                    })
                  }
                  className="sign__input"
                  type="password"
                  placeholder="Повторите пароль"
                />
              </FloatingLabel>
            )}

            <Button className="sign__button btn-lg" type="submit">
              {pathname === "/signup" ? "Зарегистрироваться" : "Войти"}
            </Button>
            <Form.Text className="sign__text" id="passwordHelpBlock" muted>
              {pathname === "/signup"
                ? "Уже зарегистрированы?"
                : "Еще нет аккаунта?"}
              <Link
                className="sign__link"
                href={pathname === "/signup" ? "/signin" : "/signup"}
              >
                {pathname === "/signup" ? "Войти" : "Зарегистрироваться"}
              </Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};
