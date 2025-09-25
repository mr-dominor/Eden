import NavBar from "./(components)/utils/navbar";
const Pagelayout = ({children}:{children:React.ReactNode}) =>{
    return(
        <main className="bg-mylavender">
            <NavBar />
            {children}
        </main>
    );
}

export default Pagelayout