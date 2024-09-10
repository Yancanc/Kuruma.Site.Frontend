import logoMenuKuruma from '../../public/Images/logo_menu_kuruma.svg'
import logoMenuKyoto from '../../public/Images/logo_menu_kyoto.svg'
import logoMenuOsaka from '../../public/Images/logo_menu_osaka.svg'
import logoFooterKuruma from '../../public/Images/logo_footer_kuruma.svg'
import logoFooterKyoto from '../../public/Images/logo_footer_kyoto.svg'
import logoFooterOsaka from '../../public/Images/logo_footer_osaka.svg'

export const actualSite = () => {
  switch (process.env.NEXT_PUBLIC_SITE_NAME) {
    case "KURUMA":
      return {
        siteName: "KURUMA",
        siteLogoMenu: logoMenuKuruma,
        siteLogoFooter: logoFooterKuruma,
        siteDefaultName: "Kurumá",
        siteEmail: "kurumacachoeiro@kurumaveiculos.com.br",
      };
    case "OSAKA":
      return {
        siteName: "OSAKA",
        siteLogoMenu: logoMenuOsaka,
        siteLogoFooter: logoFooterOsaka,
        siteDefaultName: "Osaka",
        siteEmail: "",
      };
    case "KYOTO":
      return {
        siteName: "KYOTO",
        siteLogoMenu: logoMenuKyoto,
        siteLogoFooter: logoFooterKyoto,
        siteDefaultName: "Kyoto",
        siteEmail: "",
      };
    default:
      return {
        siteName: "KURUMA",
        siteLogoMenu: logoMenuKuruma,
        siteLogoFooter: logoFooterKuruma,
        siteDefaultName: "Kurumá",
        siteEmail: "kurumacachoeiro@kurumaveiculos.com.br",
      };
  }
};
