import { addAlpha } from "../../styles/colours";
import "./Seperator.css";

type props = {
  colour: string;
  alpha: number;
};

export default function Seperator({ colour, alpha }: props) {
  return (
    <div
      className="Seperator"
      style={{ backgroundColor: addAlpha(colour, alpha) }}
    ></div>
  );
}
