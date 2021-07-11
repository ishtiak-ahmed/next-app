import { useRouter } from "next/dist/client/router";
import Link from "next/link"
import { useEffect } from "react";

const Error = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    },[])
    return ( 
        <div className='not-found'>
            <h1>Page not found</h1>
            <p>Go back to <Link href='/'><a className='not-found__link'>Homepage</a></Link></p>
        </div>
     );
}
 
export default Error;