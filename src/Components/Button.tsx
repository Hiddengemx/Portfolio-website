import { Link } from "react-router-dom";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <div>
      <Link
        className="select-none nav-button hover:drop-shadow-lg] flex w-full items-center hover:cursor-pointer justify-center rounded-full border border-slate-900 bg-inherit hover:bg-slate-900 hover:text-white transition-all px-7 py-2.5 text-base font-bold text-slate-800 ring-offset-2 ring-offset-slate-900 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1"
        to={url}
      >
        <span>{text}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          className="ml-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Button;
