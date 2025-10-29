class SideMenuComponent {
    get rootEL() {
        return $('#plannerSiderBar');
    }

    get name() {
        return this.rootEL.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]'
        };
        return this.rootEL.$(selectors[param.toLowerCase()]);
    }
} 

export default SideMenuComponent;