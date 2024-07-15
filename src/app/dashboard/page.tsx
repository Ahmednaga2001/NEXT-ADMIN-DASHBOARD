import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Transaction from "@/components/Transaction";

export default function page() {
  return (
    <div className="dashboard">
      <Card/>
      <Transaction/>
      <Chart/>
      
    </div>
  )
}
