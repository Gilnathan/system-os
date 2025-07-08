"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/Animation_contato2.json";

export default function CadastroAparelho() {
  return (
    <section className={styles.containerCadastroApaelho}>
      <form className={styles.formulario}>
        <div className={styles.container_entradaDeAparelho}>
          <label> Cliente </label>
          <input
            type="text"
            placeholder="Buscar por nome ou ID..."
            className={styles.barraBusca}
          />
        </div>

        <div className={styles.container_entradaDeAparelho} >
          <label> Dados do Aparelho </label>
          <input type="text" placeholder="Marca"  className={styles.inputCadastro} />
          <input type="text" placeholder="Modelo" className={styles.inputCadastro} />
          <input type="text" placeholder="Imei do Aparelho" className={styles.inputCadastro} />
          <input type="text" placeholder="Senha do Aparelho" className={styles.inputCadastro}/>
          <textarea  placeholder="Serviço pretado" className={styles.inputTexteArea}/> 
          
        
        </div>

        <div className={styles.NavForm}>
          <button
            className={styles.bnt}
            type="button"
          >
            <Image
              src="/IconeLivro-de-contato.png"
              alt="Ícone de contatos"
              width={50}
              height={50}
              className={styles.icone}
            />
            Contatos salvos
          </button>

          <button className={styles.bnt} type="submit">
            <Image
              src="/iconeMemoria.png"
              alt="Ícone de salvar"
              width={50}
              height={50}
              className={styles.icone}
            />
            Salvar Contato
          </button>
        </div>


      </form>
    </section>
  );
}
