import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Login.module.css";
// import Input from "../../components/Input";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  console.log(error);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("dashboard");
  }, [user, loading, navigate]);

  return (
    <section className={styles.main_background}>
      <section className={styles.content}>
        <br />
        <img src="/assets/logo_nowmove.png" width="30%" alt="logo" />

        <h4 className={styles.slogan}>EL RITMO DE CRECER</h4>
        <input
          placeholder="Correo Electrónico"
          autoComplete="false"
          type="email"
          className={styles.custom_input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          autoComplete="false"
          type="password"
          className={styles.custom_input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.submit_btn}
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Iniciar sesión
        </button>
        <button className={styles.google_btn} onClick={signInWithGoogle}>
          Iniciar con Google
        </button>
        <br />
        {/* <h6>
          Únete{" "}
          <Link className={styles.user_label} to="register">
            Aquí
          </Link>
        </h6> */}
      </section>
    </section>
  );
};

export default Login;
