import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href='/sobre'>
            <a>Acessar Página Sobre</a>
            </Link>
        
        </div>
    )   
}
export default Home