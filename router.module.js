"use strict";
exports.__esModule = true;
var faq_model_1 = require("./faq.model");
var express = require("express");
var hbs = require("hbs");
var fs = require("fs");
var menu = {
    services: [
        { url: "/leads", label: "Lead generation" },
        { url: "/training", label: "Training" },
        { url: "/pastel-teams", label: "Pastel for teams" },
        { url: "/pastel-agencies", label: "Pastel for agencies" }
    ],
    company: [
        { url: "/process", label: "Our process" },
        { url: "/contact", label: "Contact us" },
        { url: "/about", label: "About us" },
        { url: "/faq", label: "FAQ's" },
        { url: "/disclosure", label: "Disclosure" },
    ],
    legal: [
        { url: "/privacy", label: "Privacy policy" },
        { url: "/terms", label: "Terms of service" },
        { url: "/disclaimer", label: "DCMA disclaimer" },
        { url: "/paia", label: "PAIA" }
    ],
    notes: [
        { url: "/windows-updates", label: "Automatic windows updates blocker" },
        { url: "/001-NodeJs-Masterclass", label: "Node JS Masterclass" },
        { url: "/affiliate-pages", label: "Getting your page ready" },
        { url: "/affiliate-page-rankings", label: "Work on your rankings" },
        { url: "/affiliate-commissions", label: "Earning commission" },
        { url: "/effective-affiliates-website", label: "Effective affiliates website" }
    ],
    careers: [
        { url: "/login", label: "Earn with facebook" },
        { url: "/login", label: "Earn with twitter" },
        { url: "/login", label: "Earn with instagram" }
    ]
};
var app = express();
app.use(express.static(__dirname + '/'));
app.set('view engine', 'hbs');
app.get('/', function (request, response) {
    response.render('default', {
        menu: menu,
        page: {
            title: "NextJob, your brighter futuristic headstart",
            description: "discover nextjob.co.za your portal for jobs, news, tech and reviews website"
        }
    });
});
app.get('/001-NodeJs-Masterclass', function (request, response) {
    response.render('nodejs-masterclass-001.hbs', {
        menu: menu,
        page: {
            title: "Node js Express, Handlebars Masterclass Introduction",
            description: "Node JS Masterclass - Introduction to NodeJs for Beginners and advanced"
        }
    });
});
app.get('/about', function (request, response) {
    response.render('about', {
        menu: menu,
        page: {
            title: "Everything about nextjob way of service delivery",
            description: "At NextJob we learn from you and expect you to learn more from us as much as you need too"
        }
    });
});
app.get('/process', function (request, response) {
    response.render('process', {
        menu: menu,
        page: {
            title: "Our unique process for success at nextjob",
            description: "At NextJob we learn from you and expect you to learn more from us as much as you need too"
        }
    });
});
app.get('/privacy', function (request, response) {
    response.render('privacy', {
        menu: menu,
        page: {
            title: "Privacy policy document for visitors",
            description: "At NextJob we urge you to read through our privacy policy to better understand how we use your digital information"
        }
    });
});
app.get('/leads', function (request, response) {
    response.render('leads', {
        menu: menu,
        page: {
            title: "Generate leads for your business with nextjob",
            description: "Lead generation the fastest way for any business"
        }
    });
});
app.get('/terms', function (request, response) {
    response.render('terms', {
        menu: menu,
        page: {
            title: "NextJob Recruitment Terms of Service",
            description: "At NextJob we have outlined our terms of service which might be very important for you to read"
        }
    });
});
app.get('/disclaimer', function (request, response) {
    response.render('disclaimer', {
        menu: menu,
        page: {
            title: "Disclaimer",
            description: "website disclaimer"
        }
    });
});
app.get('/paia', function (request, response) {
    response.render('PAIA', {
        menu: menu,
        page: {
            title: "Promotion of Access to Information Act",
            description: "Promotion of Access to Information"
        }
    });
});
app.get('/faq', function (request, response) {
    response.render('faq', {
        menu: menu,
        page: {
            title: "Frequently Asked Questions",
            description: "At NextJob we compiled a list of questions to go through before contacting us, if your answers are not listed here do not hesitate to reach us"
        },
        faqs: faq_model_1.frequentlyAskedModel.dataServe()
    });
});
app.get('/contact', function (request, response) {
    response.render('contact', {
        menu: menu,
        page: {
            title: "contact us | nextjob.co.za",
            description: "nextjob.co.za consultants contact information"
        }
    });
});
app.get('/training', function (request, response) {
    response.render('training', {
        menu: menu,
        page: {
            title: "Outgrow training materials for digital marketers",
            description: "nextjob.co.za, explore training material for outgrow"
        }
    });
});
app.get('/affiliate-pages', function (request, response) {
    response.render('affiliate-pages', {
        menu: menu,
        page: {
            title: "Your first affiliate page using nextjob guidelines",
            description: "Complete guidelines on how to setup your landing pages"
        }
    });
});
app.get('/affiliate-page-rankings', function (request, response) {
    response.render('affiliate-page-rankings', {
        menu: menu,
        page: {
            title: "How nextjob increases page rankings for affiliates",
            description: "A simple structure that improves affiliate page ranking"
        }
    });
});
app.get('/affiliate-commissions', function (request, response) {
    response.render('affiliate-commissions', {
        menu: menu,
        page: {
            title: "Increase your affiliate commissions with nextjob",
            description: "Many affiliate earnings introduce products or services to affiliate marketers\n                before understanding what an affiliate is"
        }
    });
});
app.get('/effective-affiliates-website', function (request, response) {
    response.render('effective-affiliates-website', {
        menu: menu,
        page: {
            title: "Boost monthly affiliate sales by 2% effectively on websites",
            description: "How nextjob improves site traffic for websites that do affiliate marketing"
        }
    });
});
app.get("/disclosure", function (request, response) {
    response.render('disclosure', {
        menu: menu,
        page: {
            title: "Disclosure",
            description: "Company disclosure information"
        }
    });
});
app.get("/pastel-teams", function (request, response) {
    response.render('pastel-teams', {
        menu: menu,
        page: {
            title: "Pastel for teams",
            description: "Limiting back-and-forth and enabling your team to give clear and actionable feedback will allow you to build websites that convert better"
        }
    });
});
app.get("/pastel-agencies", function (request, response) {
    response.render('pastel-agencies', {
        menu: menu,
        page: {
            title: "Pastel for agencies",
            description: "As a digital agency, you’re always under pressure to get projects done and deliver on time."
        }
    });
});
app.get('/windows-updates', function (request, response) {
    response.render('windows-updates', {
        menu: menu,
        page: {
            title: "Automatic windows (Blocker) prevent store auto updates",
            description: "Prevent windows and microsoft store updates on windows 10 for production purposes only."
        }
    });
});
app.get('/login', function (request, response) {
    response.render('login', {
        menu: menu,
        page: { title: "Login" },
        header: "Login to your account"
    });
});
app.get('/login/error', function (request, response) {
    response.render('login-error', {
        menu: menu,
        page: {
            title: "Login Error",
            description: "Account does not exist"
        }
    });
});
app.get('/how-to-register', function (request, response) {
    response.render('how-to-register', {
        menu: menu,
        page: {
            title: "How to register",
            description: "Getting your account approved"
        }
    });
});
app.get('/verification-pending', function (request, response) {
    response.render('verification-pending', {
        menu: menu,
        page: {
            title: "Verification pending",
            description: "Getting your account approved"
        }
    });
});
app.get('/verification-error', function (request, response) {
    response.render('verification-error', {
        menu: menu,
        page: {
            title: "Failed verification",
            description: "Getting your account approved"
        }
    });
});
module.exports = app;
