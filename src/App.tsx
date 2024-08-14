import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
import Description from "./Components/Description";

function App() {
  return (
    <>
      <Avatar />
      <Description />
      <div className="flex">
        <a
          className="select-none"
          href="https://github.com/CatalystoEyes"
          target="_blank"
        >
          <img
            src="/assets/img/github.svg"
            alt=""
            className="size-11 mr-3 hover:scale-105 transition-all"
          />
        </a>
        <Button text="Projects" url="/projects" />
      </div>
    </>
  );
}

export default App;
