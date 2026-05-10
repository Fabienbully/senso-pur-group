import { HeroVideo } from "@/components/sections/HeroVideo";
import { MaisonsDuo } from "@/components/sections/MaisonsDuo";
import { ChiffresCles } from "@/components/sections/ChiffresCles";
import { RsePulse } from "@/components/sections/RsePulse";
import { TripleV3 } from "@/components/sections/TripleV3";
import { Aiguilleur } from "@/components/sections/Aiguilleur";
import { Direction } from "@/components/sections/Direction";
import { ConfianceLogos } from "@/components/sections/ConfianceLogos";
import { Temoignages } from "@/components/sections/Temoignages";
import { Actualites } from "@/components/sections/Actualites";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <MaisonsDuo />
      <ChiffresCles />
      <RsePulse />
      <TripleV3 />
      <Aiguilleur />
      <Direction />
      <ConfianceLogos />
      <Temoignages />
      <Actualites />
    </>
  );
}
