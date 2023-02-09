import axios from "axios";
import Swal from "sweetalert2";

export const register = (data) => {
  return async function (distpach) {
    const user = await axios.post("http://localhost:3001/users/create", data);
    Swal.fire({
      icon: "success",
      title: `Usuario creado correctamente`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
    return distpach({ type: "REGISTER", payload: user.data });
  };
};

export const login = (data) => {
  return async function (distpach) {
    try {
      const user = await axios.post("http://localhost:3001/login", data);
      console.log(user.data, "siiiiiiiiiiii");
      distpach({ type: "LOGIN", payload: user.data });
      return Swal.fire({
        icon: "success",
        title: `iniciaste sesion correctamente`,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: `${error.response.data.error}`,
      });
    }
  };
};
