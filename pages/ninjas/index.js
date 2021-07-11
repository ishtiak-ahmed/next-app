import style from '../../styles/Ninjas.module.scss';
import Link from 'next/dist/client/link';
import Head from 'next/head';

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return {
        props: {ninjas: data}
    }
}
const Contact = ({ninjas}) => {
    return (
        <>
        <Head>
            <title>Ninjas List</title>
        </Head> 
        <div className="content">
            <h2>All Ninjas</h2>
            {
                ninjas.map((ninja)=> (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={style.single}>
                            <h4>{ninja.name}</h4>
                        </a>
                    </Link>
                ))
            }
        </div>
        </>
     );
}
 
export default Contact;