import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import styles from "../login/Login.module.css";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebaseConfig";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (loading) return;
    if (user) navigate("dashboard");
    if (error) console.log(error);
  }, [user, loading, error, navigate]);

  return (
    <>
      <section className={styles.box}>
        <div className={styles.content}>
          <h4>Registrate</h4>
          <div className={styles.input_group}>
            <input
              required=""
              type="text"
              name="text"
              autoComplete="off"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
            <label className={styles.user_label}>Nombre</label>
          </div>
          <div className={styles.input_group}>
            <input
              required=""
              type="text"
              name="text"
              autoComplete="off"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.user_label}>Email</label>
          </div>
          <div className={styles.input_group}>
            <input
              required=""
              type="password"
              name="text"
              autoComplete="off"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className={styles.user_label}>Contraseña</label>
          </div>
          <button
            className={styles.google_btn}
            onClick={() => registerWithEmailAndPassword(name, email, password)}
          >
            Registrate con Correo
          </button>
          <button className={styles.submit_button} onClick={signInWithGoogle}>
            Registrate con Google
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
