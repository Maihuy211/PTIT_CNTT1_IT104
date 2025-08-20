import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Menu from "./Menu";
import Aricle from "./Article";
import "../style/UserLayout.css"
const UserLayout = () => {
  return (
    <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <main className="content"> 
            <Menu></Menu>
            <Main></Main>
            <Aricle></Aricle>
        </main>
    </div>
  );
};
export default UserLayout;