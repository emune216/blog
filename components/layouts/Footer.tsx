import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex justify-center w-full">
      <div className="flex justify-center w-400">
        <span>copyright © yunsu</span>
        <div className="flex">
          <div className="ml-2">facebook</div>
          <div>instagram</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
