import Backbtn from "../components/Backbtn";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  return (
    <div className="p-5">
      <Backbtn />
      <h1 className="text-2xl font-bold text-center mb-5">Accordion</h1>
      <div>
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default AccordionPage;
