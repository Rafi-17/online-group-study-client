import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useContext,  useState } from "react";
import Swal from "sweetalert2";
import logo from '../../../assets/webLogo.png'
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout, loading } = useContext(AuthContext);
//   const [theme,setTheme]= useState('light')
    // useEffect(()=>{
    //     if(theme==='dark'){
    //         document.documentElement.classList.add('dark')
    //     }
    //     else{
    //         document.documentElement.classList.remove('dark')
    //     }
    // },[theme])
    // const handleThemeSwitch=()=>{
    //     setTheme(theme==='dark'? 'light' : 'dark')
    // }

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Logged out successfully',
            icon:'success',
            confirmButtonText: 'Cool'
          })
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-left underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
{/* drop down nav */}
    {
        user ?
    <>
      <li tabIndex={0}>
        <details>
            <summary>Assignments</summary>
        
       
            <ul className="w-52">
                {
                    user && <>
                    <li><NavLink to="/createAssignment" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Create Assignment</NavLink></li>
                    </>
                }
                <li><NavLink to="/assignments" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>All Assignments</NavLink>
      </li>
      {
        user && <>
          <li><NavLink to="/myAssignments" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>My Assignment</NavLink></li>
        </>
      }
      {
        user && <>
          <li><NavLink to="/submittedAssignments" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Submitted Assignment</NavLink></li>
        </>
      }
                
            </ul>
            </details>
        </li>
        </>:
        <li><NavLink to="/assignments" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>All Assignments</NavLink>
        </li>
        }
        {/* end here */}
      
      <li><NavLink to="/register" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-slate-800 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Register</NavLink></li>
    </>
  );

  return (
    <nav className="px-3 pb-12 shadow-lg bg-slate-700 max-w-[1640px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-1 md:gap-2">
            <img className="w-10 md:w-16" src={logo} alt="" />
            <h2 className="font-extrabold text-lg md:text-2xl lg:text-4xl text-orange-500">StudyElegance</h2>
        </div>

        <ul
          className={` menu lg:menu-horizontal  lg:flex gap-2 lg:gap-6 text-center text-orange-500 font-semibold  lg:text-lg bg-zinc-700 lg:bg-inherit p-4 rounded-md order-last lg:order-none absolute lg:static right-7 duration-1000 ${
            open ? "top-8" : "hidden"
}`}
        >
          {navLinks}
          {user? <li className="lg:hidden">
            <button onClick={handleLogout}>Logout</button>
          </li> :
          <li className="lg:hidden">
            <Link to="/login">Login</Link>
          </li>}
        </ul>
        <div>
          {
            loading? <span className="loading loading-dots loading-md"></span> :
            <>
              {
                user?(
                <div className="flex items-center gap-2 lg:gap-3">
                  <span className="text-white font-semibold">{user.displayName}</span>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
              <button onClick={handleLogout} className="bg-purple-500 py-2 px-4 text-lg rounded-sm text-white font-semibold hidden lg:block">Logout</button>
            </div>) :
            (
              <Link to="/login"className="bg-slate-700 border py-2 px-4 text-lg rounded-sm text-white font-semibold hidden lg:inline">Login</Link>
            )
              }
            </>
          }
          {/* <input onClick={handleThemeSwitch} type="checkbox" className="toggle ml-2" /> */}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`lg:hidden order-last lg:order-none`}
        >
          <CiMenuKebab></CiMenuKebab>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
