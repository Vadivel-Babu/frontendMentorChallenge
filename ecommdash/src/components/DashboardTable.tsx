import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DashboardTable = () => {
  return (
    <Table className="max-w-250 m-auto border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">no</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key={1}>
          <TableCell className="font-medium">nanr</TableCell>
          <TableCell>
            {" "}
            <Badge>active</Badge>{" "}
          </TableCell>
          <TableCell>card</TableCell>
          <TableCell className="text-right">200</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
