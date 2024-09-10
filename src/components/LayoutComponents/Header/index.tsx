"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiLinkExternal, BiMenuAltRight } from "react-icons/bi";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { RiAlertFill } from "react-icons/ri";
import AlertaModal from "../AlertaModal/AlertaModal";
import { LinksNavigation, NavigationLines } from "./NavigationInfo";
import { actualSite } from "@/utils/utils";

export const Header = () => {
  const { siteLogoMenu } = actualSite()
  const path = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<
    LinksNavigation | undefined
  >();
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState({
    menu: "",
    submenu: "",
  });

  useEffect(() => {
    setMobileMenu(false);
    setOpenedDropdown({ menu: "", submenu: "" });
    setActiveDropdown(undefined);
  }, [path]);

  return (
    <>
      <header className="flex max-lg:flex-wrap w-full fixed top-0 lg:h-16 items-center z-40 justify-between bg-white px-4 py-2 shadow-md shadow-black/40">
        <div className="lg:hidden flex w-full items-end border-b pb-1 mb-1">
          <button
            onClick={() => {
              setAlertIsOpen(true);
            }}
            className="w-100 mr-10 flex w-fit ml-auto items-center text-left text-sm text-gray-700 hover:text-black"
          >
            Alerta aos consumidores
          </button>
          <RiAlertFill size={20} className=" text-red-500" />
        </div>
        <div className="lg:ml-10 flex items-center  space-x-4 ">
          <Link
            href={"/"}
            className="max-md:w-full"
            onClick={() => {
              setActiveDropdown(undefined),
                setOpenedDropdown({ menu: "", submenu: "" });
            }}
          >
            <Image
              src={siteLogoMenu}
              alt="Toyota Logo"
              width={140}
              height={40}
              className="max-md:w-full"
            />
          </Link>
        </div>
        <BiMenuAltRight
          size={28}
          className="text-black lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <nav className="flex items-center space-x-4 max-lg:hidden">
          {NavigationLines.map((line) => {
            return (
              <div className="group relative">
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-black "
                  onClick={() => {
                    if (activeDropdown?.name == line.name) {
                      setActiveDropdown(undefined);
                    } else {
                      setActiveDropdown(line);
                    }
                  }}
                >
                  {line.name}
                  <BsChevronDown />
                </button>
              </div>
            );
          })}
          <Link
            href={"/kinto"}
            className="flex items-center gap-2 text-gray-700 hover:text-black "
          >
            KINTO
          </Link>
          <div className="px-5 pr-3">
          <BsSearch size={20} className="text-gray-700 " />
          </div>
          <button className="flex items-center gap-2 text-gray-700 hover:text-black " />

          <div className="group relative flex items-center">
            <RiAlertFill size={20} className="mr-3 text-red-500" />

            <button
              onClick={() => {
                setAlertIsOpen(true);
              }}
              className="w-100 mr-10 flex w-20 items-center text-left text-sm text-gray-700 hover:text-black"
            >
              Alerta aos consumidores
            </button>
            <div className="absolute hidden bg-white shadow-lg group-hover:block">
              {/* Dropdown content */}
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`w-screen max-lg:hidden justify-between flex fixed transition-all duration-500  -mt-2 bg-white h-96 z-[39] shadow-lg shadow-black/40 ${
          activeDropdown ? "top-16" : "-top-96"
        }`}
      >
        <Image
          width={400}
          height={400}
          loading="lazy"
          src={activeDropdown?.src!}
          alt="Imagem-Dropdown"
          className="h-full w-auto"
        />
        <div className="h-full w-full flex flex-wrap flex-col pt-4">
          {activeDropdown?.groups.map((group) => (
            <>
              <div className="text-black h-fit leading-7 mt-5">
                <p className="mb-2 text-sm">{group.name}</p>
                <ul className="text-neutral-400 pl-4 flex flex-col gap-2">
                  {group.itens.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className="hover:text-black flex items-center transition-all text-base"
                        target={item.target}
                      >
                        {item.name}
                     {item.target &&   <BiLinkExternal className="ml-2 mb-[2px]" size={16} />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
        <div className=" h-full text-neutral-500 flex py-10 ml-auto mr-28">
          <AiOutlineClose
            size={40}
            className="cursor-pointer"
            onClick={() => setActiveDropdown(undefined)}
          />
        </div>
      </div>
      <>
        <div
          className={`w-screen h-screen transition-all pt-5 lg:hidden fixed z-[39] duration-500 flex flex-col bg-white ${
            mobileMenu ? "top-16" : "-top-[990px]"
          }`}
        >
          {NavigationLines.map((line) => {
            return (
              <>
                <div className="w-full">
                  <div
                    onClick={() => {
                      setOpenedDropdown({
                        ...openedDropdown,
                        menu: openedDropdown.menu == line.name ? "" : line.name,
                      });
                    }}
                    className="w-full p-4 border-b flex justify-between text-black"
                  >
                    <p>{line.name}</p>
                    <BiChevronDown size={20} className="text-black" />
                  </div>
                  <div
                    className={`w-full flex flex-col items-center transition-all duration-700 h-fit overflow-y-hidden ${
                      openedDropdown.menu == line.name ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {line.groups.map((group) => (
                      <div className="w-full">
                        <div
                          onClick={() => {
                            setOpenedDropdown({
                              ...openedDropdown,
                              submenu: group.name,
                            });
                          }}
                          className="w-10/12 p-4 border-b mx-auto text-sm flex justify-between text-black"
                        >
                          <p>{group.name}</p>
                          <BiChevronDown size={20} className="text-black" />
                        </div>
                        <div
                          className={`w-full grid grid-cols-2 text-black justify-center items-center transition-all duration-700 h-fit overflow-y-hidden ${
                            openedDropdown.submenu == group.name
                              ? "max-h-96"
                              : "max-h-0"
                          }`}
                        >
                          {group.itens.map((item) => (
                            <Link
                              href={item.link}
                              target={item.target}
                              key={item.link}
                              className="m-auto text-sm p-5"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })}
          <div className="w-full">
            <Link
              href={"/kinto"}
              className="w-full p-4 border-b flex justify-between text-black"
            >
              KINTO
            </Link>
          </div>
        </div>
      </>
      {alertIsOpen && <AlertaModal onClose={() => setAlertIsOpen(false)} />}
    </>
  );
};
