// import React from 'react';
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SpecialityMenu from "../component/SpecialityMenu";
import TopDoctors from "../component/TopDoctors";

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopDoctors/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default Home;