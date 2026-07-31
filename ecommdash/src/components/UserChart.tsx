import { PieChart, Pie, Sector, Tooltip } from "recharts";

const RenderPieSector = (props: any) => {
  // Extract custom data properties alongside standard SVG sector props
  const { fill, gender, ...restProps } = props;

  // Conditionally assign colors based on data attributes
  const dynamicColor = gender === "male" ? "#0088FE" : "#FF69B4";

  return <Sector {...restProps} fill={dynamicColor} />;
};

const UserChart = () => {
  const data = [
    { name: "Sara", gender: "female", value: 60 },
    { name: "Mike", gender: "male", value: 25 },
  ];
  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" shape={RenderPieSector} />
      <Tooltip />
    </PieChart>
  );
};

export default UserChart;
