import Accordion from "../component/Accordion";

const AccordionPage = () => {
  const items = [
    {
      label: "title",
      content: "description",
    },
    {
      label: "title 2",
      content: "description 2",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
