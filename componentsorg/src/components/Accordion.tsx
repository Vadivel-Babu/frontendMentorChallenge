import AccordionItem from "./AccordionItem";

interface accordionProps {
  title: string;
  datas: any[];
}

const Accordion = ({ title, datas }: accordionProps) => {
  return (
    <div className="border rounded-lg max-w-100 mx-auto overflow-hidden">
      <h1 className="text-center text-xl font-bold my-2">{title}</h1>
      {datas?.map((d, i) => (
        <AccordionItem key={i} data={d} />
      ))}
    </div>
  );
};

export default Accordion;
