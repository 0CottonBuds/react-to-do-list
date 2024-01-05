import Header from "./Header";
import Footer from "./Footer";
import Main from "./MainContent";

export default function ScreenLayout() {
  return (
    <div className="screen-layout">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
