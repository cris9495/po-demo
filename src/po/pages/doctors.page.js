import AddDoctorComponent from "../components/doctors/add-doctor.component";
import ListHeaderComponent from "../components/doctors/list-header.component";
import BasePage from "./base.page";

class DoctorsPage extends BasePage {
    constructor(){
        super('/showcase/angular/appointmentplanner/#/doctors');
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }

   
}

export default DoctorsPage;