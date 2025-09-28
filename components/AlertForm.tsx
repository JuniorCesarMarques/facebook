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
    <section className="flex justify-center max-w-[700px] mx-auto mt-8 px-4 text-center">
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-baseline">
          <label className="font-bold" htmlFor="nome">
            Whatsapp:
          </label>
          <input
            className="border p-2 rounded"
            placeholder="Digite seu Whatsapp"
            type="text"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleSubmit()}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Receber intimação
          </button>
        </div>
      </div>
    </section>
  );
}
