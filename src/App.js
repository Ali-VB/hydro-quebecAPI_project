import React, { useState, useEffect } from "react";
import './App.css';
import GridView_totalDemand from "./components/GridView_totalDemand";
import LineChart_totalDemand from "./components/LineChart_totalDemand";
import BarChart_totalDemand from "./components/BarChart_totalDemand";
import GridView_production from "./components/GridView_production";
import BarChart_production from "./components/BarChart_production";
import LineChart_production from "./components/LineChart_production";
import ThreeShiftBarChart_totalDemand from "./components/ThreeShiftBarChart_totalDemand";
import StackBarChart_production from "./components/StackBarChart_production";
import IntroPage from "./components/IntroPage";
import Logo from "./assets/TEC-logo.jpeg";
import { SlEnergy } from "react-icons/sl";


function App() {

  // Data for Total Demand
  const [totalDemandArr, setTotalDemandArr] = useState([]);

  // Data for Productions
  const [productionArr, setProductionArr] = useState([]);

  // Fetch Data from Two End Points
  const totalDemandAPI =
    "https://www.hydroquebec.com/data/documents-donnees/donnees-ouvertes/json/demande.json";
  const productionAPI =
    "https://www.hydroquebec.com/data/documents-donnees/donnees-ouvertes/json/production.json";

  useEffect(() => {
    Promise.all([fetch(totalDemandAPI), fetch(productionAPI)])
      .then(([resTotalDemand, resProduction]) =>
        Promise.all([resTotalDemand.json(), resProduction.json()])
      )
      .then(([data_total, data_production]) => {
        setTotalDemandArr(data_total.details);
        setProductionArr(data_production.details);
      });
  }, []);

  const totalDemandData = totalDemandArr.map(totalDemandItem => {
    return totalDemandItem;
  })
  const productionData = productionArr.map(productionItem => {
    return productionItem;
  })

  // SideBar Actions Handling
  const [showTotalLine, setShowTotalLine] = useState(false)
  const [showProductionLine, setShowProductionLine] = useState(false)
  const [showTotalBar, setShowTotalBar] = useState(false)
  const [showProductionBar, setShowProductionBar] = useState(false)
  const [showTotalGrid, setShowTotalGrid] = useState(false)
  const [showProductionGrid, setShowProductionGrid] = useState(false)
  const [showProductionStack, setShowProductionStack] = useState(false)
  const [showThreeShiftTotalBarChart, setShowThreeShiftTotalBarChart] = useState(false)
  const [showIntroPage, setShowIntroPage] = useState(true)

  const handleSideBarAction = (setChart) => {
    setShowTotalLine(false)
    setShowProductionLine(false)
    setShowTotalBar(false)
    setShowProductionBar(false)
    setShowTotalGrid(false)
    setShowProductionGrid(false)
    setShowProductionStack(false)
    setShowThreeShiftTotalBarChart(false)
    setShowIntroPage(false)
    setChart(true)
    // console.log("YES")
  }


  return (

    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/5 bg-darkBlue text-white ">
        <div className="  p-4 md:p-12">
          <div className=" lg:pb-4 w-14">
            <a href="https://www.tecenergy.ca/" target="_blank">
              <img src={Logo} alt="TEC LOGO" className="w-8  pb-4 lg:w-14" /></a>
          </div>
          <a onClick={() => handleSideBarAction(setShowIntroPage)}>
            <h1 className="md:text-2xl font-bold md:mb-4 cursor-pointer">Hydro Quebec</h1>
          </a>
          <div className="my-6">
            <div
              className=" font-semibold mb-2"
            >
              <SlEnergy className="inline-block mx-1" />
              <div className="mb-2 inline-block">Total Demand</div>

            </div>
            <ul>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showTotalGrid ? "active" : ""}`} onClick={() => handleSideBarAction(setShowTotalGrid)}>Grid View</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showTotalBar ? "active" : ""}`} onClick={() => handleSideBarAction(setShowTotalBar)}>Bar Chart</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showTotalLine ? "active" : ""}`} onClick={() => handleSideBarAction(setShowTotalLine)}>Line Chart</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showTotalLine ? "active" : ""}`} onClick={() => handleSideBarAction(setShowThreeShiftTotalBarChart)}>Three Shifts</li>

            </ul>
            <div className="mt-8  font-semibold">
              <SlEnergy className="inline-block mx-2" />
              <div className="mb-2 inline-block">Production</div>
            </div>
            <ul>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showProductionGrid ? "active" : ""}`} onClick={() => handleSideBarAction(setShowProductionGrid)}>Grid View</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showProductionBar ? "active" : ""}`} onClick={() => handleSideBarAction(setShowProductionBar)}>Bar Chart</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showProductionLine ? "active" : ""}`} onClick={() => handleSideBarAction(setShowProductionLine)}>Line Chart</li>
              <li className={`border-l-2 border-lightBackground hover:border-white
                 hover:border-l-2 pl-4  mb-2 ml-8 hover:cursor-pointer hover:font-semibold [&.active]:font-semibold
                  ease-in-out duration-300 [&.active]:text-amber-500 ${showProductionStack ? "active" : ""}`} onClick={() => handleSideBarAction(setShowProductionStack)}>Stack Chart</li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:block md:absolute md:bottom-7 md:left-12 ">Ali Vakili &copy;2023</div>
      </div>

      {/* Chart section */}
      <div className="lg:w-4/5 p-12 bg-darkGreen h-screen">
        {/* Tabs */}
        {/* <div className=" flex justify-center pb-8">
          <div className=" flex justify-around bg-lightBackground w-auto rounded-full py-2 px-4">
            <button
              class="rounded-full py-2 px-4 outline-0 
             hover:bg-darkBlue active:bg-darkBlue text-white hover:font-semibold [&.active]:font-semibold 
             ease-linear duration-100"
            >
              Grid View
            </button>
            <button
              class="rounded-full  py-2 px-4 outline-0
             hover:bg-darkBlue [&.active]:bg-darkBlue text-white hover:font-semibold [&.active]:font-semibold 
             ease-linear duration-100"
            >
              Bar Chart
            </button>
            <button
              class="rounded-full py-2 px-4 outline-0 hover:bg-darkBlue active:bg-darkBlue text-white
            hover:font-semibold [&.active]:font-semibold ease-linear duration-100"
            >
              Line Chart
            </button>
            <button
              class="rounded-full py-2 px-4 outline-0 hover:bg-darkBlue active:bg-darkBlue
             text-white hover:font-semibold [&.active]:font-semibold 
             ease-linear duration-100"
            >
              Stack Chart
            </button>
          </div>
        </div> */}
        <div className=" flex justify-center py-8">
        </div>
        {/* Chart container */}
        <div className="flex flex-col  align-middle py-4 bg-sky-50 px-8 md:h-5/6 overflow-y-auto rounded-lg">
          <IntroPage showIntroPage={showIntroPage} />
          <ThreeShiftBarChart_totalDemand totalDemandData={totalDemandData} showThreeShiftTotalBarChart={showThreeShiftTotalBarChart }/>
          <GridView_totalDemand totalDemandData={totalDemandData} showTotalGrid={showTotalGrid} />
          <GridView_production productionData={productionData} showProductionGrid={showProductionGrid} />
          <LineChart_totalDemand totalDemandData={totalDemandData} showTotalLine={showTotalLine} />
          <LineChart_production productionData={productionData} showProductionLine={showProductionLine} />
          <BarChart_totalDemand totalDemandData={totalDemandData} showTotalBar={showTotalBar} />
          <BarChart_production productionData={productionData} showProductionBar={showProductionBar} />
          <StackBarChart_production productionData={productionData} showProductionStack={showProductionStack} />
        </div>
      </div>
    </div>




  );
}

export default App;
