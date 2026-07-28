import { invoices } from "@/data/data";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BlogTable = () => {
  return (
    <div>
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
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default BlogTable;
