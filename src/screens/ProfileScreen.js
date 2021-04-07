import React, { Component } from "react";
import Profile from "../components/Profile";

export default class ProfileScreen extends Component {
  render() {
    return (
      <Profile id="1841720051" name="Vira Meliana Agustin"
      email="virameliana18@gmail.com" address="Jl. Semanggi Barat No 22 Malang"
      birthdate="Situbondo 12 August 2000" faculty="Information Technology of
      State Polytechnic of Malang" photo="/images/vira.jpeg"></Profile>
    );
  }
}
