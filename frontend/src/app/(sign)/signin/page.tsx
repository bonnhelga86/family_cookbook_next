"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sign } from "@/components/Sign/Sign";
import * as auth from "../../../api/auth";
// import { ICurrentUser, IUserInputValue } from "../../../utils/interfaceList";

export default function SignIn() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  async function loginUser() {
    try {
      const loginResponse = await auth.login(
        inputValue.email,
        inputValue.password
      );
      if (loginResponse) {
        const tokenCheckResponse = await auth.tokenCheck();
        if (tokenCheckResponse) {
          // setIsLoggedIn(true);
          // setCurrentUser({
          //   name: tokenCheckResponse.name,
          //   email: tokenCheckResponse.email,
          // });
          router.push("/recipes");
        }
      }
    } catch (error) {
      console.log(error);
      // setIsFormError(true);
      // setErrorMessage(error);
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <section className="sign" aria-label="Секция авторизации">
      <Sign
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </section>
  );
}
