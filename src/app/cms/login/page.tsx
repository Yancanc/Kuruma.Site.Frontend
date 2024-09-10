import FormInput from "@/components/CMSComponents/FormInput";
import Logo from "@/components/CMSComponents/Logo";
import Link from "next/link";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <main className="flex  flex-wrap bg-white h-full min-h-screen w-screen">
      <section className="flex bg-white lg:w-[50vw] lg:h-screen flex-col flex-1 shrink justify-between px-10 py-16 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <Logo />
        <form className="flex flex-col mt-28 bg-white w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
            <h1 className="text-4xl italic uppercase text-neutral-700">
              Login
            </h1>
            <p className="mt-2 text-base text-center text-neutral-500">
              Faça o login abaixo para acessar ao CSE.
            </p>
          </div>
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <FormInput label="Usuário" placeholder="Ex. username" />
            <FormInput
              label="Senha"
              placeholder="Escreva sua senha aqui"
              type="password"
            />
            <Link
              href={'/cms/home'}
              type="submit"
              className="gap-2 self-stretch px-6 py-4 mt-8 w-full text-base font-semibold text-center uppercase whitespace-nowrap border-2 border-solid border-neutral-800 text-neutral-800 max-md:px-5 max-md:max-w-full"
            >
              entrar
            </Link>
          </div>
        </form>
        <footer className="mt-28 text-sm leading-5 text-center text-zinc-400 max-md:mt-10 max-md:max-w-full">
          ©2024, CMS Vitória Motors BYD. Uma empresa do Grupo Águia Branca.
          Todos os direitos reservados.
        </footer>
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08b0763b5ee71d1a338d34bc7e752405ac1826da41fc6a096c998c9dc602826?placeholderIfAbsent=true&apiKey=eac21aa640a54d679c8b4aff1d0cf286"
        className="object-cover  max-lg:hidden max-h-screen object-bottom flex-1 shrink w-full aspect-[0.7] basis-20 min-w-[240px] max-md:max-w-full"
        alt="Background image"
      />
    </main>
  );
};

export default LoginPage;
