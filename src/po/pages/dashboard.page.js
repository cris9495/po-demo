import SideMenuComponent from '../components/common/sidemenu.component.js';
import BasePage from './base.page.js';


class DashboardPage extends BasePage{
    constructor(){
        super('/showcase/angular/appointmentplanner/#/dashboard')
        this.sideMenu = new SideMenuComponent()

    }
   
}

//module.exports = DashboardPage; //no funciona de este modo como en tutorial
export default DashboardPage;