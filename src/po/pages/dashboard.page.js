import BasePage from './base.page.js';


class DashboardPage extends BasePage{
    constructor(){
        super('/showcase/angular/appointmentplanner/#/dashboard')
        

    }
   
}

//module.exports = DashboardPage; //no funciona de este modo como en tutorial
export default DashboardPage;