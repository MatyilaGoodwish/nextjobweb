import { frequentlyAskedModel } from "./faq.model";
const express = require("express"); 
const hbs = require("hbs");
const fs = require("fs");

const menu =  {
    services: [
        { url: "/leads", label:"Lead generation"},
        { url: "/training", label: "Training"},
 {url: "/pastel-teams", label: "Pastel for teams" },
        {url: "/pastel-agencies", label: "Pastel for agencies"}
    ],
    company: [
        { url: "/process", label: "Our process"},
        { url: "/contact", label: "Contact us"},
        { url: "/about", label: "About us"},
        { url: "/faq", label: "FAQ's"},
        { url: "/disclosure", label: "Disclosure"},
    ],
    legal: [
        { url: "/privacy", label: "Privacy policy" },
        { url: "/terms", label: "Terms of service" },
        { url: "/disclaimer", label: "DCMA disclaimer"},
        { url: "/paia", label: "PAIA"}
    ],
    
    notes: [
        {url: "/windows-updates", label: "Automatic windows updates blocker" },
        {url: "/001-NodeJs-Masterclass", label: "Node JS Masterclass" },
 { url: "/affiliate-pages", label: "Getting your page ready"}, 
        { url: "/affiliate-page-rankings", label: "Work on your rankings"}, 
        { url: "/affiliate-commissions", label: "Earning commission"}, 
        { url: "/effective-affiliates-website", label: "Effective affiliates website"}
    ],
    careers: [
        {url: "/login", label: "Earn with facebook" },
        {url: "/login", label: "Earn with twitter" },
        {url: "/login", label: "Earn with instagram" }
    ]
};
 
var app = express();
app.use(express.static(__dirname + '/'));

app.set('view engine', 'hbs');

app.get('/', (request: any, response: any) => {
    response.render('default', {
        menu,
        page:{
            title: "NextJob, your brighter futuristic headstart", 
            description: "discover nextjob.co.za your portal for jobs, news, tech and reviews website"
        }         
    });
});

app.get('/001-NodeJs-Masterclass', (request: any, response: any) => {
    response.render('nodejs-masterclass-001.hbs', {
        menu,
        page:{
            title: "Node js Express, Handlebars Masterclass Introduction", 
            description: "Node JS Masterclass - Introduction to NodeJs for Beginners and advanced"
        }         
    });
});

app.get('/about', (request: any, response: any) => {
    response.render('about', {
        menu,
        page:{
            title: "Everything about nextjob way of service delivery", 
            description: "At NextJob we learn from you and expect you to learn more from us as much as you need too"
        }  
    });
});

app.get('/process', (request: any, response: any) => {
    response.render('process', {
        menu,
        page:{
            title: "Our unique process for success at nextjob", 
            description: "At NextJob we learn from you and expect you to learn more from us as much as you need too"
        }  
    });
});

app.get('/privacy', (request: any, response: any) => {
    response.render('privacy', {
        menu,
        page:{
            title: "Privacy policy document for visitors", 
            description: "At NextJob we urge you to read through our privacy policy to better understand how we use your digital information"
        } 
    });
});

app.get('/leads', (request: any, response: any) => {
    response.render('leads', {
        menu,
        page:{
            title: "Generate leads for your business with nextjob", 
            description: "Lead generation the fastest way for any business"
        }  
    });
});

app.get('/terms', (request: any, response: any) => {
    response.render('terms', {
        menu,
        page:{
            title: "NextJob Recruitment Terms of Service", 
            description: "At NextJob we have outlined our terms of service which might be very important for you to read"
        }
    });
});

app.get('/disclaimer', (request: any, response: any) => {
    response.render('disclaimer', {
        menu,
        page:{
            title: "Disclaimer", 
            description: "website disclaimer"
        }
    });
});

app.get('/paia', (request: any, response: any) => {
    response.render('PAIA', {
        menu,
        page:{
            title: "Promotion of Access to Information Act", 
            description: "Promotion of Access to Information"
        }
    });
});

app.get('/faq', (request: any, response: any) => {
    response.render('faq', {
        menu,
        page:{
            title: "Frequently Asked Questions", 
            description: "At NextJob we compiled a list of questions to go through before contacting us, if your answers are not listed here do not hesitate to reach us"
        },       
            faqs: frequentlyAskedModel.dataServe()
    });
});

app.get('/contact', (request: any, response: any) => {
    response.render('contact', {
        menu,
        page:{
            title: "contact us | nextjob.co.za", 
            description: "nextjob.co.za consultants contact information"
        }
    });
});


app.get('/training', (request: any, response: any) => {
    response.render('training', {
        menu,
        page:{
            title: "Outgrow training materials for digital marketers", 
            description: "nextjob.co.za, explore training material for outgrow"
        }
    });
});

app.get('/affiliate-pages', (request: any, response: any)=>{
    response.render('affiliate-pages', {
        menu,
        page: {
            title: "Your first affiliate page using nextjob guidelines",
            description: "Complete guidelines on how to setup your landing pages"
        }
    })
})

app.get('/affiliate-page-rankings', (request: any, response: any)=>{
    response.render('affiliate-page-rankings', {
        menu,
            page: {
                title: "How nextjob increases page rankings for affiliates",
                description: "A simple structure that improves affiliate page ranking"
            }
        })
})

app.get('/affiliate-commissions', (request: any, response: any)=>{
    response.render('affiliate-commissions', {
        menu,
            page: {
                title: "Increase your affiliate commissions with nextjob",
                description: `Many affiliate earnings introduce products or services to affiliate marketers
                before understanding what an affiliate is`
            }
        })
})

app.get('/effective-affiliates-website', (request: any, response: any)=>{
     
    response.render('effective-affiliates-website', {
        menu,
            page: {
                title: "Boost monthly affiliate sales by 2% effectively on websites",
                description: "How nextjob improves site traffic for websites that do affiliate marketing"
            }
        })
})

app.get("/disclosure", (request:any, response:any)=>{
    response.render('disclosure', {
        menu,
        page: {
            title: "Disclosure",
            description:"Company disclosure information"
        }
    })
})

app.get("/pastel-teams", (request:any, response:any)=>{
    response.render('pastel-teams', {
        menu,
        page: {
            title: "Pastel for teams",
            description:"Limiting back-and-forth and enabling your team to give clear and actionable feedback will allow you to build websites that convert better"
        }
    })
})

app.get("/pastel-agencies", (request:any, response:any)=>{
    response.render('pastel-agencies', {
        menu,
        page: {
            title: "Pastel for agencies",
            description:"As a digital agency, you’re always under pressure to get projects done and deliver on time."
        }
    })
})


app.get('/windows-updates', (request: any, response: any)=>{
    response.render('windows-updates', {
        menu, 
        page: {
            title: "Automatic windows (Blocker) prevent store auto updates",
            description: "Prevent windows and microsoft store updates on windows 10 for production purposes only."
        }
    });
});

app.get('/login', (request:any, response:any)=>{
    response.render('login', {
        menu,
        page: { title: "Login"}, 
        header: "Login to your account"
    })
})

app.get('/login/error', (request:any, response:any)=>{
    response.render('login-error',{
        menu,
        page:{
            title: "Login Error",
            description: "Account does not exist"
        }
    })
});

app.get('/how-to-register', (request:any, response:any)=>{
    response.render('how-to-register',{
        menu,
        page:{
            title: "How to register",
            description: "Getting your account approved"
        }
    })
});

app.get('/verification-pending', (request:any, response:any)=>{
    response.render('verification-pending',{
        menu,
        page:{
            title: "Verification pending",
            description: "Getting your account approved"
        }
    })
});

app.get('/verification-error', (request:any, response:any)=>{
    response.render('verification-error',{
        menu,
        page:{
            title: "Failed verification",
            description: "Getting your account approved"
        }
    })
});

module.exports = app;
