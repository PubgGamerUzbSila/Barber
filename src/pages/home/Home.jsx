import Affair from "../../components/Affair/affair";
import Hero from "../../components/Hero/hero";
import History from "../../components/History/history";
import Navbar from "../../components/Navbar/navbar";
import './Home.module.css'
const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <History />
            <Affair />
        </>
    );  
}
export default HomePage