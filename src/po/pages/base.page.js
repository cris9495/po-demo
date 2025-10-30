import HeaderCOmponent from "../components/common/header.component";
import SideMenuComponent from "../components/common/sidemenu.component";

class BasePage {

    constructor(url){
        this.url = url;
        this.header = new HeaderCOmponent();
        this.sideMenu = new SideMenuComponent();

    }
    open(){
        return browser.url(this.url);
    }
}

export default BasePage;