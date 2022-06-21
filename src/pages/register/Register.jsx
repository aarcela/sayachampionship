import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import styles from "../login/Login.module.css";
import {
  auth,
  // registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebaseConfig";

const Register = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
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
            />
            <label className={styles.user_label}>Contraseña</label>
          </div>
          <button className={styles.google_btn} onClick={signInWithGoogle}>
            Registrate con Google
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
