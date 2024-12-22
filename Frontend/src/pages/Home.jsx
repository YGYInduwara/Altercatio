import Banner from "../components/Banner"
import Header from "../components/Header"
import SpecialityMenu from "../components/SpecialityMenu"
import TopTeams from "../components/TopTeams"

const Home = () => {
  return (
    <div>
        <Header />
        <SpecialityMenu />
        <TopTeams />
        <Banner />
    </div>
  )
}

export default Home