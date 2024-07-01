import { useState } from "react"

export default function BuscarCEP() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(` https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setEndereco(data)
        } catch (error) {
            setErro(error)
        }
    }
    return (
        <div className="content">
            <h1>Buscar Endereço por CEP</h1>
            <input type="text" value={cep} placeholder="Digite aqui" onChange={(e) => setCep(e.target.value)}></input>
            <button onClick={fetchData}>Buscar</button>
            {erro && (
                <p>Não encontrado</p>
            )}
            {endereco && (
                <div className="endereco">
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Estado: {endereco.uf}</p>
                </div>
            )
            }
        </div>
    )
}