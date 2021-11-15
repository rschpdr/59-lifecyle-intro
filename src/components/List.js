import { useState, useEffect } from "react";
import fruitsJson from "./data.json";

function List() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Aqui estamos iniciando um processo de "busca" de informação, que será completado após 1,5 segundos.
    setTimeout(() => {
      // Após o delay de 1,5 segundos, atualizamos nosso state com as frutas
      setFruits(fruitsJson);
    }, 1500); // Esse tempo é uma simulação de uma requisição para a internet que pode demorar uma quantidade variável de tempo para responder
    // No useEffect, quando passamos uma array de dependência vazia, a callback é executada imediatamente após o componente ser montado (aparecer na tela)
  }, []);

  useEffect(
    // Essa callback será executada toda vez que a variável de state "fruits" sofrer qualquer alteração
    () => {
      // Se fruits agora tem elementos, o carregamento foi concluído
      if (fruits.length) {
        setLoading(false);
      }
    },
    [fruits]
  );

  return (
    <div>
      {/* Caso ainda esteja carregando, exiba o marcador de loading, caso contrário, exiba a lista de frutas */}
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
