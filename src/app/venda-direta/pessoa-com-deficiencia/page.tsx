import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";

export default function PessoaComDeficiencia() {
  return (
    <>
      <div className="w-full text-zinc-800 p-3">
        <div
          className="w-ful lg:h-40 lg:p-3 mt-5 lg:bg-[#C5C6C6]  lg:bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/dfff491987363943487fde35f109a0b08e23591e5ce363482f319a657c1cee12?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286')]"
          style={{
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-[40px]  text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Pessoa com Deficiência - PCD
          </h1>
          <div className="w-16 border-b-2 ml-1 border-red-600 " />
        </div>
        <p className="mt-10">
          Na Toyota, estamos comprometidos em tornar a mobilidade acessível a
          todos. Por meio do nosso programa de venda direta, oferecemos
          condições especiais e assistência personalizada para garantir que você
          encontre o veículo perfeito que atenda às suas necessidades de
          mobilidade.
        </p>
        <h2 className="text-2xl py-5">
          Pessoa com Deficiência - PcD pode ter direito a comprar um TOYOTA 0 KM
          com isenção de impostos?
        </h2>
        <p className="pb-5">
          EA pessoa com deficiência física, visual, mental severa ou profunda,
          ou autista, ainda que menor de 18 (dezoito) anos, diretamente ou por
          intermédio do seu representante legal pode ter direito a compra do
          veículo 0 Km com isenção de imposto(s).
          <br />
          <br />
          Como não existe uma lista definitiva, relacionamos as principais
          condições, mas é importante destacar que o diagnóstico e enquadramento
          para usufruir do direito a(s) isenção(ões), apenas poderão ser
          confirmados por junta médica habilitada nos termos da lei.
        </p>
        <h2 className="text-2xl py-5">
          Nossos modelos com isenção de IPI e ICMS (parcial):
        </h2>
        <p className="pb-5">
          - Yaris Xl e XS nas versões hatch e Sedan (24/24)
        </p>
        <h2 className="text-2xl py-5">Nossos modelos com isenção de IPI:</h2>
        <p className="pb-5">- Yaris, Corolla Sedan, Corolla Cross (24/24)</p>
        <h2 className="text-2xl py-5">Documentações necessárias:</h2>
        <p className="pb-5">
          - Isenção de IPI emitida pela Receita Federal do Brasil
          <br />
          - Isenção de ICMS do estado de domicilio e ICMS do Estado de SP
          (quando for o caso)
          <br />
          - RG e CPF do beneficiário (quando não condutor)
          <br />
          - Indicação dos condutores autorizados (quando não condutor)
          <br />
          - CNH especial (quando o beneficiário for o condutor)
          <br />
          - Comprovante de Residência
          <br />
          <br />O prazo de vencimento das isenções precisa ser compatíveis com o
          prazo estimado pelo fabricante para o faturamento do veículo).
        </p>
      </div>
    </>
  );
}
