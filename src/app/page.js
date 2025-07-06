
import Card from "@/component/Card";
import GameCarossel from "@/component/GameCarossel";
import ImageBannar from "@/component/ImageBannar";
import SpecialForYou from "@/component/SpecialForYou";


export default function Home() {
  return (
    <div>
      <GameCarossel></GameCarossel>
      <Card></Card>
      <SpecialForYou></SpecialForYou>
      <ImageBannar></ImageBannar>
    </div>
  );
}
