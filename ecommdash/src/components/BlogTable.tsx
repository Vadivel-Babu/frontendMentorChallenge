import { invoices } from "@/data/data";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BlogTable = () => {
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>
              {" "}
              <Badge
                className={`${invoice.paymentStatus == "Paid" ? "bg-green-500" : invoice.paymentStatus == "Pending" ? "bg-yellow-500" : "bg-red-500"}`}
              >
                {invoice.paymentStatus}
              </Badge>{" "}
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogTable;
