import Link from "next/link";

export default function Navbar (){
    return(
        <div className="header">
         <Link href="/" className="link"><p>Home</p></Link>
         <Link href="./about" className="link" ><p>About</p></Link> 
         <Link href="/contact" className="link"><p>Contact</p></Link>
        </div>

    )
}
