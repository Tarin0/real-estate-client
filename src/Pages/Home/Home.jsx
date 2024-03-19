
import Hero from "./Hero";
import Advertise from "./Advertise";
import Review from "./Review";
import Team from "./Team";
import Timeline from "./Timeline";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Hero></Hero> 
            <Advertise properties={properties}></Advertise>
            <Review></Review>
            <Team></Team>
            <Timeline></Timeline>
        </div>
    );
};

export default Home;