import Button from "../component/Button";

const ButtonPage = () => {
  return (
    <div>
      <Button primary rounded className="text-2xl">
        hello
      </Button>
      <div>
        <Button secondary outline rounded className="text-2xl text-gray-800">
          button
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
