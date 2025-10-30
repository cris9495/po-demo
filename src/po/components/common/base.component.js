class BaseComponent{

    constructor(rootSelector){
        this.rootSelector = rootSelector;
    }


    get rootEL(){
        return $(this.rootSelector);
    }
}

export default BaseComponent;