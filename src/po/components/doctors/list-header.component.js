import BaseComponent from "../common/base.component";

class ListHeaderComponent extends BaseComponent {
    constructor(){
        super('.specialization-types');
    }
   
    get addNewDoctorBtn() {
        return this.rootEL.$('button.e-control');
    }
}

export default ListHeaderComponent;