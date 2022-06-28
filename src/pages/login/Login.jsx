import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  //   signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Login.module.css";
import "../../App.css";
import Input from "../../components/Input";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(error);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("dashboard");
  }, [user, loading, navigate]);

  return (
    <>
      <h2 className="red-text text-darken-3">Salsa y Ashe</h2>
      <section className="border-box">
        <div className="main-box">
          <h4>Iniciar Sesión</h4>
          <Input
            name="email"
            label="Email"
            type="email"
            className="red-text text-darken-3"
          />
          <Input
            name="password"
            label="Contraseña"
            type="password"
            className="red-text text-darken-3"
          />
          <button className={styles.google_btn} onClick={signInWithGoogle}>
            Iniciar con Google
          </button>
          <br />
          <h6>
            O registrate{" "}
            <Link className="red-text text-darken-3" to="register">
              Aquí
            </Link>
          </h6>
        </div>
      </section>
      <svg
        className={styles.waves}
        mlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#c62828"
          fillOpacity="1"
          d="M0,0L48,42.7C96,85,192,171,288,181.3C384,192,480,128,576,90.7C672,53,768,43,864,64C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Login;
