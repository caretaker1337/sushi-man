import React from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, TBanner } from "~/components";
import { StyledContainer } from "~/components/Layout/styled";
import { styled } from "~/theme";

import RulesPageQuery from "~/queries/rulespage.gql";

interface TProps {
  hero: {
    hero_cs: TBanner;
    hero_ru: TBanner;
  };
}

const RulesPage: NextPage<TProps> = ({ hero }) => (
  <Layout title="Všeobecné obchodní podmínky">
    <Banner
      hero={{
        hero_cs: hero.hero_cs,
        hero_ru: hero.hero_ru,
      }}
    />

    <StyledWrapper>
      <StyledContainer>
        <StyledStrong>Vážený zákazníku,</StyledStrong>

        <StyledText>
          těší nás, že se zajímáte o ochranu údajů. Chtěli bychom vám poskytnout
          srozumitelný přehled našeho procesu ochrany údajů.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>Kdo jsme?</StyledStrong>
        </StyledHeading>

        <StyledText>
          Jsme společnost MSN form s.r.o., ale obvykle používáme pouze označení
          Sushi Man.
          <br />
          Můžete se na nás obracet s použitím následujících kontaktních údajů:
          <br />
          IČO 09907017
          <br />
          Adresa: Vlkova 532/8, 130 00 Praha 3
          <br />
          E-mailová adresa: sushimanprague@gmail.com
        </StyledText>

        <StyledText>
          Když navštívíte naše webové stránky nebo zadáváte objednávky,
          souhlasíte s těmito zásadami ochrany osobních údajů.
        </StyledText>

        <StyledText>
          Jako správce údajů rozhodujeme o tom, jak vaše osobní údaje
          zpracováváme, za jakým účelem a s použitím jakých prostředků. Přestože
          je poskytnutí všech následujících informací vyžadováno zákonem,
          poskytujeme je primárně proto, že jsme přesvědčeni, že v rámci
          partnerského vztahu by se vždy mělo jednat čestně a otevřeně.
        </StyledText>

        <StyledText>
          Jako správce údajů neseme odpovědnost za to, že veškeré naše činnosti
          zpracování jsou v souladu s právními požadavky, a toto zpracování
          vašich osobních údajů můžete rovněž důvodně očekávat.
        </StyledText>

        <StyledText>
          S případnými otázkami o ochraně údajů ve sushi-man.cz se můžete rovněž
          kdykoliv obracet na e-mailové adrese sushimanprague@gmail.com.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>
            Soukromí je vaše právo a máte možnost volby
          </StyledStrong>
        </StyledHeading>

        <StyledText>
          Jako zákazník máte možnost zvolit, jaké informace s námi chcete
          sdílet. Některé informace samozřejmě potřebujeme k plnění naší
          smlouvy. Nevyžaduje to však vždy všechny údaje, které nám můžete
          zpřístupnit.
        </StyledText>

        <StyledText>
          Chcete-li omezit rozsah informací, které o sobě poskytujete, můžete
          přijmout následující opatření:
        </StyledText>

        <StyledText>
          <StyledStrong>Reklama:</StyledStrong> Pokud od nás nechcete dostávat
          informační e-maliy, můžete odběr kdykoliv zrušit. V tomto případě vám
          nebudeme schopni zasílat žádné zajímavé nabídky
        </StyledText>

        <StyledText>
          <StyledStrong>Žádné sdílení údajů:</StyledStrong> Pokud s námi
          nechcete sdílet vůbec žádné informace, je to škoda. V tomto případě
          vás nemůžeme přesvědčit, jak skvělé naše produkty jsou.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>
            Můžete rovněž kdykoliv využít následujících práv:
          </StyledStrong>
        </StyledHeading>

        <StyledText>
          <StyledStrong>Právo na přístup</StyledStrong>
          <br />
          Máte právo získat informace o tom, jaké údaje o vás uchováváme a jak
          tyto údaje zpracováváme.
        </StyledText>

        <StyledText>
          <StyledStrong>Právo na opravu</StyledStrong>
          <br />
          Pokud zjistíte, že jsou uložené údaje nesprávné, můžete nás vždy
          požádat o jejich opravu.
        </StyledText>

        <StyledText>
          <StyledStrong>Právo na výmaz</StyledStrong>
          <br />
          Můžete nás kdykoliv požádat o vymazání údajů, které o vás uchováváme.
          Pro uplatnění práva na výmaz nám můžete poslat zprávu na
          sushimanprague@gmail.com
        </StyledText>

        <StyledText>
          <StyledStrong>Právo na omezení zpracování</StyledStrong>
          <br />
          Nechcete-li svoje osobní údaje vymazat, ale nepřejete si, abychom je
          dále zpracovávali, můžete nás požádat o omezení zpracování vašich
          osobních údajů. V tomto případě budeme vaše údaje archivovat a do
          našich provozních systémů je znovu začleníme, pokud si to budete přát.
          Nicméně po dobu, kdy je zpracování omezeno, nemůžete používat naše
          služby, protože při jejich používání budeme vaše osobní údaje opět
          zpracovávat.
        </StyledText>

        <StyledText>
          <StyledStrong>Právo na přenositelnost údajů</StyledStrong>
          <br />
          Můžete nás požádat, abychom vám nebo jiné odpovědné osobě předali
          údaje, které o vás uchováváme.&nbsp;
        </StyledText>

        <StyledText>
          <StyledStrong>
            Právo vznést námitku proti zpracování vašich údajů
          </StyledStrong>
          <br />
          Svůj souhlas se zpracováním můžete kdykoliv odvolat nebo můžete vznést
          námitku proti dalšímu zpracování vašich osobních údajů. To zahrnuje i
          námitku proti zpracování údajů, které zpracováváme bez vašeho souhlasu
          na základě našeho oprávněného zájmu. Vztahuje se to například na přímý
          marketing. Můžete kdykoliv vznést námitku proti tomu, že dostáváte
          další informační e-maily. Pokud nesouhlasíte s některým z našich účelů
          zpracování na základě našeho oprávněného zájmu nebo pokud proti němu
          chcete vznést námitku, můžete z důvodů týkajících se vaší konkrétní
          situace, kdykoliv vznést námitku proti zpracování. V takovém případě
          zašlete e-mail na adresu sushimanprague@gmail.com. Následně znovu
          přezkoumáme činnost zpracování, a buď zpracování vašich osobních údajů
          pro tento účel ukončíme, nebo vám vysvětlíme naše důvody, které si
          zaslouží ochranu, a proč budeme ve zpracování pokračovat.
        </StyledText>

        <StyledText>
          <StyledStrong>Automatizované rozhodování</StyledStrong>
          <br />
          Vaše osobní údaje rovněž zpracováváme v souvislosti s algoritmy, které
          mají zjednodušit naše procesy. Máte samozřejmě právo nebýt předmětem
          rozhodnutí vycházejících výhradně z automatizovaného zpracování. Pokud
          se domníváte, že jsme vám neoprávněně odmítli přístup, můžete se na
          nás vždy obrátit na adresu sushimanprague@gmail.com. Případ následně
          zvlášť posoudíme a rozhodneme zvlášť o každém případu.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>Jaké osobní údaje zpracováváme</StyledStrong>
        </StyledHeading>

        <StyledText>
          V následujícím popisu našich činností zpracování se v jednotlivých
          případech odkazujeme na kategorie osobních údajů. Kategorie zahrnuje
          několik osobních údajů, které jsou obvykle pro uvedené účely
          zpracovávány společně.
          <br />
          Osobní údaje jsou informace, na základě kterých vás lze identifikovat
          nebo dokonce učinit identifikovatelnými.
          <br />
          Obecně zpracováváme následující kategorie osobních údajů z
          následujících důvodů:
        </StyledText>

        <StyledHeading>Kontaktní údaje:</StyledHeading>

        <StyledText>
          Jméno, adresu, telefonní číslo, e-mailová adresa, ičo&nbsp;
        </StyledText>

        <StyledText>
          <StyledStrong>Důvod:</StyledStrong>
          <br />
          Když nás kontaktujete, shromažďujeme tyto údaje, protože potřebujeme
          vědět, s kým hovoříme a o čem hovoříme, abychom vám mohli pomáhat s
          vyřešením problému, kvůli kterému jste nás kontaktovali. Uvedené platí
          i v případech, že zanecháte komentář na sociálních sítích.
          <br />
          <StyledStrong>
            Váš telefonní hovor může být monitorován a nahráván za účelem
            zajištění kvality a řádného fungování našich služeb. Záznamy mohou
            být uchovány až šest měsíců pouze pro interní potřeby.
          </StyledStrong>
        </StyledText>

        <StyledHeading>Lokalizační údaje:</StyledHeading>

        <StyledText>Adresa, PSČ, město, stát</StyledText>

        <StyledText>
          <StyledStrong>Důvod:</StyledStrong>
          <br />
          Tyto údaje potřebujeme k tomu, abychom mohli doručovat vaše
          objednávky.&nbsp;
        </StyledText>

        <StyledHeading>Komunikační údaje</StyledHeading>

        <StyledText>Jméno, e-mailová adresa, telefonní číslo</StyledText>

        <StyledText>
          <StyledStrong>Důvod:</StyledStrong>
          <br />
          Chcete-li od nás dostávat informační e-maily, SMS zprávu, potřebujeme
          k zasílání zpráv určité informace. Namísto obecného oslovení dáváme
          přednost přívětivějšímu oslovení s použitím vašeho jména. Tato
          kategorie osobních údajů rovněž slouží k tomu, abychom vás mohli
          kontaktovat například v případě, že produkt nelze doručit a chceme vám
          namísto toho nabídnout jinou možnost.
        </StyledText>

        <StyledHeading>Platební údaje:</StyledHeading>

        <StyledText>Způsob platby</StyledText>

        <StyledText>
          <StyledStrong>Důvod:</StyledStrong>
          <br />
          Tyto informace potřebujeme, abychom mohli sledovat vaše platby a
          přiřadit je k vámi zadaným objednávkám. V závislosti na platební
          metodě, kterou zvolíte v rámci vaší objednávky, v některých případech
          sdílíme vaše údaje s poskytovatelem této platební metody; tak je tomu
          například, když se rozhodnete provést platbu přes bankovní účet (Vaše
          osobní údaje jsou předány společnosti Fakturoid s.r.o. přes jejích
          aplikaci na fakturoid.cz, se sídlem V Pláni 532/7 Praha – Lhotka 142
          00); pokud se rozhodnete provést platbu platební kartou, údaje
          týkající se takové platby jsou předány společnosti myPOS Europe Ltd,
          se sídlem The Shard, Level 24, 32 London Bridge Street, London, SE1
          9SG, United Kingdom
        </StyledText>

        <StyledHeading>Dodací údaje:</StyledHeading>

        <StyledText>
          Jméno, dodací adresa, telefonní číslo, identifikační číslo zákazníka
          &nbsp;
        </StyledText>

        <StyledText>
          <StyledStrong>Důvod:</StyledStrong>
          <br />V souladu se zásadou minimalizace údajů poskytujeme našim
          řidičům pouze informace, které od vás potřebují pro přípravu a
          doručení vaší objednávky.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>Pro jaké účely údaje zpracováváme</StyledStrong>
        </StyledHeading>

        <StyledText>
          Vaše osobní údaje zpracováváme pouze v souladu s přísnými právními
          požadavky. Zvláštní pozornost věnujeme tomu, že se přihlíží ke všem
          zásadám zpracování osobních údajů. Z tohoto důvodu zpracováváme vaše
          osobní údaje pouze v případě, že je to v souladu s právními předpisy a
          můžete důvodně očekávat, že dojde ke zpracování takových údajů. Pokud
          při posuzování dojdeme k závěru, že zpracování nelze důvodně očekávat,
          provádíme zpracování pouze s vaším výslovným souhlasem.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledText>Předávání údajů řidičům&nbsp;</StyledText>

        <StyledText>
          K doručování používáme různé řidiče. Může se jednat o stálé
          zaměstnance, externí pracovníky nebo třetí strany, které nám poskytují
          řidiče na základě smlouvy o zpracování osobních údajů při doručování
          našich objednávek. Ve všech těchto případech zasíláme vaše osobní
          údaje řidičům, aby mohli vaši objednávku rychle doručit.
        </StyledText>

        <StyledText>
          <StyledStrong>Kategorie osobních údajů:</StyledStrong>
          <br />
          Dodací údaje
        </StyledText>

        <StyledText>
          <StyledStrong>Právní základ:</StyledStrong>
          <br />
          Čl. 6 odst. 1 písm. b) GDPR, plnění smlouvy
        </StyledText>

        <StyledText>Reklama a marketing</StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledText>Přímý marketing</StyledText>

        <StyledText>
          <StyledStrong>Informační e-maily</StyledStrong>
          <br />
          Pokud nám při nákupu zboží nebo služeb sdělíte svoji e-mailovou
          adresu, vyhrazujeme si právo zasílat vám prostřednictvím e-mailu
          pravidelné nabídky podobného zboží nebo služeb z naší nabídky.
          <br />
          Liší se nejen obsah našich informačních bulletinů (tzv. newsletterů),
          ale i technologie a kritéria, která používáme k vytvoření našich
          informačních bulletinů a rozdělení zákazníků do skupin.
          <br />
          Používáme různé informace z vaší historie objednávek a dodací adresy.
          <br />
          Jedná se o profilování, při kterém automaticky zpracováváme vaše
          osobní údaje. Zařazení do konkrétní skupiny zákazníků pro vás může mít
          právní účinek nebo pro vás může mít jiný významný dopad, kdy dostáváte
          určité informační bulletiny a nejste zahrnuti do jiných kampaní.
        </StyledText>

        <StyledText>
          Pokud na vás má automatizované rozhodování negativní dopad a vy s tím
          nesouhlasíte, můžete nás kontaktovat na adrese&nbsp;
          <StyledLink href="mailto:sushimanprague@gmail.com">
            sushimanprague@gmail.com
          </StyledLink>
          . V tomto případě individuálně posoudíme okolnosti vašeho případu.
        </StyledText>

        <StyledText>
          <StyledStrong>Kategorie osobních údajů:</StyledStrong>
          <br />
          Kontaktní údaje
          <br />
          Lokalizační údaje
          <br />
          Informace o objednávkách
        </StyledText>

        <StyledText>
          <StyledStrong>Právní základ:</StyledStrong>
          <br />
          Zpracování údajů v této souvislosti probíhá výhradně na základě našeho
          oprávněného zájmu, pokud jde o personalizovanou přímou reklamu podle
          čl. 6 odst. 1 písm. f) GDPR. Pokud jste hned zpočátku vznesli námitku
          proti používání své e-mailové adresy pro tento účel, nebudeme vám
          e-mailovou zprávu zasílat. Námitku proti používání své e-mailové
          adresy pro výše uvedené reklamní účely můžete s účinností do budoucna
          vznést kdykoliv tak, že uvedené oznámíte odpovědné osobě uvedené na
          začátku textu. V souvislosti s tím vám vznikají pouze náklady na
          zajištění přenosu informací podle základních tarifů. Po obdržení vaší
          námitky ihned vaši e-mailovou adresu přestaneme pro reklamní účely
          používat.
        </StyledText>

        <StyledText>
          <StyledStrong>SMS zprávy</StyledStrong>
          <br />
          Kromě jiných způsobů nadále používáme SMS zprávy, abychom vás
          informovali o nových akčních nabídkách ve vaší oblasti. SMS zprávy od
          nás budete dostávat pouze v případě, že jste nám k tomu udělili
          souhlas. Svůj souhlas můžete kdykoliv s účinností do budoucna odvolat.
          V takovém případě nám zašlete e-mailovou zprávu na adresu&nbsp;
          <StyledLink href="mailto:sushimanprague@gmail.com">
            sushimanprague@gmail.com
          </StyledLink>
          . Přihlášení k zasílání SMS zpráv i zrušení jejich zasílání je pro vás
          bezplatné.
        </StyledText>

        <StyledText>
          <StyledStrong>Kategorie osobních údajů:</StyledStrong>
          <br />
          Kontaktní údaje
          <br />
          Informace o objednávkách
        </StyledText>

        <StyledText>
          <StyledStrong>Právní základ:</StyledStrong>
          <br />
          Čl. 6 odst. 1 písm. a) GDPR, souhlas
        </StyledText>

        <StyledText>
          <StyledStrong>Cílení (targeting)</StyledStrong>
          <br />
          Cílení v zásadě znamená přepínání a vypínání reklamních bannerů na
          webových stránkách přizpůsobených určitým cílovým skupinám. Cílem je
          zobrazit uživateli a potenciálnímu zákazníkovi co nejatraktivnější
          bannery co nejindividuálněji. Nejprve určíme cílovou skupinu a
          následně dáme našim poskytovatelům služeb za úkol zobrazovat naši
          reklamu určené cílové skupině. Žádné osobní údaje v této souvislosti
          nezpracováváme, protože uvedené je od počátku prováděno anonymně. Pro
          lepší vymezení cílové skupiny rozdělujeme různé druhy zákazníků do
          segmentů a umisťujeme reklamy na různých portálech.
        </StyledText>

        <StyledText>
          <StyledStrong>Kategorie osobních údajů:</StyledStrong>
          <br />
          Kontaktní údaje
        </StyledText>

        <StyledText>
          <StyledStrong>Právní základ:</StyledStrong>
          <br />
          Čl. 6 odst. 1 písm. f) GDPR, oprávněný zájem.
          <br />
          Naším oprávněným zájmem je výše popsaný účel.
        </StyledText>

        <StyledHeading>Třetí strany</StyledHeading>

        <StyledText>
          Spolupracujeme s třetími stranami, kterým rovněž předáváme vaše osobní
          údaje, ale kteří nejsou vázáni našimi pokyny. Jedná se například o
          naše poradce, právní poradce nebo daňové poradce, kteří od nás obdrží
          vaše osobní údaje na základě smlouvy a zpracovávají vaše osobní údaje
          z právních důvodů nebo za účelem ochrany našich vlastních zájmů.
          <br />
          Vaše osobní údaje za žádných okolností neprodáváme ani nepronajímáme
          třetím stranám. K ničemu takovému nikdy nedojde bez vašeho výslovného
          souhlasu.
        </StyledText>

        <StyledHeading>
          Orgány činné v trestním řízení a soudní řízení
        </StyledHeading>

        <StyledText>
          Může se naneštěstí stát, že pár našich zákazníků a poskytovatelů
          služeb nejedná čestně a chce nás poškodit. V těchto případech nejenže
          máme na základě právních předpisů povinnost předat osobní údaje, ale
          je také v našem zájmu předcházet škodě, vymáhat naše nároky a
          zamítnout neoprávněné nároky.
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>Stránky na sociálních sítích</StyledStrong>
        </StyledHeading>

        <StyledText>
          Máme profily na různých platformách sociálních médií, kde inzerujeme
          naše produkty a jsme v kontaktu se zákazníky. Vzhledem k tomu, že tyto
          profily provozujeme na platformách třetích stran, při každé vaší
          návštěvě těchto kanálů na sociálních sítích provozovatelé o vás
          shromažďují různé osobní údaje.
        </StyledText>

        <StyledText>
          <StyledStrong>Povinnosti</StyledStrong>
          <br />
          My a příslušní provozovatelé platforem sociálních médií vystupujeme
          jako společní správci. Pokud účely a prostředky zpracování stanoví
          společně dva nebo více správců, jsou společnými správci.
        </StyledText>

        <StyledText>
          Platformy sociálních médií Facebook a Instagram jsou provozovány
          společností Facebook Ireland Ltd., 4 Grand Canal Square, Dublin 2,
          Irsko.
        </StyledText>

        <StyledText>
          Neseme odpovědnost za veškeré interakce na našich vlastních stránkách.
          Sami provozovatelé platforem sociálních médií jsou správci údajů pro
          obecné interakce a interakce mimo naše stránky.Výjimkou je zpracování
          údajů popsané níže v případě analýzy využití (přehledů stránek); za to
          neseme společnou odpovědnost spolu se společností Facebook.
          <br />S použitím následujících odkazů získáte přesnější informace o
          tom, jaké údaje jsou příslušnými provozovateli sociálních sítí
          shromažďovány:
          <br />
          <StyledLink href="https://www.facebook.com/about/privacy/">
            Zásady používání dat Facebook
            <br />
          </StyledLink>
          <StyledLink href="https://help.instagram.com/519522125107875">
            Zásady používání dat Instagram
          </StyledLink>
        </StyledText>

        <StyledText>&nbsp;</StyledText>

        <StyledHeading>
          <StyledStrong>Jak dlouho vaše osobní údaje uchováváme</StyledStrong>
        </StyledHeading>

        <StyledText>
          Vaše osobní údaje obecně vymazáváme po té, co splní příslušný účel.
          Platí různá pravidla pro vymazání údajů v závislosti na účelu
          zpracování.&nbsp;
        </StyledText>

        <StyledText>
          Vaše osobní údaje vymažeme na vaši žádost nebo v případě, že je váš
          profil neaktivní po dobu tří let, vymažeme také váš účet. Než k tomu
          dojde, obdržíte od nás zvláštní upozornění na e-mailovou adresu.
        </StyledText>

        <StyledText>
          Kromě námi stanovených pravidel pro vymazání existují také další
          zákonné lhůty pro uchovávání údajů, které rovněž musíme dodržovat.
          Daňové údaje musí být například uchovány po dobu šesti až deseti let
          nebo v některých případech ještě déle. Tyto zvláštní lhůty pro
          uchovávání se liší v závislosti na místních právních předpisech.
        </StyledText>

        <StyledText>
          Proto i přes vaši žádost o vymazání vašich osobních údajů můžeme kvůli
          právním předpisům nadále některé z uložených údajů uchovávat. V tomto
          případě však omezíme další zpracování údajů.
        </StyledText>

        <StyledText>
          Dále vaše osobní údaje uchováme, pokud jsme k tomu oprávněni v souladu
          s čl. 17 odst. 3 GDPR. To platí zejména v případě, že vaše osobní
          údaje potřebujeme pro určení, výkon nebo obhajobu právních nároků.
        </StyledText>

        <StyledHeading>
          <StyledStrong>Právo na změnu</StyledStrong>
        </StyledHeading>

        <StyledText>
          Vyhrazujeme si právo toto prohlášení o ochraně osobních údajů změnit v
          souladu s právními předpisy. O případných významných změnách, jako
          jsou změny účelu nebo nové účely zpracování, vás budeme informovat.
        </StyledText>

        <StyledText>Poslední aktualizace: srpen 2021</StyledText>
      </StyledContainer>
    </StyledWrapper>
  </Layout>
);

const StyledWrapper = styled.section`
  border-top: ${({ theme }) => `${theme.rem(10)} solid ${theme.colors.red}`};
  padding-bottom: ${({ theme }) => theme.rem(40)};
  padding-top: ${({ theme }) => theme.rem(40)};
  text-align: justify;
`;

const StyledHeading = styled.h3`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  padding-left: ${({ theme }) => theme.rem(10)};
`;
const StyledText = styled.p`
  margin-bottom: ${({ theme }) => theme.rem(12)};
`;

const StyledStrong = styled.strong`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontMedium}`};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.red};

  &:hover {
    text-decoration: none;
  }
`;

RulesPage.getInitialProps = async () => {
  const {
    data: { hero_cs, hero_ru },
  } = await client.query({
    query: gql`
      ${RulesPageQuery}
    `,
  });

  return {
    hero: {
      hero_cs,
      hero_ru,
    },
  };
};

export default RulesPage;
