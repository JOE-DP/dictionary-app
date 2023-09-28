import Header from "./Header";
import Body from "./Body";


function MainContainer() {
  return (
    <>
        <p>
         {/* container for nav and search (header) */}
         <Header />         
         {/* container for definitions (body) */}
         <Body />  
        </p>
    </>
  );
}

export default MainContainer;