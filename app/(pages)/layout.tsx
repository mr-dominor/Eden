import NavBar from "./(components)/utils/navbar";
import Footer from "./(components)/utils/footer";
const Pagelayout = ({children}:{children:React.ReactNode}) =>{
    return(
        <main className="bg-mylavender">
            <NavBar />
            {children}
            <Footer />
        </main>
    );
}

export default Pagelayout