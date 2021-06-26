import { useRouter } from 'next/router'
import Link from 'next/link'
const Navbar = () => {
    const router=useRouter();
    const isActive=(route)=>{
        if(route==router.pathname)
        {
            return 'active'
        }
        else{}

    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #b388ff deep-purple accent-1">
                    <a href="#" className="brand-logo left">Logo</a>
                    <ul id="nav-mobile" className="right ">
                        <li className={isActive('/')}><Link href="/"><a>Home</a></Link></li>
                        <li className={isActive('/Profile/test')} ><Link href="/Profile/test"><a>Profile</a></Link></li>
                        <li className={isActive('/create')} ><Link href="/create"><a>Create Product</a></Link></li>
                        {/* <li className={isActive("/api/Products")} ><Link href="/api/Products"><a>Database Connection</a></Link></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
