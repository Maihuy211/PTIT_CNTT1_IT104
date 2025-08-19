import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Article from "./Article";
import Menu from "./Menu";
import "../style/UserLayout.css"
const UserLayout = () => {
  return (
    <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <main className="content"> 
            <Menu></Menu>
            <Main></Main>
            <Article></Article>
        </main>
    </div>
  );
};
export default UserLayout;