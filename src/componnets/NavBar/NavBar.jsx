"use client";

import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [statusNavBar, setStatusNavBar] = useState(styles.NavClosed);

  return (
    <div
      
      className={`${styles.NavBar} ${statusNavBar}`}
      onMouseMove={() => {
        setStatusNavBar(styles.NavOpen);
      }}
      onMouseLeave={() => {
        setStatusNavBar(styles.NavClosed);
      }}
    >
      <div className={styles.containerLogo}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>

      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/CadastrarCliente" className={styles.link}>
              <Image
                src="/iconeCadastro.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.icone}
              />
              <h2> Cadastro de Cliente </h2>
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              <Image
                src="/iconeEntrada.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.icone}
              />
              <h2> Entrada de Aparelho </h2>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              <Image
                src="/inconePrancheta.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.icone}
              />
              <h2> Fila de Manutenção </h2>
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}>
              <Image
                src="/iconeHistoria.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.icone}
              />
              <h2> Histórico </h2>
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.link}>
              <Image
                src="/iconeConfiguracao.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.icone}
              />
              <h2> Configurações </h2>
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}
