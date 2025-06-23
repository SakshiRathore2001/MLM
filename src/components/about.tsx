import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const allocations = [
  { usage: "Referral", allocation: "2%", remarks: "—" },
  { usage: "MNT Acquisition", allocation: "10%", remarks: "Upto ₹100 Cr" },
  { usage: "AI Trading Capital", allocation: "50%", remarks: "Used by the AI bot" },
];

export default function About() {
  return (
    <section id="allocation" className="w-full py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Fund Allocation Breakdown
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We believe in transparency. Here's how the funds are allocated to ensure the system's efficiency and growth.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Usage</TableHead>
                <TableHead>Allocation</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allocations.map((item) => (
                <TableRow key={item.usage}>
                  <TableCell className="font-medium">{item.usage}</TableCell>
                  <TableCell>{item.allocation}</TableCell>
                  <TableCell>{item.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
