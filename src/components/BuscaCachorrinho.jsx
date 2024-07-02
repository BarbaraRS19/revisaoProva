import { useState } from "react"

export default function BuscaCachorrinho() {
    const [dogImage, setDog] = useState('')
    const [erro, setErro] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&#39`)
            const data = await response.json()
            setDog(data[0].url)//vai começar sem nada, depois vai pegar a url da imagem
        } catch (error) {
            setErro(error)
        }
    }
    return (
        <div className="content">
            <h1>Buscar Foto de Cachorrinho</h1>
            <button onClick={fetchData}>Buscar Foto</button>
            {erro && (
                <p>Não encontrado</p>
            )}
            {dogImage && (
                <div className="dog">
                <img src={dogImage} alt="dog"/>
                </div>
            )
            }
        </div>
    )
}