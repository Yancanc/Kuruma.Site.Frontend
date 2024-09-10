import { AiOutlineClose } from "react-icons/ai";
import { RiAlertFill } from "react-icons/ri";
export default function AlertaModal({onClose} : {onClose: () => void}) {
  return (
    <>
      <div className="bg-black/50 backdrop-blur-sm w-screen h-screen fixed z-50 top-0 right-0" />
      <div className="max-lg:top-0 max-lg:right-0 lg:inset-0 fixed w-screen h-screen lg:w-[40vw] lg:h-[60vh] m-auto z-[51] lg:rounded-3xl">
        <div className="p-2 py-8 lg:p-8 w-full bg-neutral-200 lg:bg-neutral-300 lg:rounded-t-3xl flex flex-col shadow lg:shadow-md shadow-black/20 relative z-10">
          <AiOutlineClose size={16} className="ml-auto text-neutral-700 cursor-pointer" onClick={onClose} />
          <div className="flex justify-between">
            <RiAlertFill size={28} className="text-red-600" />
            <div className="flex flex-col w-full text-center">
              <p className="text-red-600 text-2xl">Alerta aos consumidores</p>
              <div className="w-20 border-t-2 border-red-600 mx-auto" />
            </div>
          </div>
        </div>
        <div className="h-full bg-neutral-100 lg:rounded-b-3xl flex flex-col overflow-auto p-5">
          <p className="text-neutral-700">
            {`O Grupo Águia Branca faz um alerta aos consumidores de veículos de
            sua marca para os golpes que vêm sendo aplicados em várias regiões
            do país, nos quais estelionatários anunciam por diversos meios de
            comunicação, especialmente nos ambientes digitais, a venda de
            veículos, peças e serviços diretamente de funcionários desta, por
            valor bem abaixo do valor de mercado e em condições de pagamento
            muito atraentes.`}
            <br />
            <br />
            {`Quando o consumidor entra em contato, os estelionatários
            identificam-se como funcionários da empresa e induzem o consumidor a
            adquirir os produtos como sendo um negócio “imperdível”, bastando,
            para garantir a reserva, que seja realizado depósito ou
            transferência eletrônica uma parte do valor.`}
            <br />
            <br />
            {`Além disso, na tentativa de conferirem maior veracidade ao golpe, os
            estelionatários emitem notas fiscais, recibos e contratos com a
            logomarca da montadora, como se o negócio fosse entabulado entre o
            consumidor e o funcionário com a anuência da concessionária.`}
            <br />
            <br />
            {`Diante do aumento das tentativas de fraude e reclamações, divulgamos
            a seguir orientações fundamentais acerca da aquisição de produtos e
            serviços, na tentativa de alertar os seus consumidores, potenciais
            vítimas do golpe aplicado pelos estelionatários:`}
            <br />
            {`Compare o preço anunciado com o preço do mesmo veículo e modelo, com
            iguais características nos sites distribuidores autorizado, site
            oficial das montadoras e/ou pelo Portal da fundação fipe.org.br;`}
            <br />
            {`Desconfie de anúncios que oferecem grandes vantagens financeiras;`}
            <br />
            {`Jamais efetue o pagamento de qualquer quantia referente à aquisição
            de um veículo, peças ou acessórios antes de pesquisar a idoneidade
            do anunciante (verificar dados da empresa e do anunciante, CNPJ,
            localização…);`}
            <br />
            {`Jamais efetue o pagamento de qualquer quantia referente à compra do
            veículo sem examinar pessoalmente em uma concessionária física;`}
            <br />
            {`Em caso de dúvida, contate o Serviço de Atendimento ao Consumidor no
            e-mail`}
            <br />
            {`compliance.comercio@aguiabranca.com.br`}
          </p>
        </div>
      </div>
    </>
  );
}
