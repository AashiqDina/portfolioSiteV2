import "./Seperator.css";

type props = {
  colour: string;
};

export default function Seperator({ colour }: props) {
  return <div className="Seperator" style={{ color: colour }}></div>;
}
