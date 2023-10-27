import Button from "../component/Button";

const ButtonPage = () => {
  return (
    <div>
      <Button primary rounded className="text-2xl">
        hello
      </Button>
      <div>
        <Button warning rounded className="text-2xl">
          button
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
