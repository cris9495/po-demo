import BaseComponent from "../common/base.component";

class AddDoctorComponent extends BaseComponent{

    constructor(){
        super('.new-doctor-dialog');
    }

    /**
     * Finds a specific input field within the Add Doctor modal.
     * @param {string} name - Must be one of 'name', 'phone', 'email', 'education', or 'designation'.
     * @returns {WebdriverIO.Element} The element corresponding to the input field.
     */
    input(name) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        };
        
        // This relies on the BaseComponent providing a 'rootEL' getter.
        // It finds the element inside the modal based on the name parameter.
        return this.rootEL.$(selectors[name.toLowerCase()]);
    }
  
}


export default AddDoctorComponent;