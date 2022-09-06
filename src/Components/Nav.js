import logo from "../assets/shared/desktop/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Nav = () => {
  const style = { color: "white" };
  return (
    <div>
      <nav className="flex justify-around items-center bg-black py-8">
        <AiOutlineMenu style={style} size={26} />
        <img src={logo} alt="" />
        <BsCart2 style={style} size={26} />
      </nav>
    </div>
  );
};

export default Nav;
