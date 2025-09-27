"use client";

import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function AlertForm() {
  const [justificativa, setJustificativa] = useState(false);
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState(false);

  const handleSubmit = async () => {
    if (nome.length === 0) {
        setErro(!erro);
        return;
    }
        await fetch("/api/getname", {
      method: "POST", // método POST
      headers: {
        "Content-Type": "application/json", // indicando que o corpo é JSON
      },
      body: JSON.stringify({
        name: nome,
      }), 
    });
  };

  return (
    <section className="max-w-[700px] mx-auto mt-8 px-4 text-center">
      <div className="flex flex-col gap-2 items-center">
        <AlertTriangle className="text-red-500 w-20 h-20" />
        <h1 className="text-3xl font-bold mb-2 ">
          <span className="uppercase text-red-500">
            Denúncia feita contra esta conta!
          </span>{" "}
          Nos envie uma justificativa imediatamente ou responderá juridicamente
          podendo sofrer graves consequencias!
        </h1>
      </div>
      <p className="text-gray-700 mb-4 flex items-center justify-center gap-2">
        Criar contas fakes no facebook é crime previsto em lei, e as
        consequencias podem ser graves para quem pratica tal ato. A menos que
        você nos envie uma justificativa aceitável, sua conta será bloqueada e
        você será processado, podendo sofrer multas e até mesmo prisão. Ignorar
        este aviso dará a entender que você está cometendo um crime e terá seu
        endereço IP rastreado pelas autoridades competentes.
      </p>
      <p className="text-red-500 font-bold">
        Nos envie uma justificativa com seu NOME VERDADEIRO assim entenderemos
        que não houve crime, e você não sofrerá nenhuma penalidade criminal. As
        informações serão mantidas em sigilo.
      </p>

      <div className="flex flex-col items-baseline gap-2">
        <div className="flex flex-col items-baseline">
          <label className="font-bold" htmlFor="nome">
            Nome do RG:
          </label>
          <input
            className="border p-2 rounded"
            placeholder="Insira o nome do RG"
            type="text"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        {erro && (
          <span className="text-red-600">
            <strong>Erro:</strong> O nome é obrigatório!
          </span>
        )}
        <p className="font-bold">Selecione uma justificativa:</p>
        <select
          id="justificativa"
          className="w-full border rounded-md p-2"
          onChange={() => setJustificativa(true)}
        >
          <option value="">Selecione...</option>
          <option value="teste">Criar conta apenas para testes</option>
          <option value="estudo">Venda de produtos no Facebook</option>
          <option value="privacidade">Entretenimento e novas amizades</option>
          <option value="outro">Outro motivo acadêmico/didático</option>
        </select>
        {justificativa && (
          <span className="text-green-600">
            Justificativa aceita! Você não sofrerá penalidades.
          </span>
        )}
        <div className="flex items-center justify-center gap-2">
          <button onClick={() => handleSubmit()} className="bg-[#1877f2] text-white px-4 py-2 rounded-md hover:bg-[#1459b7]">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
