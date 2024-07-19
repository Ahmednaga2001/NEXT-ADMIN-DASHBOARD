import Card from "@/components/dashboard/Card";
import Chart from "@/components/dashboard/Chart";
import Transaction from "@/components/dashboard/Transaction";

export default function page() {
  return (
    <div className="dashboard">
      <Card/>
      <Transaction/>
      <Chart/>
      
    </div>
  )
}
