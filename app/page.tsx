import AlertForm from "@/components/AlertForm";
import FacebookLikeNavbar from "@/components/FacebookLike";

export default function Home() {
  return (
    <div className="bg-[#F1F1F1] h-[100vh]">
      <FacebookLikeNavbar />
      <div className="flex justify-center">
        <h1 className="text-center text-xl max-w-[380px]">
          Você recebeu uma intimação emitida por{" "}
          <span className="italic">Junior Cesar Marques da Silva</span>. Para
          obter mais informações, como o número do processo e a vara
          correspondente, informe seu WhatsApp e clique em
          <span className="font-semibold"> “Receber Intimação”</span>.
        </h1>
      </div>

      <AlertForm />
    </div>
  );
}
