import React from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Layout, TBanner, Banner } from "~/components";
import { StyledContainer } from "~/components/Layout/styled";
import { styled } from "~/theme";

import TermsPageQuery from "~/queries/rulespage.gql";

interface TProps {
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
}

const TermsPage: NextPage<TProps> = ({ hero }) => (
  <Layout title="Všeobecné obchodní podmínky">
    <Banner
      hero={{
        hero_cs: hero.hero_cs,
        hero_ru: hero.hero_ru,
      }}
    />

    <StyledWrapper>
      <StyledContainer>
        <StyledHeading>Všeobecné obchodní podmínky</StyledHeading>
        <StyledText>
          Všeobecné obchodní podmínky společnosti MSN form s.r.o. se sídlem
          Vlkova 532/8, Žižkov, 130 00 Praha 3, IČO 09907017, DIČ CZ09907017
        </StyledText>
        <StyledText>
          Pro účely těchto Všeobecných obchodních podmínek mají níže uvedené
          termíny následující význam:
        </StyledText>
        <StyledText>
          <StyledStrong>“Prodávající”</StyledStrong> je MSN form s.r.o. se
          sídlem Vlkova 532/8, Žižkov, 130 00 Praha 3, IČO 09907017, a
          provozovnou “Sushi Man”, Husitská 187/60, Žižkov, 130 00 Praha 3.
        </StyledText>
        <StyledText>
          <StyledStrong>“Ceník”</StyledStrong> je ceník vydávaný Prodávajícím,
          kterým jsou určeny ceny jednotlivých druhů Zboží. Ceník je uveřejněn
          na internetových stránkách Prodávajícího sushi-man.cz.
        </StyledText>
        <StyledText>
          <StyledStrong>“Kupní cena”</StyledStrong> je cena Zboží, vypočítaná
          Prodávajícím jako násobek Zboží dodaného Kupujícímu a ceny Zboží
          určené Ceníkem.
        </StyledText>
        <StyledText>
          <StyledStrong>“Kupující”</StyledStrong> je fyzická nebo právnická
          osoba, která s Prodávajícím uzavře kupní smlouvu na dodávku Zboží
          prostřednictvím závazné objednávky.
        </StyledText>
        <StyledText>
          <StyledStrong>“Zboží”</StyledStrong> jsou produkty Prodávajícího
          nabízené na internetových stránkách sushi-man.cz.
        </StyledText>
        <StyledHeading>ZBOŽÍ</StyledHeading>
        <StyledList>
          <StyledListItem>
            Prodávající se zavazuje vyrobit Zboží dle objednávky Kupujícího,
            Zboží Kupujícímu dopravit na své náklady do místa určeného Kupujícím
            a tam Zboží odevzdat Kupujícímu způsobem uvedeným v odst. 2 tohoto
            článku.
          </StyledListItem>
          <StyledListItem>
            Prodávající se zavazuje informovat Kupujícího o aktuální nabídce
            Zboží prostřednictvím jídelníčku uveřejněného na internetových
            stránkách Prodávajícího sushi-man.cz a dále o aktuální ceně Zboží
            prostřednictvím Ceníku uveřejněného na internetových stránkách
            Prodávajícího sushi-man.cz.
          </StyledListItem>
          <StyledListItem>
            Prodávající se zavazuje vyrábět Zboží dle platných norem a předpisů
            ČR s použitím kvalitních a čerstvých surovin a dále se zavazuje
            informovat Kupujícího o složení Zboží v souladu s platnými právními
            předpisy. Tyto informace sdělí Prodávající Kupujícímu
            prostřednictvím umístěné na internetových stránkách sushi-man.cz.
          </StyledListItem>
          <StyledListItem>
            Zboží je dodáváno v chlazeném a teplem stavu. Zboží musí být až do
            jeho konzumace udržováno v chladu. Prodávající nenese žádnou
            odpovědnost za jakost Zboží, pokud po odevzdání Zboží Kupujícímu
            dojde k porušení skladovacích podmínek. Zboží musí být spotřebováno
            do 5 hodin po uskutečnění dodávky. Po otevření je nutné Zboží ihned
            spotřebovat.
          </StyledListItem>
        </StyledList>
        <StyledHeading>PLATBA A DOPRAVA</StyledHeading>
        <StyledList>
          <StyledListItem>
            Platbu Kupující může provést na našem e-shopu přes platební bránu a
            taky kartou přes platební terminál při vyzvednutí na provozovně.
            Nebo v hotovosti při vyzvednutí na provozovně nebo kurýrů při dodání
            zboží.
          </StyledListItem>

          <StyledListItem>
            Při jakémkoliv způsobu platby, Kupující dostane od nás účtenku o
            zaplacení.
          </StyledListItem>

          <StyledListItem>Možnosti dopravy</StyledListItem>

          <StyledListItem>
            Doprava zboží kurýrem nebo Vyzvednutí zboží na provozovně Husitská
            187/60, Žižkov, 130 00 Praha 3.
          </StyledListItem>

          <StyledListItem>
            Řidič rozváží Zboží Kupujícímu pravidelně ve večerních hodinách mezi
            11:00 a 21:00/22:00 hodinami, maximální doba doručení objednávky 120
            minut od momenta vytvoření objednávky. Po překročení tyto doby
            dodání, kupující muže požádat o vracení ve výše 50% od ceny zboží.
            Řidič rozvážející Zboží předá Zboží Kupujícímu, osobě Kupujícím
            určené nebo jiné osobě přítomné v místě určeném Kupujícím jako místo
            dodávky Zboží. Pokud není na místě určeném Kupujícím jako místo
            dodání Zboží žádná osoba, které by mohlo být Zboží předáno, bude
            Zboží dodáno na odběrové místo na adrese Husitská 187/60, Žižkov,
            130 00 Praha 3, pro osobní převzetí Kupujícím. Okamžikem odevzdání
            Zboží Kupujícímu přechází na Kupujícího nebezpečí škody na Zboží.
          </StyledListItem>
        </StyledList>
        <StyledHeading>OBJEDNÁVKA</StyledHeading>
        <StyledList>
          <StyledListItem>
            Objednávku Zboží lze provést následujícím způsobem: a) na telefonním
            čísle +420 792 745 116, b) prostřednictvím on-line formuláře
            umístěného na internetových stránkách sushi-man.cz, c)
            prostřednictvím sociální sítě uvedených na internetových stránkách
            sushi-man.cz
          </StyledListItem>

          <StyledListItem>
            Objednávku Zboží je třeba uskutečnit nejméně do 20:45 nebo 21:45
            hodin přede dopravou. Každá učiněná objednávka je závazným návrhem
            na uzavření kupní smlouvy.
          </StyledListItem>
        </StyledList>
        <StyledHeading>REKLAMAČNÍ PODMÍNKY</StyledHeading>
        <StyledList>
          <StyledListItem>
            Změny či zrušení uskutečněné do 10 minut od vytvoření objednávky
            telefonicky na čísle +420 792 745 116.
          </StyledListItem>
          <StyledListItem>
            Při zrušení objednávky do 10 minut od vytvoření objednávky, Kupující
            může požádat o vrácení peněz, na účet který musí nám poslat na
            e-mail sushimanprague@gmail.com, a peníze budou vráceny do 7
            pracovních dnů, ale v tom případě, Prodávající oprávněn naúčtovat si
            sankci a to ve výši 100 Kč s DPH za objednávku.
          </StyledListItem>
          <StyledListItem>
            Pokud zboží bylo doručeno nebo vyzvednuto, už není možné ho vrátit.
          </StyledListItem>
          <StyledListItem>
            Pokud zboží ještě nebylo doručeno nebo vyzvednuto, zboží můžete
            vrátit(nechat) na provozovně nebo u kurýra.
          </StyledListItem>
          <StyledListItem>
            Podle zákona o evidenci tržeb je prodávající povinen vystavit
            kupujícímu účtenku. Zároveň je povinen zaevidovat přijatou tržbu u
            správce daně online; v případě technického výpadku pak nejpozději do
            48 hodin.
          </StyledListItem>
        </StyledList>

        <StyledHeading>KUPNÍ CENA</StyledHeading>

        <StyledList>
          <StyledListItem>
            Kupující se zavazuje objednané Zboží v místě jím určeném od
            Prodávajícího převzít, a to i způsobem určeným v čl. II odst. 2
            těchto podmínek, a uhradit Prodávajícímu za toto Zboží řádně a včas
            Kupní cenu.
          </StyledListItem>

          <StyledListItem>
            Pokud má Kupující IČO je na něj oprávněn zažádat o vystavení faktury
            pod variabilním symbolem a zaplatit Kupní cenu bezhotovostním
            převodem na účet Prodávajícího. Prodávající vyúčtuje Kupní cenu
            Kupujícímu fakturou s datem splatnosti do 4 dnů ode dne vystavení
            faktury. Prodávající je oprávněn vystavit Kupujícímu fakturu v den,
            kdy si Klient Zboží objedná a zašle Kupujícímu fakturu e-mailem. V
            případě platby Kupní ceny bezhotovostním převodem se Kupní cena
            považuje za uhrazenou okamžikem jejího připsání na bankovní účet
            Prodávajícího.
          </StyledListItem>

          <StyledListItem>
            V případě platby Kupní ceny v hotovosti nebo kartou rozvážejícímu
            řidiči při převzetí, vystaví řidič Kupujícímu daňový doklad na
            přijatou částku Kupní ceny s uvedením tarifu, za který Kupující
            Kupní cenu uhradil.
          </StyledListItem>

          <StyledListItem>
            V případě prodlení s úhradou Kupní ceny může Prodávající požadovat
            po Kupujícím zaplacení úroku z prodlení.
          </StyledListItem>

          <StyledListItem>
            V případě prodlení s úhradou Kupní ceny může Prodávající odmítnout
            dodávku objednaného Zboží až do úplné úhrady Kupní ceny za předchozí
            dodávky Zboží.
          </StyledListItem>

          <StyledListItem>
            V případě prodlení s úhradou Kupní ceny je Prodávající oprávněn
            předat údaje Kupujícího na zastupující advokátní kancelář za účelem
            vymáhání částky.
          </StyledListItem>
        </StyledList>

        <StyledHeading>OCHRANA OSOBNÍCH ÚDAJŮ A UKLÁDÁNÍ COOKIES</StyledHeading>

        <StyledList>
          <StyledListItem>
            Kupující souhlasí se zpracováním těchto svých osobních údajů: jméno
            a příjmení, adresa bydliště, identifikační číslo, daňové
            identifikační číslo, adresa elektronické pošty, telefonní číslo a
            adresy bydliště (dále společně vše jen jako „osobní údaje“).
          </StyledListItem>

          <StyledListItem>
            Kupující souhlasí se zpracováním osobních údajů prodávajícím, a to
            pro účely realizace práv a povinností z kupní smlouvy, pro účely
            vedení uživatelského účtu a dopravy zboží. Nezvolí-li kupující jinou
            možnost, souhlasí se zpracováním osobních údajů prodávajícím také
            pro účely zasílání informací a obchodních sdělení kupujícímu.
          </StyledListItem>

          <StyledListItem>
            Kupující bere na vědomí, že je povinen své osobní údaje (při
            objednávce provedené z webového rozhraní obchodu) uvádět správně a
            pravdivě a že je povinen bez zbytečného odkladu informovat
            prodávajícího o změně ve svých osobních údajích.
          </StyledListItem>

          <StyledListItem>
            Zpracováním osobních údajů kupujícího může prodávající pověřit třetí
            osobu, jakožto zpracovatele. Kromě zaměstnanců firmy a osob
            dopravujících či vydávajících zboží nebudou osobní údaje
            prodávajícím bez předchozího souhlasu kupujícího předávány třetím
            osobám.
          </StyledListItem>

          <StyledListItem>
            Osobní údaje budou zpracovávány po dobu neurčitou. Osobní údaje
            budou zpracovávány v elektronické podobě automatizovaným způsobem
            nebo v tištěné podobě.
          </StyledListItem>

          <StyledListItem>
            Kupující potvrzuje, že poskytnuté osobní údaje jsou přesné a že byl
            poučen o tom, že se jedná o dobrovolné poskytnutí
          </StyledListItem>

          <StyledListItem>
            V případě, že by se kupující domníval, že prodávající nebo
            zpracovatel provádí zpracování jeho osobních údajů, které je v
            rozporu s ochranou soukromého a osobního života kupujícího nebo v
            rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem
            na účel jejich zpracování, může: o požádat prodávajícího nebo
            zpracovatele o vysvětlení, o požadovat, aby prodávající nebo
            zpracovatel odstranil takto vzniklý stav.
          </StyledListItem>
        </StyledList>

        <StyledHeading>ZASÍLÁNÍ OBCHODNÍCH SDĚLENÍ</StyledHeading>

        <StyledList>
          <StyledListItem>
            Kupující souhlasí se zasíláním informací souvisejících se zbožím,
            službami nebo podnikem prodávajícího na elektronickou adresu
            kupujícího a prostřednictvím SMS zpráv a dále souhlasí se zasíláním
            obchodních sdělení prodávajícím na elektronickou adresu kupujícího a
            prostřednictvím SMS zpráv.
          </StyledListItem>
        </StyledList>

        <StyledHeading>OSTATNÍ</StyledHeading>
        <StyledList>
          <StyledListItem>
            Smluvní strany se dohodly, že jejich vzájemná práva a povinnosti
            neupravené touto smlouvou se řídí ust. § 2079 a následujícími zákona
            č. 89/2012 Sb., občanského zákoníku.
          </StyledListItem>

          <StyledListItem>
            Kupující a Prodávající shodně uvádějí, že tyto Všeobecné obchodní
            podmínky jsou součástí kupní smlouvy uzavřené mezi Prodávajícím a
            Kupujícím. Kupující prohlašuje, že je mu znění těchto Všeobecných
            obchodních podmínek známo a že je jejich obsah jasný a srozumitelný.
          </StyledListItem>

          <StyledListItem>
            Subjektem mimosoudního řešení spotřebitelských sporů z uzavřených
            kupních smluv je Česká obchodní inspekce. Více informací naleznete
            na internetových stránkách České obchodní inspekce www.coi.cz. Tyto
            Všeobecné obchodní podmínky nabývají účinnosti dne 10. 10. 2021.
          </StyledListItem>
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  </Layout>
);

const StyledWrapper = styled.div`
  border-top: ${({ theme }) => `${theme.rem(10)} solid ${theme.colors.red}`};
  padding-bottom: ${({ theme }) => theme.rem(40)};
  padding-top: ${({ theme }) => theme.rem(40)};
  text-align: justify;
`;

const StyledHeading = styled.h2`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

const StyledText = styled.p`
  margin-bottom: ${({ theme }) => theme.rem(12)};
`;

const StyledStrong = styled.strong`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
`;

const StyledList = styled.ul`
  list-style: disc;
  margin-bottom: ${({ theme }) => theme.rem(10)};
  padding-left: ${({ theme }) => theme.rem(17)};
`;

const StyledListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.rem(7)};
`;

TermsPage.getInitialProps = async () => {
  const {
    data: { hero_cs, hero_ru },
  } = await client.query({
    query: gql`
      ${TermsPageQuery}
    `,
  });

  return {
    hero: {
      hero_cs,
      hero_ru,
    },
  };
};

export default TermsPage;
