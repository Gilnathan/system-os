"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/Animation_contato2.json";

export default function CadastroCliente() {
  // --- ESTADOS DO COMPONENTE ---

  // Estado para controlar a visibilidade da tela de contatos
  const [statusContainerContato, setStatusContainerContato] = useState(
    styles.ScreanContatosinClossed
  );

  // Estado para o formulário de novo cliente
  const [cliente, setCliente] = useState({
    nome: "",
    tel: "",
    email: "",
    edereco: "", // Corrigido de 'edereco'
  });

  // Estado para a lista de todos os clientes salvos
  const [clientes, setClientes] = useState([]);
  
  // Estado para gerar IDs simples (para este exemplo)
  const [idOS, setIdOS] = useState(1);
  
  // NOVO: Estado para o termo da barra de pesquisa
  const [termoBusca, setTermoBusca] = useState("");


  // --- FUNÇÕES ---

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

    // Limpa o formulário após o cadastro
    setCliente({
      nome: "",
      tel: "",
      email: "",
      edereco: "",
    });

    setIdOS(idOS + 1);
  }

  // --- LÓGICA DE FILTRAGEM ---
  
  // Filtra a lista de clientes com base no termo de busca
  const clientesFiltrados = clientes.filter((cliente) => {
    const termo = termoBusca.toLowerCase();
    // Verifica se o nome do cliente (em minúsculas) inclui o termo de busca
    const nomeMatch = cliente.nome.toLowerCase().includes(termo);
    // Verifica se o ID do cliente (convertido para string) inclui o termo de busca
    const idMatch = String(cliente.id).includes(termo);

    return nomeMatch || idMatch;
  });

  return (
    <section className={styles.containerCadastroCliente}>
      {/* ===== SEÇÃO DE VISUALIZAÇÃO DE CONTATOS (MODAL) ===== */}
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
          
          {/* NOVO: Barra de Pesquisa */}
          <input
            type="text"
            placeholder="Buscar por nome ou ID..."
            className={styles.barraBusca}
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </header>
        
        {/* Container da lista com scroll */}
        <section className={styles.listaContatos}>
          {/* Cabeçalho da "tabela" de contatos */}
          <div className={`${styles.contato} ${styles.contatoHeader}`}>
            <p>ID</p>
            <p>Nome</p>
            <p>Telefone</p>
            <p>E-mail</p>
            <p>Endereço</p>
          </div>

          {/* Renderiza a lista de clientes filtrados */}
          {clientesFiltrados.length > 0 ? (
            clientesFiltrados.map((cliente) => (
              <div key={cliente.id} className={styles.contato}>
                <p>{cliente.id}</p>
                <p>{cliente.nome}</p>
                <p>{cliente.tel}</p>
                <p>{cliente.email}</p>
                <p>{cliente.edereco}</p>
              </div>
            ))
          ) : (
            // Mensagem para quando não há resultados
            <p className={styles.nenhumResultado}>
              Nenhum cliente encontrado.
            </p>
          )}
        </section>
      </section>

      {/* ===== SEÇÃO DO FORMULÁRIO DE CADASTRO ===== */}
      <form className={styles.formulario} onSubmit={registerCliente}>
        <label className={styles.label}> Nome Completo </label>
        <input
          type="text"
          placeholder="digite o nome completo"
          className={styles.inputCadastro}
          value={cliente.nome}
          onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
          autoFocus
          required
        />

        <label className={styles.label}> Telefone </label>
        <input
          type="text"
          placeholder="(00) 00000-0000"
          className={styles.inputCadastro}
          value={cliente.tel}
          onChange={(e) => setCliente({ ...cliente, tel: e.target.value })}
          required
        />

        <label className={styles.label}> E-mail </label>
        <input
          type="email"
          placeholder="exemplo@gmail.com"
          className={styles.inputCadastro}
          value={cliente.email}
          onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        />

        <label className={styles.label}> Endereço Completo</label>
        <input
          type="text"
          placeholder="Rua, número, bairro, estado e CEP"
          className={styles.inputCadastro}
          value={cliente.edereco}
          onChange={(e) => setCliente({ ...cliente, edereco: e.target.value })}
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