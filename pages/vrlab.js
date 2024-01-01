import { Footer, Navbar, Chapter_1, Chapter_2, Chapter_3, Chapter_4, Chapter_5, Chapter_6} from '../components';
const Vrlab = () => {
return(
<>
<div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div>
      <Chapter_1 />
    </div>
    <div className="relative">
      <Chapter_2 />
      <div className="gradient-03 z-0" />
      </div>
      <div>
      <div className="gradient-04 z-0" />
      <Chapter_3/> 
    </div>
    <div className="relative">
      <Chapter_4 />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <Chapter_5 />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Chapter_6 />
      <div className="gradient-03 z-0" />
    </div>
    <Footer />
  </div>

  
  </>
  ); 
}

export default Vrlab;
