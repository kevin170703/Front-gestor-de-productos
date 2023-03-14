import React from "react";
import style from "./Home.module.css";
import { motion, useScroll } from "framer-motion";
import dashboard from "../../images/dashboard.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className={style.contentAll}>
      <NavBar />
      <div className={style.contentPresentation}>
        <div className={style.contentText}>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Titulo
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Guarda tus datos, productos, los que desees, de forma facil y
            sensillla.
          </motion.p>
          {user.email ? (
            <motion.button
              onClick={() => (window.location.href = "/dashboard")}
              className={style.buutonLestsGo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Empezar
            </motion.button>
          ) : (
            <button
              className={style.buutonLestsGo}
              onClick={() => {
                Swal.fire({
                  icon: "error",
                  title: `debes iniciar sesion o crear un cuenta antes de empezar`,
                  showCancelButton: true,
                  confirmButtonText: "Iniciar sesion",
                  cancelButtonText: "Crear cuenta",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/login";
                  } else if (result.isDismissed) {
                    window.location.href = "/register";
                  }
                });
              }}
            >
              Empezar
            </button>
          )}
        </div>
        {/* <img src={Data} alt="" /> */}
        <div className={style.networks}>
          <a
            href="https://www.linkedin.com/in/kevin-correa-dev/"
            target="_blank"
          >
            <FaLinkedinIn size="30" />
          </a>
          <a
            href="mailto:correakevinfabian01@gmail.com"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <FiMail size="30" />
          </a>
        </div>
        <IoIosArrowDown size="30" className={style.arrow} />
      </div>
      <div className={style.info}>
        <motion.div
          className={style.contentInfo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
        >
          <h6>Dashborad facil de usar</h6>
          <p>
            Puedes buscar, crear, guardar, editar, eliminar tus datos de manera
            rapida en un dashboard comodo de utilizar e intutivo.
          </p>
        </motion.div>
        <motion.img
          src={dashboard}
          alt="Dashboard image"
          className={style.contentInfo}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
