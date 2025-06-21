import Bannar from "@/component/Banner";
import Card from "@/component/Card";
import GameCarossel from "@/component/GameCarossel";
import ImageBannar from "@/component/ImageBannar";


export default function Home() {
  return (
    <div>
      <GameCarossel></GameCarossel>
      <Card></Card>
      <ImageBannar></ImageBannar>
    </div>
  );
}
