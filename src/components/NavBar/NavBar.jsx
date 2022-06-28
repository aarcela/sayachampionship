import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase/firebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Icon, Navbar, NavItem } from "react-materialize";
import "materialize-css";

export const NavBar = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetchUserName();
  });
  const [name, setName] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  return (
    <Navbar
      className="red darken-3"
      alignLinks="right"
      brand={
        <Link className="brand-logo" to="/dashboard">
          {name}
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to="/">Home</Link>
      <Link to="list-dancer">Lista de Bailarines</Link>
      <Link to="list-academies">Lista de Academias</Link>
      <NavItem onClick={logout}>LogOut</NavItem>
    </Navbar>
  );
};
