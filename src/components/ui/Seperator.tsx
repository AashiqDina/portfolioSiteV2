import { addAlpha } from "../../styles/colours";
import "./Seperator.css";

type props = {
  colour: string;
  alpha: number;
  translateZ?: number;
};

export default function Seperator({ colour, alpha, translateZ }: props) {
  return (
    <div
      className="Seperator"
      style={{
        backgroundColor: addAlpha(colour, alpha),
        transform: `translateZ(${translateZ}px)`,
      }}
    ></div>
  );
}
