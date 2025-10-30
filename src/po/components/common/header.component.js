import BaseComponent from "./base.component";

class HeaderCOmponent extends BaseComponent{
    constructor(){
        super('.planner-header')
    }

    get logoutBtn(){
        return this.rootEL.$('logout-icon-container');
    }
}

export default HeaderCOmponent;