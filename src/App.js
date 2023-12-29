import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {MatchaBrulee, StrawMatcha, PassionGreen, 
  Chocolate, StrawKiwi, Hibiscus} from "./NewItemList";
  import {Strawberry, RedBean, Mango, Oreo, 
    Watermelon, Ube, Orange} from "./CustomerFavoriteList";
  import {Taro, Matcha, Honeydew, CremeBrulee, Banana, Turmeric} 
  from "./MilkTeaSectionList";
  import {Grapefruit, Lychee, Peach,
Lemon, Blueberry, Raspberry, Jasmine} from "./FruitTeaSectionList";
import {Oolong, Ceylon, JasmineCheese, EarlGrey, 
  FourSeasons} from "./CheeseFoamSectionList";
import {CeylonTea, OolongTea, FourSeasonsTea} from "./OriginalTeaList";
import {BlackSesame, Americano, Cappuccino, FlatWhite} from "./OriginalCoffeeList";
import {HotTaro, HotMatcha, HotStrawberry, HotUbe, HotHoneydew, HotRedBean, 
  HotCremeBrulee, HotOreo, HotBanana, HotTurmeric} from 
  "./HotTeaMilkSectionList";
import { HotAmericano, HotBlackSesame, HotCappuccino, HotFlatWhite } from "./HotCoffeeList";
import { HotOolongTea, HotCeylon, HotFourSeasons, HotJasmine} from "./HotTeaList";
import PopupDivHotTea from "./PopupDivHotTea";
import PopupDiv from "./OrderOnlineDivPopup";
import PopupDivHotMilk from "./PopupDivHotMilkTea";
import PopupDivIceMilk from "./PopupDivIceMilkTea";
import AboutPage from "./AboutPageComponents/AboutPage";
import ChangeTea from "./ChangeTea";
import HomePage from "./HomePage";
import GiftCard from "./GiftCard";
import OrderOnline from "./OrderOnline";
import ShopLocations from "./ShopLocations";
import CartContext from "./CartContext";
import {Login} from "./Login";
import { Signup } from "./Signup";
import { MyAccount } from "./MyAccount";
import CartCheckout from "./CartCheckout"
import Chatbot from "./Chatbot";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/cartCheckout" element={<CartCheckout></CartCheckout>}></Route>
          <Route path="/my_account" element={<MyAccount></MyAccount>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Signup></Signup>}></Route>
          <Route path="/cart" element={<CartContext></CartContext>}></Route>
          <Route path={`/products/${MatchaBrulee.name.replace(/\s+/g, '-')}`} element={
            <PopupDivIceMilk menuItem={MatchaBrulee}/>
          }></Route>
          <Route path={`/products/${StrawMatcha.name.replace(/\s+/g, '-')}`} 
          element={<PopupDivIceMilk menuItem={StrawMatcha}/>}
          ></Route>
          <Route path={`/products/${PassionGreen.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={PassionGreen}/>}></Route>
          <Route path={`/products/${Chocolate.name.replace(/\s+/g, '-')}`} 
          element={<PopupDivIceMilk menuItem={Chocolate}/>}></Route>
          <Route path={`/products/${StrawKiwi.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={StrawKiwi}/>}></Route>
          <Route path={`/products/${Hibiscus.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Hibiscus}/>}></Route>
           
           <Route path={`/products/${Strawberry.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Strawberry}/>}></Route>
           <Route path={`/products/${RedBean.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={RedBean}/>}></Route>
           <Route path={`/products/${Mango.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Mango}/>}></Route>
           <Route path={`/products/${Oreo.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Oreo}/>}></Route>
           <Route path={`/products/${Watermelon.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Watermelon}/>}></Route>
           <Route path={`/products/${Ube.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Ube}/>}></Route>
           <Route path={`/products/${Orange.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Orange}/>}></Route>

        <Route path={`/products/${Taro.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Taro}/>}></Route>
        <Route path={`/products/${Matcha.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Matcha}/>}></Route>
        <Route path={`/products/${Honeydew.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Honeydew}/>}></Route>
        <Route path={`/products/${CremeBrulee.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={CremeBrulee}/>}></Route>
          <Route path={`/products/${Banana.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Banana}/>}></Route>
          <Route path={`/products/${Turmeric.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Turmeric}/>}></Route>
           
           <Route path={`/products/${Grapefruit.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Grapefruit}/>}></Route>
           <Route path={`/products/${Lychee.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Lychee}/>}></Route>
           <Route path={`/products/${Peach.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Peach}/>}></Route>
           <Route path={`/products/${Lemon.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Lemon}/>}></Route>
          <Route path={`/products/${Blueberry.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Blueberry}/>}></Route>
          <Route path={`/products/${Raspberry.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Raspberry}/>}></Route>
          <Route path={`/products/${Jasmine.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Jasmine}/>}></Route>
          
          <Route path={`/products/${Oolong.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Oolong}/>}></Route>
          <Route path={`/products/${Ceylon.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={Ceylon}/>}></Route>
          <Route path={`/products/${JasmineCheese.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={JasmineCheese}/>}></Route>
          <Route path={`/products/${EarlGrey.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={EarlGrey}/>}></Route>
          <Route path={`/products/${FourSeasons.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={FourSeasons}/>}></Route>

        <Route path={`/products/${CeylonTea.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={CeylonTea}/>}></Route>
          <Route path={`/products/${OolongTea.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={OolongTea}/>}></Route>
          <Route path={`/products/${FourSeasonsTea.name.replace(/\s+/g, '-')}`}
          element={<PopupDiv menuItem={FourSeasonsTea}/>}></Route>

        <Route path={`/products/${BlackSesame.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={BlackSesame}/>}></Route>
          <Route path={`/products/${Americano.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Americano}/>}></Route>
          <Route path={`/products/${Cappuccino.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={Cappuccino}/>}></Route>
          <Route path={`/products/${FlatWhite.name.replace(/\s+/g, '-')}`}
          element={<PopupDivIceMilk menuItem={FlatWhite}/>}></Route>

        <Route path={`/products/${HotTaro.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotTaro}/>}></Route>
          <Route path={`/products/${HotTurmeric.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotTurmeric}/>}></Route>
          <Route path={`/products/${HotBanana.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotBanana}/>}></Route>
          <Route path={`/products/${HotCremeBrulee.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotCremeBrulee}/>}></Route>
          <Route path={`/products/${HotHoneydew.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotHoneydew}/>}></Route>
          <Route path={`/products/${HotMatcha.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotMatcha}/>}></Route>
          <Route path={`/products/${HotUbe.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotUbe}/>}></Route>
          <Route path={`/products/${HotTaro.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotTaro}/>}></Route>
          <Route path={`/products/${HotStrawberry.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotStrawberry}/>}></Route>
          <Route path={`/products/${HotRedBean.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotRedBean}/>}></Route>
          <Route path={`/products/${HotOreo.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotOreo}/>}></Route>
        

        <Route path={`/products/${HotFlatWhite.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotFlatWhite}/>}></Route>
         <Route path={`/products/${HotAmericano.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotAmericano}/>}></Route>
           <Route path={`/products/${HotBlackSesame.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotBlackSesame}/>}></Route>
           <Route path={`/products/${HotCappuccino.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotMilk menuItem={HotCappuccino}/>}></Route>

          <Route path={`/products/${HotCeylon.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotTea menuItem={HotCeylon}/>}></Route>
         <Route path={`/products/${HotOolongTea.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotTea menuItem={HotOolongTea}/>}></Route>
           <Route path={`/products/${HotJasmine.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotTea menuItem={HotJasmine}/>}></Route>
           <Route path={`/products/${HotFourSeasons.name.replace(/\s+/g, '-')}`}
          element={<PopupDivHotTea menuItem={HotFourSeasons}/>}></Route>

          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/menu" element={<ChangeTea />} />
          <Route path="/locations" element={<ShopLocations />} />
          <Route path="/buygiftcard" element={<GiftCard />} />
          <Route path="/orderonline" element={<OrderOnline />} />
        </Routes>
        <Chatbot />
    </div>

  );
}

export default App;
