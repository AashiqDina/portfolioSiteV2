import { addAlpha } from "../../styles/colours";
import "./Seperator.css";

type props = {
  colour: string;
  alpha: number;
};

export default function Separator({ colour, alpha }: props) {
  return (
    <div
      className="Separator"
      style={{
        backgroundColor: addAlpha(colour, alpha),
      }}
    ></div>
  );
}
