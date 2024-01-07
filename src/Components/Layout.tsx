import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function ScreenLayout() {
  return (
    <div className="screen-layout">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}
