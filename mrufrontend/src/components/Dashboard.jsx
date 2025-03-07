import { Link, Outlet } from "react-router-dom";
const Dashboard = ()=>{
    return(
        <>
            <Link to="/dashboard" style={{marginRight:200}}><button>Laptops</button> </Link>
            <Link to="dashboard/mobiles" style={{marginRight:200}}><button>Mobiles</button>  </Link>
            <Link to="dashboard/watches" style={{marginRight:200}}> <button>Watches</button> </Link>

            <br></br><br></br>

            <Outlet></Outlet>
        </>
    )    
}
export default Dashboard;
