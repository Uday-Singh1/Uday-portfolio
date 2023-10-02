document.addEventListener("DOMContentLoaded", function () {
    // Haal de knoppen op
    const projectsBtn = document.querySelector('.header__button--projects');
    const aboutBtn = document.querySelector('.header__button--about');
    const contactBtn = document.querySelector('.header__button--contact');
    // const homeBtn = document.querySelector('.header__button--home');

    // Voeg scrollgedrag toe aan de knoppen
    projectsBtn.addEventListener('click', () => {
        document.querySelector('.section--projects').scrollIntoView({ behavior: 'smooth' });
    });

    aboutBtn.addEventListener('click', () => {
        document.querySelector('.section--about').scrollIntoView({ behavior: 'smooth' });
    });

    contactBtn.addEventListener('click', () => {
        document.querySelector('.section--contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Voeg hier eventueel taalwisselfunctionaliteit toe
});


document.addEventListener('DOMContentLoaded', function () {
    const projectArticles = document.querySelectorAll('.project');

    projectArticles.forEach((article, index) => {
        article.addEventListener('click', () => {
            const popup = document.querySelector(`#project-${index + 1}-popup`);
            if (popup) {
                popup.style.display = 'block';
                const body = document.querySelector("body");
                body.style.overflowY = "hidden";
            }
        });
    });

    const closeButtons = document.querySelectorAll('.popup__close-button');

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            if (popup) {
                popup.style.display = 'none';
                const body = document.querySelector("body");
                body.style.overflowY = "auto";
                
            }
        });
    });
});



class LanguageToggle {
    constructor() {
        this.languageToggle = document.getElementById("language-toggle");
        this.headerTitle = document.querySelector(".header__title");
        this.homeBtn = document.querySelector(".header__button header__button--home")
        this.contactBtn = document.querySelector(".header__button--contact");
        this.projectsButton = document.querySelector(".header__button--projects");
        this.aboutButton = document.querySelector(".header__button--about");
    
        this.homeLink = document.getElementById("home-link");



        this.projectdescription = document.querySelector(".project__description");
        this.projectdescription2 = document.getElementById("js--language-desc-1");
        this.projectdescription3 = document.getElementById("js--language-desc-2");
        this.projectdescription4 = document.getElementById("js--language-desc-3");
        this.projectdescription5 = document.getElementById("js--language-desc-4");
        this.projectdescription6 = document.getElementById("js--language-desc-5");
        // js--language-desc-5

        this.popupdescription1 = document.getElementById("js--language-desc-popup-1");
        this.popupdescription2 = document.getElementById("js--language-desc-popup-2");
        this.popupdescription3 = document.getElementById("js--language-desc-popup-3");
        this.popupdescription4 = document.getElementById("js--language-desc-popup-4");
        this.popupdescription5 = document.getElementById("js--language-desc-popup-5");
        this.popupdescription6 = document.getElementById("js--language-desc-popup-6");


        this.popupcodebutton1 = document.getElementById("js--sourcecode--view1");
        this.popupcodebutton2 = document.getElementById("js--sourcecode--view2");
        this.popupcodebutton3 = document.getElementById("js--sourcecode--view3");
        this.popupcodebutton4 = document.getElementById("js--sourcecode--view4");
        this.popupcodebutton5 = document.getElementById("js--sourcecode--view5");
        this.popupcodebutton6 = document.getElementById("js--sourcecode--view6");

        this.popuplivebutton1 = document.getElementById("js--live--view1");
        this.popuplivebutton2 = document.getElementById("js--live--view2");
        this.popuplivebutton3 = document.getElementById("js--live--view3");
        this.popuplivebutton4 = document.getElementById("js--live--view4");
        this.popuplivebutton5 = document.getElementById("js--live--view5");
        this.popuplivebutton6 = document.getElementById("js--live--view6");


     

        this.abouttitle = document.getElementById("js--about--title");
        this.aboutdescription = document.getElementById("js--about--description");

        this.featuredtitle = document.getElementById("js--featured--title");
        this.featureddescription = document.getElementById("js--featured--description");

        this.skilldescription1 = document.getElementById("js--language--description--1");
        this.skilldescription2 = document.getElementById("js--language--description--2");
        this.skilldescription3 = document.getElementById("js--language--description--3");
        this.skilldescription4 = document.getElementById("js--language--description--4");
        this.skilldescription5 = document.getElementById("js--language--description--5");
        this.skilldescription6 = document.getElementById("js--language--description--6");
        // this.typedtext = document.querySelector(".typing__text");

        this.contactformmessage = document.getElementById("js--contact-form__bericht")
        this.viewmorebutton = document.querySelector(".view-more");
        this.mycvbutton = document.querySelector(".mijn__cv__button");
        this.contactformbutton = document.querySelector(".contact-form__button");
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.languageToggle.addEventListener("click", () => this.toggleLanguage());
    }

    toggleLanguage() {
        if (this.languageToggle.textContent === "Taal") {
            this.languageToggle.textContent = "Language";
            this.headerTitle.textContent = "UDAY SINGH";
            this.projectsButton.textContent = "My Projects";
            this.aboutButton.textContent = "About Me";
            this.contactBtn.textContent = "Contact";

            this.homeLink.textContent = "Home";

            this.projectdescription.textContent = "Here I made a YouTube clone with the house style of the Twitch streaming platform.";
            this.projectdescription2.textContent = "In this project I recreated the front page of popular course website Udemy in HTML&CSS and JS.";
            this.projectdescription3.textContent = "Here I took inspiration from my favorite color website, Colorhunt so I made my own color picker.";
            this.projectdescription4.textContent = "In this project I had created a banking application with data extracted from the json and displayed.";
            this.projectdescription5.textContent = "Here i had made a font changer where you put in a text and you will see the text in different font.";
            this.projectdescription6.textContent = "In this project I made an encrypter and decrypter, it is a fun and valuable project.";
            
            this.popupdescription1.textContent = "Here I had made a YouTube clone with the home style of the Twitch streaming platform, I had used local videos but I plan to recreate this with real video links from YouTube, this was completely rendered in JavaScript and it was quite challenging.";
            this.popupdescription2.textContent = "In this project, my goal was to duplicate the primary webpage of Udemy, a well-known online course platform. Using HTML, CSS, and JavaScript, I meticulously recreated the look and functionality of Udemy's homepage. This hands-on project provided me with valuable insights into web development while allowing me to explore the design choices and interactive elements that make Udemy's website so popular.";
            this.popupdescription3.textContent = "Here I was inspired by my favorite color website, Colorhunt. That's why I decided to make my own color picker. Using HTML, CSS and JavaScript, I've created a handy tool that makes it easy to choose and experiment with colors. This creative venture gave me the opportunity to develop my artistic side while developing my web development skills.";
            
            this.popupdescription4.textContent = "In this project, I designed a banking application that displays data from a JSON source. Using this JSON data, I built a user-friendly banking interface, making it easier for users to access and interact with their account information. This project allowed me to enhance my skills in web development while creating a convenient tool for managing banking data.";
            this.popupdescription5.textContent = "In this project, I created a simple yet fun tool that allows you to change the font of a text you input. When you enter your text, you can instantly see it displayed in various fonts. This project was a delightful exploration of font styles and coding, providing an enjoyable way to experiment with different text looks.";
            this.popupdescription6.textContent = "In this project, I developed a tool that can both encrypt and decrypt messages. It's a project that combines fun and practicality, allowing users to encode and decode messages for various purposes. This endeavor not only provided an enjoyable coding experience but also offered valuable insights into data security and encryption techniques, making it a rewarding and educational project.";

            this.popupcodebutton1.textContent = "View Sourcecode";
            this.popuplivebutton1.textContent = "View Live";

        
            this.popupcodebutton2.textContent = "View Sourcecode";
            this.popuplivebutton2.textContent = "View Live";


            this.popupcodebutton3.textContent = "View Sourcecode";
            this.popuplivebutton3.textContent = "View Live";


            this.popupcodebutton4.textContent = "View Sourcecode";
            this.popuplivebutton4.textContent = "View Live";


            this.popupcodebutton5.textContent = "View Sourcecode";
            this.popuplivebutton5.textContent = "View Live";


            this.popupcodebutton6.textContent = "View Sourcecode";
            this.popuplivebutton6.textContent = "View Live";

          




            
            // this.viewmorebutton.textContent = "View More";
            // this.mycvbutton.textContent = "My CV";
            // this.contactformbutton.textContent = "Send";
            // this.contactformmessage.textContent = "Message:";
            // // this.typedtext.textContent = "Uday Singh - SoftwareDeveloper";
            // this.abouttitle.textContent = "About Me";
            // this.aboutdescription.textContent = "I am a passionate software developer. My expertise includes HTML, CSS, JavaScript and other modern web technologies.";
            // this.featuredtitle.textContent = "Featured Project"
            // this.featureddescription.textContent = "This is an awesome project I've been working on. It shows my skills in Software and Hardware."


            // this.skilldescription1.textContent = "I am able to write Semantic HTML code and structure the codes well for a clearer experience.";
            // this.skilldescription2.textContent = "I'm a big fan of design, so I really like CSS, not only creating beautiful elements but also beautiful animations.";
            // this.skilldescription3.textContent = "Scss has taught me how to divide my CSS and therefore work on my projects in a categorized manner.";
            // this.skilldescription4.textContent = "I find JavaScript very interesting, especially because of the countless possibilities it offers, it really takes your project to a completely different level and it is really a challenge sometimes, which I like.";
            // this.skilldescription5.textContent = "I am a big fan of designing, I always try to make everything as unique as possible so that it really radiates my personality, of course I can work well if there are requirements for the design in terms of layout.";
            // this.skilldescription6.textContent = "In my spare time, in addition to programming, I also often work on video/photo editing, mainly with Adobe After Effects and Premiere Pro, I really enjoy making those types of projects.";
        } else {
            this.languageToggle.textContent = "Taal";
            this.headerTitle.textContent = "UDAY SINGH";
            this.projectsButton.textContent = "Mijn Projecten";
            this.aboutButton.textContent = "Over Mij";
            this.contactBtn.textContent = "Contact";

            this.homeLink.textContent = "Thuis";
           

            this.projectdescription.textContent = "Hier had ik een youtube clone gemaakt met de huiststyle van de Twitch streaming platform.";
            this.projectdescription2.textContent = "In dit project had ik de voorpagina van populaire cursus website Udemy nagemaakt in html&css en js.";
            this.projectdescription3.textContent = "Hier nam ik inspiratie van mijn favoriete kleuren website, Colorhunt dus ik had mijn eigen colorpicker gemaakt.";
            this.projectdescription4.textContent = "In dit project had ik een bank applicatie gemaakt met data dat uit de json was gehaald en werd getoond.";
            this.projectdescription5.textContent = "Hier had ik een lettertypewisselaar gemaakt waarin je een tekst invoert en je de tekst in een ander lettertype ziet.";
            this.projectdescription6.textContent = "In dit project heb ik een encrypter en decrypter gemaakt, het is een leuke en waardevolle project.";
 
            this.popupdescription1.textContent = "Hier had ik een YouTube-kloon gemaakt met de huisstijl van het Twitch-streamingplatform, ik had lokale video's gebruikt maar ik ben van plan dit opnieuw te maken met echte videolinks van YouTube, dit werd volledig weergegeven in JavaScript en het was een behoorlijke uitdaging."
            this.popupdescription2.textContent = "In dit project was het mijn doel om de primaire webpagina van Udemy, een bekend online cursusplatform, te dupliceren. Met behulp van HTML, CSS en JavaScript heb ik het uiterlijk en de functionaliteit van de startpagina van Udemy minutieus nagebootst. Dit praktijkgerichte project gaf mij waardevolle inzichten in webontwikkeling en stelde mij in staat de ontwerpkeuzes en interactieve elementen te verkennen die de website van Udemy zo populair maken."
            this.popupdescription3.textContent = "Hier liet ik me inspireren door mijn favoriete kleurenwebsite, Colorhunt. Daarom besloot ik mijn eigen colorpicker te maken. Met behulp van HTML, CSS en JavaScript heb ik een handige tool gecreëerd waarmee je gemakkelijk kleuren kunt kiezen en experimenteren. Deze creatieve onderneming gaf me de kans om mijn artistieke kant te uiten terwijl ik mijn webontwikkelingsvaardigheden verbeterde."
            
            this.popupdescription4.textContent = "Voor dit project heb ik een bankapplicatie gemaakt waarbij ik gegevens uit een JSON-bestand heb gebruikt en deze op het scherm heb weergegeven. Het was een leerzame ervaring in het bouwen van een applicatie om financiële informatie te beheren."
            this.popupdescription5.textContent = "In een ander project heb ik een lettertypewisselaar ontwikkeld. Hiermee kun je een tekst invoeren en meteen bekijken hoe die tekst eruitziet in verschillende lettertypen. Het was een leuke uitdaging die me hielp mijn programmeervaardigheden verder te ontwikkelen."
            this.popupdescription6.textContent = "Een ander interessant project dat ik heb gedaan, is het maken van een encryptie- en decryptietool. Hiermee kun je berichten coderen en decoderen, wat niet alleen leuk is, maar ook waardevol voor het begrijpen van beveiligingsconcepten."

            this.popupcodebutton1.textContent = "Bekijk De Broncode";
            this.popuplivebutton1.textContent = "Bekijk Live";


            this.popupcodebutton2.textContent = "Bekijk De Broncode";
            this.popuplivebutton2.textContent = "Bekijk Live";


            this.popupcodebutton3.textContent = "Bekijk De Broncode";
            this.popuplivebutton3.textContent = "Bekijk Live";


            this.popupcodebutton4.textContent = "Bekijk De Broncode";
            this.popuplivebutton4.textContent = "Bekijk Live";


            this.popupcodebutton5.textContent = "Bekijk De Broncode";
            this.popuplivebutton5.textContent = "Bekijk Live";


            this.popupcodebutton6.textContent = "Bekijk De Broncode";
            this.popuplivebutton6.textContent = "Bekijk Live";


            this.viewmorebutton.textContent = "Zie Meer";
            this.mycvbutton.textContent = "Mijn CV"
            this.contactformbutton.textContent = "Verstuur";
            this.contactformmessage.textContent = "Bericht:";
            // this.typedtext.textContent = "Uday Singh - Software Ontwikkelaar";
            this.abouttitle.textContent = "Over Mij";
            this.aboutdescription.textContent = "Ik ben een gepassioneerde softwareontwikkelaar. Mijn expertise omvat HTML, CSS, JavaScript en andere moderne webtechnologieën. ";
            this.featuredtitle.textContent = "Uitgelicht project"
            this.featureddescription.textContent = "Dit is een geweldig project waar ik aan heb gewerkt. Het toont mijn vaardigheden op het gebied van Software en Hardware."

            this.skilldescription1.textContent = "Ik ben instaat om Semantische html code te schrijven en de codes goed te structuren voor een overzichtelijkere ervaring.";
            this.skilldescription2.textContent = "Ik ben heel erg fan van design dus ik kan me goed vinden in css,om niet alleen mooie elementen te maken maar ook mooie animaties."
            this.skilldescription3.textContent = "Scss heeft me geleerd hoe ik mijn css kan verdelen en dus ook gecategoriseerd kan gaan werken aan mijn projecten.";
            this.skilldescription4.textContent = "Ik vind javascript heel interresant, vooral wegens de ontelbare mogelijkheden dat het bied, het neemmt je project echt op een hele andere niveau en het is ook echt een uitdaging soms wat ik dus fijn vind.";
            this.skilldescription5.textContent = "Ik ben heel erg fan van designing, ik probeer alles altijd zo uniek mogelijk te maken dat het dus ook echt mijn personaliteit uitstraalt, uiteraard kan ik goed werken als er eisen zijn aan het design wat betreft opmaak.";
            this.skilldescription6.textContent = "In mijn vrije tijd naast het programmeren ben ik ook vaak bezig met video/foto editing voornamelijk met Adobe After Effects en Premiere Pro, ik vind het heel erg leuk om ook dat soort projecten te maken.";

        }
    }
}

// Maakt een nieuw LanguageToggle object nadat de pagina is geladen
window.addEventListener("load", () => {
    const languageToggle = new LanguageToggle();
});


// class ButtonHandler {
//     constructor(buttonId, targetPage) {
//         this.button = document.getElementById("js--view-more");
        

//       this.targetPage = targetPage;
//       this.addClickHandler();
//     }
  
//     addClickHandler() {
//       this.button.addEventListener("click", () => {
//         this.navigateToPage();
//       });
//     }
  
//     navigateToPage() {
//       window.location.href = this.targetPage;
//     }
//   }
  

// const bekijkMeerButton = new ButtonHandler("bekijk-meer", "projecten.html");


class ScrollToTopButton {
    constructor() {
        this.button = document.getElementById("scroll-to-top");
        if (this.button) {
            this.addEventListeners();
            this.toggleVisibility(); // Voer de functie onmiddellijk uit bij het laden van de pagina
        }
    }

    addEventListeners() {
        window.addEventListener("scroll", () => this.toggleVisibility());
        window.addEventListener("resize", () => this.toggleVisibility()); // Voeg een eventlistener toe voor schermformaatwijzigingen
        this.button.addEventListener("click", () => this.scrollToTop());
    }

    toggleVisibility() {
        const isSmallScreen = window.innerWidth <= 768; // Aanpassen aan gewenste schermgrootte
        if (isSmallScreen || window.scrollY < 0) {
            this.button.style.display = "none"; // Verberg de knop op kleinere schermen of wanneer bovenaan bent
        } else {
            this.button.style.display = "block"; // Toon de knop in andere gevallen
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = new ScrollToTopButton();
});
