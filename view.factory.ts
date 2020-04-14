import fs from 'fs';
import Handlebars from 'handlebars'; 
/**
 * Creates view
 */
export class View{
    constructor(){
        
    }
    Config (fileSrc: any, viewBag: Object){
        let template: any = fs.readFileSync(fileSrc, 'utf8');
        let compiled_view = Handlebars.compile(template);
        return compiled_view(viewBag);
    };
}