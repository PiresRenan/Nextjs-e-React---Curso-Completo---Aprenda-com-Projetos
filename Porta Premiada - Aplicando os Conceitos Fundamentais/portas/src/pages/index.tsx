
import Link from "next/link";
import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import React, { useState } from "react";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {

  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>

      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de portas?" value={qtdPortas} onChange={novaQtd => setQtdPortas(novaQtd)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica text="Porta com presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>

    </div>
  )
}
