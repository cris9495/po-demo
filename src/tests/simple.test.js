import AddDoctorComponent from '../po/components/doctors/add-doctor.component.js';
import DashboardPage from '../po/pages/dashboard.page.js';
import DoctorsPage from '../po/pages/doctors.page.js';


const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();
const doctorComponent = new AddDoctorComponent();

describe('doctor page', () => {
    beforeEach(async() => {
        await dashboardPage.open()
        
    });

    it('check page title', async() =>{
        /* 
        const title = await browser.getTitle()
        console.log(title)
        if ( title !== 'Appointment Planner'){
            throw new Error('Page title isn"t correct');
        }
       **/


        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')

        
    });

    it('Open modal window for adding a new doctor', async () => {
    // click on doctors item in the side menu
    await dashboardPage.sideMenu.item('doctors').click();
    
    // click on add new doctor btn
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    
    // check that a modal window is displayed
    //await expect($('.new-doctor-dialog')).toBeDisplayed();
    await expect(doctorsPage.addDoctorModal.rootEL).toBeDisplayed();
    });

    it('Add a new doctor', async () => {

        // click on doctors item in the side menu
        //await $('[routerlink="/doctors"]').click();
        await dashboardPage.sideMenu.item('doctors').click();

        // click on add new doctor btn
        await $('.specialization-types button.e-control').click();

        // wait for visibility of modal window
        await $('.new-doctor-dialog').waitForDisplayed();

        // Fill out the form fields
        await doctorComponent.input('name').setValue('John Doe');
        await doctorComponent.input('name').setValue('John Doe');
        await doctorComponent.input('phone').setValue('1111111111');
        await doctorComponent.input('email').setValue('test@test.com');
        await doctorComponent.input('education').setValue('Basic');
        await doctorComponent.input('designation').setValue('Test');

        

        // Click the Save/Primary button in the footer
        await doctorComponent.saveBtn.click();

        // Assert that the modal is no longer displayed
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

        // Assert that the new doctor details are visible in the list
        await expect($('#Specialist_8 .name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8 .education')).toHaveText('Basic', {ignoreCase: true});
           
    });

    it('Close a modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await doctorComponent.closeBtn.click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
        });
})