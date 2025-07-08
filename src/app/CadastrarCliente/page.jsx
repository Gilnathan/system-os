"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/Animation_contato2.json";

export default function CadastroCliente() {
  useEffect(() => {
    const DadosLocal = localStorage.getItem("@clientes");
    const DadosId = localStorage.getItem("@idOS");

    if (DadosLocal) {
      setClientes(JSON.parse(DadosLocal));
    }

    if (DadosId) {
      setIdOS(JSON.parse(DadosId));
    }

    setIsLoaded(true);
  }, []);

  const [statusContainerContato, setStatusContainerContato] = useState(
    styles.ScreanContatosinClossed
  );

  const [isLoaded, setIsLoaded] = useState(false);

  const [cliente, setCliente] = useState({
    nome: "",
    tel: "",
    email: "",
    edereco: "",
  });

  const [clientes, setClientes] = useState([]);

  const [idOS, setIdOS] = useState(1);

  const [termoBusca, setTermoBusca] = useState("");

  function statusContainerContatoOff() {
    setStatusContainerContato(styles.ScreanContatosinClossed);
  }

  function statusContainerContatoOn() {
    setStatusContainerContato(styles.ScreanContatosinON);
  }

  function registerCliente(e) {
    e.preventDefault();

    const novoClienteComID = {
      ...cliente,
      id: idOS,
    };

    setClientes([...clientes, novoClienteComID]);
    alert("Cliente Salvo com sucesso");

    setCliente({
      nome: "",
      tel: "",
      email: "",
      edereco: "",
    });

    setIdOS(idOS + 1);
  }

  function removeCliente(iddoCliente) {
    const confimacao = window.confirm("Deseja realmente Reomver o Cliente");

    if (confimacao) {
      const ListaSemOCLiente = clientes.filter(c => c.id !== iddoCliente);
      setClientes(ListaSemOCLiente);
    }
  }

  const clientesFiltrados = clientes.filter(cliente => {
    const termo = termoBusca.toLowerCase();

    const nomeMatch = cliente.nome.toLowerCase().includes(termo);

    const idMatch = String(cliente.id).includes(termo);

    return nomeMatch || idMatch;
  });

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("@clientes", JSON.stringify(clientes));
      localStorage.setItem("@idOS", JSON.stringify(idOS));
    }
  }, [clientes, isLoaded, idOS]);

  return (
    <section className={styles.containerCadastroCliente}>
      <section className={statusContainerContato}>
        <div className={styles.containerNavegação}>
          <button
            className={styles.containerNavegação_nav}
            onClick={statusContainerContatoOff}
          >
            X
          </button>
        </div>

        <header className={styles.headerContatos}>
          <input
            type="text"
            placeholder="Buscar por nome ou ID..."
            className={styles.barraBusca}
            value={termoBusca}
            onChange={e => setTermoBusca(e.target.value)}
          />
        </header>

        <section className={styles.listaContatos}>
          <div className={`${styles.contato} ${styles.contatoHeader}`}>
            <p>ID</p>
            <p>Nome</p>
            <p>Telefone</p>
            <p>E-mail</p>
            <p>Endereço</p>
          </div>

          {clientesFiltrados.length > 0 ? (
            clientesFiltrados.map(cliente => (
              <div key={cliente.id} className={styles.contato}>
                <p>{cliente.id}</p>
                <p>{cliente.nome}</p>
                <p>{cliente.tel}</p>
                <p>{cliente.email}</p>
                <p>{cliente.edereco}</p>
                <button
                  onClick={() => {
                    removeCliente(cliente.id);
                  }}
                  className={styles.bntRemove}
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            ))
          ) : (
            <p className={styles.nenhumResultado}>Nenhum cliente encontrado.</p>
          )}
        </section>
      </section>

      <form className={styles.formulario} onSubmit={registerCliente}>
        <label className={styles.label}> Nome Completo </label>
        <input
          type="text"
          placeholder="digite o nome completo"
          className={styles.inputCadastro}
          value={cliente.nome}
          onChange={e => setCliente({ ...cliente, nome: e.target.value })}
          autoFocus
          required
        />

        <label className={styles.label}> Telefone </label>
        <input
          type="text"
          placeholder="(00) 00000-0000"
          className={styles.inputCadastro}
          value={cliente.tel}
          onChange={e => setCliente({ ...cliente, tel: e.target.value })}
          required
        />

        <label className={styles.label}> E-mail </label>
        <input
          type="email"
          placeholder="exemplo@gmail.com"
          className={styles.inputCadastro}
          value={cliente.email}
          onChange={e => setCliente({ ...cliente, email: e.target.value })}
        />

        <label className={styles.label}> Endereço Completo</label>
        <input
          type="text"
          placeholder="Rua, número, bairro, estado e CEP"
          className={styles.inputCadastro}
          value={cliente.edereco}
          onChange={e => setCliente({ ...cliente, edereco: e.target.value })}
        />

        <div className={styles.NavForm}>
          <button
            className={styles.bnt}
            type="button"
            onClick={statusContainerContatoOn}
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

      <div className={styles.containerInlustração}>
        <Lottie
          animationData={animationData}
          loop={false}
          style={{ width: 700, height: 700 }}
        />
      </div>
    </section>
  );
}
