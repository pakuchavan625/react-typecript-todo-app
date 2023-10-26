import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import '../App.css'

const Navbar = () => {
    const [searchParams] = useSearchParams();
    let todoDatas = searchParams.get("todo");
    
  return (
    <div className="container mx-auto">
    <nav className="flex justify-between p-4 bg-gray-200">
      <Link
        to="/"
        className={`text-blue-600 hover:underline focus:outline-none ${todoDatas === null ? 'text-red-700':''}`}
      >
        All
      </Link>
      <Link
        to="/?todo=active"
        className={`text-blue-600 hover:underline focus:outline-none ${todoDatas === 'active' ? 'text-red-700':''}`}
      >
        Active
      </Link>
      <Link
        to="/?todo=completed"
        className={`text-blue-600 hover:underline focus:outline-none ${todoDatas === 'completed' ? 'text-red-700':''}`}
      >
        Completed
      </Link>
    </nav>
  </div>
  
  )
}

export default Navbar