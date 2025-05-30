const baseUrl = "http://localhost:3000";

async function getResponseData(res) {
  if (!res.ok) {
    if (res.status === 500) {
      return Promise.reject("На сервере произошла ошибка.");
    } else {
      const errorResponse = await res.json();
      if (errorResponse.validation) {
        return Promise.reject(errorResponse.validation.body.message);
      } else {
        return Promise.reject(errorResponse.message);
      }
    }
  }
  return res.json();
}

export const register = (name: string, email: string, password: string) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResponseData(res));
};

export const login = (email: string, password: string) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getResponseData(res));
};

export const logout = () => {
  return fetch(`${baseUrl}/signout`, {
    method: "POST",
    credentials: "include",
  }).then((res) => getResponseData(res));
};

export const tokenCheck = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
  }).then((res) => getResponseData(res));
};

export const updateUser = (name: string, email: string) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then((res) => getResponseData(res));
};

// export const getMovies = () => {
//   return fetch(`${baseUrl}/movies`, {
//     method: 'GET',
//     credentials: 'include',
//   }).then(res => getResponseData(res));
// }

// export const saveMovie = (movieData) => {
//   return fetch(`${baseUrl}/movies`, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(movieData)
//   }).then(res => getResponseData(res));
// }

// export const deleteMovie = (id) => {
//   return fetch(`${baseUrl}/movies/${id}`, {
//     method: 'DELETE',
//     credentials: 'include',
//   }).then(res => getResponseData(res));
// }
