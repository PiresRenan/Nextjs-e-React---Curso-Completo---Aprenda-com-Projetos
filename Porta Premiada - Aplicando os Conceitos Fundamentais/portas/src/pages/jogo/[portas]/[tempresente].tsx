import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.css"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"

export default function jogo() {

    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.tempresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.tempresente

        const portasValidas = portas >= 3 && portas <= 15
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(portasValidas && temPresenteValido)
    }, [portas])

    function renderizarPortas() {
        return valido && portas.map(porta => {
        return <Porta key={porta.numero} value={porta} 
        onChange={ novaPorta => setPortas(atualizarPortas(portas, novaPorta)) } />
        })
    }

    return (
        <>
        <main id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? 
                renderizarPortas() :
                <h2>Valores Invalidos</h2>
            }    
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar</button>
                </Link>
            </div>
        </main>
        </>
    )
}