import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "../style/AdminIndex.css";
const AdminIndex = () => {
  return (
    <div className="container">
        <Header></Header>
        <div className="container-main">
            <Menu></Menu>
            <div className="content">
                <Main></Main>
                <Footer></Footer>
            </div>   
        </div> 
    </div>
  );
};
export default AdminIndex;