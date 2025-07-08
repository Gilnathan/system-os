"use client";

import styles from "./PageTutorial.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";


import React from "react";
import Lottie from "lottie-react";

export default function PageTutorial(){

    return(
        <section className={styles.containerPageTutorial} > 
        

        <div className={styles.conatinerMain} >
            <h1 className={styles.titulo}> Bem Vindo ao <br /> <span> System OS </span> </h1>
            <h2>Estamos aqui para simplificar a sua gestão de assistência técnica.
            Com o System OS, você centraliza todas as informações, agiliza o atendimento aos clientes e organiza o fluxo de trabalho da sua equipe de forma descomplicada.</h2>
            <div className={styles.ContainerFoto}>
                <Image
                src="/asistenciatecnica.jpg"
                alt="Logo"
                width={1000}
                height={1000}
                className={styles.arte}
                />
            </div>
            
        </div>

        <div className={styles.conatinerTutorial} >
            <h2>Como usar ?</h2>
            <ul className={styles.listaDasintrucoes} >
                <li> <span> 1 </span>  Use a Barra Lateral para Navega no sistema  </li>
                <li> <span> 2 </span>  Acesse o Entrada de Cliente pra cadastrar o Cliente   </li>
            </ul>
        </div>

        </section>
    )


}