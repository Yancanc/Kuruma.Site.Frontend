import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";

export default function CicloToyota() {
  return (
    <>
        <div className="w-full text-zinc-800 p-3">
          <h1 className="text-5xl  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Ciclo Toyota
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
          <div className="w-full bg-blue-600 h-96 my-5 max-lg:hidden" />
          <h2 className="text-3xl py-5">Entrada Facilitada</h2>
          <p>
            Entrada reduzida, a partir de 20% do valor do veículo, ou o seu
            veículo usado de qualquer marca como pagamento.*
          </p>
          <h2 className="text-3xl py-5">Parcelas reduzidas</h2>
          <p>
            Escolha o valor ou o período do seu ciclo, podendo variar entre 12 e
            48 meses, e conte com parcelas até 40% menores em relação a um
            parcelamento tradicional.
          </p>
          <button
            type="button"
            className="flex-1 lg:hidden mt-8 flex shrink gap-2 justify-center items-center self-stretch px-6 py-3.5 my-auto w-full text-white bg-red-600 rounded min-h-[55px] min-w-[240px] max-md:px-5"
          >
            Solicitar atendimento
          </button>
          <h2 className="text-3xl py-5">Recompra garantida</h2>
          <p>
            Pelo programa Ciclo Toyota, ao término do financiamento, o cliente
            tem a garantia de recompra do seu veículo por, no mínimo, 80% do
            valor da tabela FIPE, valor que deve ser usado primeiramente para
            quitar a parcela residual: Podendo variar de 20 a 50% para os planos
            de 12 a 24 meses. Ou de 20 a 40% para os planos de 25 a 36 meses. Ou
            de 20 a 30% para planos de 37 a 48 meses O saldo restante pode ser
            dado como entrada no financiamento de um Toyota, seja ele novo ou
            usado.
          </p>
          <p className="mt-5">
            *sujeito a análise e aceitação. Consulte as condições de aceitação
            de seu veículo usado na concessionária Toyota.
          </p>
        </div>
    </>
  );
}
