import Accordion from "../components/Accordion";
import Backbtn from "../components/Backbtn";

const AccordionPage = () => {
  const arr = [
    { title: "acc 1", content: "this is content 1" },
    { title: "acc 2", content: "this is content 2" },
    { title: "acc 3", content: "this is content 3" },
  ];
  return (
    <div className="p-5">
      <Backbtn />
      <h1 className="text-2xl font-bold text-center mb-5">Accordion</h1>
      <div>
        <Accordion title="Custom" datas={arr} />
      </div>
    </div>
  );
};

export default AccordionPage;
