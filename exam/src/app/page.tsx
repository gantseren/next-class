import Ssr from "../components/Ssr";
import Csr from "../components/Csr";
import Queries from "../components/Queries";


export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Csr/>
      <Ssr/>
      
    </div>
  );
}

