"use client";

import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function AlertForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="max-w-[700px] mx-auto mt-8 px-4 text-center">
      <div className="flex flex-col gap-2 items-center">
        <AlertTriangle className="text-red-500 w-20 h-20" />
        <h1 className="text-3xl font-bold mb-2 ">
          <span className="uppercase text-red-500">Denúncia feita contra esta conta!</span> Nos envie uma justificativa imediatamente ou responderá juridicamente podendo sofrer graves consequencias!
        </h1>
      </div>
      <p className="text-gray-700 mb-4 flex items-center justify-center gap-2">
        Criar contas fakes no facebook é crime previsto em lei, e as consequencias podem ser graves para quem pratica tal ato. A menos que você nos envie uma justificativa aceitável, sua conta será bloqueada e você será processado, podendo sofrer multas e até mesmo prisão. Ignorar este aviso dará a entender que você está cometendo um crime e terá seu endereço IP rastreado pelas autoridades competentes.
      </p>
      <p className="text-red-500 font-bold">Nos envie uma justificativa e entenderemos que não houve crime, e você não sofrerá nenhuma penalidade criminal.</p>
      <select
        id="justificativa"
        className="w-full border rounded-md p-2"
      >
        <option value="">Selecione...</option>
        <option value="teste">Criar conta apenas para testes</option>
        <option value="estudo">Praticar e aprender programação</option>
        <option value="privacidade">Preocupação com privacidade em projetos</option>
        <option value="outro">Outro motivo acadêmico/didático</option>
      </select>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite o número do seu celular"
          className="border rounded-md px-3 py-2 w-64"
        />
        <button className="bg-[#1877f2] text-white px-4 py-2 rounded-md hover:bg-[#1459b7]">
          Enviar
        </button>
      </div>
    </section>
  );
}
