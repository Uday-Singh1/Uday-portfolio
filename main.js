document.addEventListener("DOMContentLoaded", function () {
    // Haal de knoppen op
    const projectsBtn = document.querySelector('.header__button--projects');
    const aboutBtn = document.querySelector('.header__button--about');
    const contactBtn = document.querySelector('.header__button--contact');
    const moreBtn = document.querySelector('.landing__button');

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

    moreBtn.addEventListener('click', () => {
        document.querySelector('.section--projects').scrollIntoView({ behavior: 'smooth' });
    });

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
        this.projectsButton = document.querySelector(".header__button--projects");
        this.aboutButton = document.querySelector(".header__button--about");
        this.contactButton = document.querySelector(".header__button--contact");

        this.homeLink = document.getElementById("home-link");

        this.projectdescription = document.querySelector(".project__description");
        this.projectdescription2 = document.getElementById("js--language-desc-1");
        this.projectdescription3 = document.getElementById("js--language-desc-2");


        this.popupdescription1 = document.getElementById("js--language-desc-popup-1");
        this.popupdescription2 = document.getElementById("js--language-desc-popup-2");
        this.popupdescription3 = document.getElementById("js--language-desc-popup-3");

        this.popupcodebutton1 = document.getElementById("js--sourcecode--view1");
        this.popupcodebutton2 = document.getElementById("js--sourcecode--view2");
        this.popupcodebutton3 = document.getElementById("js--sourcecode--view3");
    

        this.popuplivebutton1 = document.getElementById("js--live--view1");
        this.popuplivebutton2 = document.getElementById("js--live--view2");
        this.popuplivebutton3 = document.getElementById("js--live--view3");


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

        this.viewmorebutton = document.querySelector(".view-more");
        this.mycvbutton = document.querySelector(".mijn__cv__button");
        this.featuredbutton = document.querySelector(".featured-project__button")

        this.contacttitle = document.getElementById("js--contact--title");
        this.contactname = document.getElementById("js--contact--name");
        this.contactmail = document.getElementById("js--contact--mail");
        this.contactbericht = document.getElementById("js--contact--bericht");
        this.contactsendbutton = document.querySelector(".contact-form__button");
      
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
            this.contactButton.textContent = "Contact";

            
            this.projectdescription.textContent = "Here I made a YouTube clone with the house style of the Twitch streaming platform.";
            this.projectdescription2.textContent = "In this project I recreated the front page of popular course website Udemy in HTML&CSS and JS.";
            this.projectdescription3.textContent = "Here I took inspiration from my favorite color website, Colorhunt so I made my own color picker.";

            this.popupdescription1.textContent = "Here I had made a YouTube clone with the home style of the Twitch streaming platform, I had used local videos but I plan to recreate this with real video links from YouTube, this was completely rendered in JavaScript and it was quite challenging.";
            this.popupdescription2.textContent = "In this project, my goal was to duplicate the primary webpage of Udemy, a well-known online course platform. Using HTML, CSS, and JavaScript, I meticulously recreated the look and functionality of Udemy's homepage. This hands-on project provided me with valuable insights into web development while allowing me to explore the design choices and interactive elements that make Udemy's website so popular.";
            this.popupdescription3.textContent = "Here I was inspired by my favorite color website, Colorhunt. That's why I decided to make my own color picker. Using HTML, CSS and JavaScript, I've created a handy tool that makes it easy to choose and experiment with colors. This creative venture gave me the opportunity to develop my artistic side while developing my web development skills.";

            this.popupcodebutton1.textContent = "View Sourcecode";
            this.popuplivebutton1.textContent = "View Live";

        
            this.popupcodebutton2.textContent = "View Sourcecode";
            this.popuplivebutton2.textContent = "View Live";


            this.popupcodebutton3.textContent = "View Sourcecode";
            this.popuplivebutton3.textContent = "View Live";


           
            
            this.viewmorebutton.textContent = "View More";
            this.mycvbutton.textContent = "My CV";
            // this.typedtext.textContent = "Uday Singh - SoftwareDeveloper";
            this.abouttitle.textContent = "About Me";
            this.aboutdescription.textContent = "I am a software developer with a passion for design and soccer. Quality is my top priority, and I am always willing to learn and grow. Outside of work, I enjoy my love for soccer, which motivates me and keeps me active. I am dedicated to delivering excellent results in everything I do.";
            this.featuredtitle.textContent = "Featured Project";
            this.featureddescription.textContent = "This is an awesome project I've been working on. It shows my skills in Software and Hardware.";
            this.featuredbutton.textContent = "View Sourcecode";


            this.skilldescription1.textContent = "I am able to write Semantic HTML code and structure the codes well for a clearer experience.";
            this.skilldescription2.textContent = "I'm a big fan of design, so I really like CSS, not only creating beautiful elements but also beautiful animations.";
            this.skilldescription3.textContent = "Scss has taught me how to divide my CSS and therefore work on my projects in a categorized manner.";
            this.skilldescription4.textContent = "I find JavaScript very interesting, especially because of the countless possibilities it offers, it really takes your project to a completely different level and it is really a challenge sometimes, which I like.";
            this.skilldescription5.textContent = "I am a big fan of designing, I always try to make everything as unique as possible so that it really radiates my personality, of course I can work well if there are requirements for the design in terms of layout.";
            this.skilldescription6.textContent = "In my spare time, in addition to programming, I also often work on video/photo editing, mainly with Adobe After Effects and Premiere Pro, I really enjoy making those types of projects.";

            this.contacttitle.textContent = "Contact Me";
            // this.contactname.textContent = "Name";
            // this.contactmail.textContent = "E-mail";
            // this.contactbericht.textContent = "Message";
            // this.contactsendbutton.textContent = "Send";
        } else {
            this.languageToggle.textContent = "Taal";
            this.headerTitle.textContent = "UDAY SINGH";
            this.projectsButton.textContent = "Mijn Projecten";
            this.aboutButton.textContent = "Over Mij";
            this.contactButton.textContent = "Contact";

            // this.homeLink.textContent = "Thuis";

            this.projectdescription.textContent = "Hier had ik een youtube clone gemaakt met de huiststyle van de Twitch streaming platform.";
            this.projectdescription2.textContent = "In dit project had ik de voorpagina van populaire cursus website Udemy nagemaakt in html&css en js.";
            this.projectdescription3.textContent = "Hier nam ik inspiratie van mijn favoriete kleuren website, Colorhunt dus ik had mijn eigen colorpicker gemaakt.";

            this.popupdescription1.textContent = "Hier had ik een YouTube-kloon gemaakt met de huisstijl van het Twitch-streamingplatform, ik had lokale video's gebruikt maar ik ben van plan dit opnieuw te maken met echte videolinks van YouTube, dit werd volledig weergegeven in JavaScript en het was een behoorlijke uitdaging."
            this.popupdescription2.textContent = "In dit project was het mijn doel om de primaire webpagina van Udemy, een bekend online cursusplatform, te dupliceren. Met behulp van HTML, CSS en JavaScript heb ik het uiterlijk en de functionaliteit van de startpagina van Udemy nagemaakt. Dit project gaf mij een boost in webontwikkeling en interactieve elementen."
            this.popupdescription3.textContent = "Hier liet ik me inspireren door mijn favoriete kleurenwebsite, Colorhunt. Daarom besloot ik mijn eigen colorpicker te maken. Met behulp van HTML, CSS en JavaScript heb ik een handige tool gecreëerd waarmee je gemakkelijk kleuren kunt kiezen. Dit project gaf me de kans om mijn webontwikkelingsvaardigheden te verbeteren."

            this.popupcodebutton1.textContent = "Bekijk De Broncode";
            this.popuplivebutton1.textContent = "Bekijk Live";


            this.popupcodebutton2.textContent = "Bekijk De Broncode";
            this.popuplivebutton2.textContent = "Bekijk Live";


            this.popupcodebutton3.textContent = "Bekijk De Broncode";
            this.popuplivebutton3.textContent = "Bekijk Live";
           

            this.viewmorebutton.textContent = "Zie Meer";
            this.mycvbutton.textContent = "Mijn CV"
            // this.typedtext.textContent = "Uday Singh - Software Ontwikkelaar";
            this.abouttitle.textContent = "Over Mij";
            this.aboutdescription.textContent = "Ik ben een softwareontwikkelaar met een passie voor design en voetbal. Kwaliteit staat bij mij voorop, en ik ben altijd bereid om te leren en te groeien. Buiten mijn werk geniet ik van mijn liefde voor voetbal, wat me motiveert en in beweging houdt. Ik ben toegewijd aan het leveren van uitstekende resultaten in alles wat ik doe.";

            this.featuredtitle.textContent = "Uitgelicht project";
            this.featureddescription.textContent = "Dit is een geweldig project waar ik aan heb gewerkt. Het toont mijn vaardigheden op het gebied van Software en Hardware.";
            this.featuredbutton.textContent = "Bekijk Broncode";

            this.skilldescription1.textContent = "Ik ben instaat om Semantische html code te schrijven en de codes goed te structuren voor een overzichtelijkere ervaring.";
            this.skilldescription2.textContent = "Ik ben heel erg fan van design dus ik kan me goed vinden in css,om niet alleen mooie elementen te maken maar ook mooie animaties.";
            this.skilldescription3.textContent = "Scss heeft me geleerd hoe ik mijn css kan verdelen en dus ook gecategoriseerd kan gaan werken aan mijn projecten.";
            this.skilldescription4.textContent = "Ik vind javascript heel interresant, vooral wegens de ontelbare mogelijkheden dat het bied, het neemmt je project echt op een hele andere niveau en het is ook echt een uitdaging soms wat ik dus fijn vind.";
            this.skilldescription5.textContent = "Ik ben heel erg fan van designing, ik probeer alles altijd zo uniek mogelijk te maken dat het dus ook echt mijn personaliteit uitstraalt, uiteraard kan ik goed werken als er eisen zijn aan het design wat betreft opmaak.";
            this.skilldescription6.textContent = "In mijn vrije tijd naast het programmeren ben ik ook vaak bezig met video/foto editing voornamelijk met Adobe After Effects en Premiere Pro, ik vind het heel erg leuk om ook dat soort projecten te maken.";

            this.contacttitle.textContent = "Neem contact op";
            // this.contactname.textContent = "Naam";
            // this.contactmail.textContent = "E-mail";
            // this.contactbericht.textContent = "Bericht";
            // this.contactsendbutton.textContent = "Verzenden";
        }
    }
}

// Maakt een nieuw LanguageToggle object nadat de pagina is geladen
window.addEventListener("load", () => {
    const languageToggle = new LanguageToggle();
});


class Typewriter {
    constructor(element, text, delay) {
        this.element = element;
        this.text = text;
        this.delay = delay;
        this.index = 0;
        this.currentText = '';
        this.type();
    }

    type() {
        const currentText = this.text[this.index];
        if (this.currentText !== currentText) {
            this.currentText = currentText.substring(0, this.currentText.length + 1);
        }

        this.element.textContent = this.currentText;

        if (this.currentText === currentText) {
            this.index = (this.index + 1) % this.text.length;
        }

        setTimeout(() => this.type(), this.delay);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Define the delay here
    const delay = 100; // Set the desired typing speed (in milliseconds)

    // Add this code for the landing__text paragraph
    const landingText = document.querySelector('#landing--text--language');
    const landingTextContent = 'Hi, I am Uday Singh and I am a software developer.';
    const landingTypewriter = new Typewriter(landingText, [landingTextContent], delay);

    // Add this code to make the button fade in after the typewriter has finished typing
    setTimeout(() => {
        const landingButton = document.querySelector('.landing__button');
        landingButton.style.opacity = 1;
    }, landingTextContent.length * delay);
});


    // const typewriterText = document.querySelector('.typing__text');
    // const text = ['UDAY SINGH - SOFTWARE DEVELOPER.'];
    // const delay = 100; // Set the desired typing speed (in milliseconds)

    // const typewriter = new Typewriter(typewriterText, text, delay);

   



class ButtonHandler {
    constructor(buttonId, targetPage) {
        this.button = document.getElementById("js--view-more");
        

      this.targetPage = targetPage;
      this.addClickHandler();
    }
  
    addClickHandler() {
      this.button.addEventListener("click", () => {
        this.navigateToPage();
      });
    }
  
    navigateToPage() {
      window.location.href = this.targetPage;
    }
  }
  

const bekijkMeerButton = new ButtonHandler("bekijk-meer", "projecten.html");




class ScrollToTopButton {
    constructor() {
        this.button = document.getElementById("scroll-to-top");
        this.isPopupOpen = false;
        this.addEventListeners();
        this.toggleVisibility();
    }

    addEventListeners() {
        window.addEventListener("scroll", () => this.toggleVisibility());
        window.addEventListener("resize", () => this.toggleVisibility());
        this.button.addEventListener("click", () => this.scrollToTop());

        document.addEventListener("popupOpen", () => {
            this.isPopupOpen = true;
            this.toggleVisibility();
        });
        document.addEventListener("popupClose", () => {
            this.isPopupOpen = false;
            this.toggleVisibility();
        });
    }

    toggleVisibility() {
        const isSmallScreen = window.innerWidth <= 768;
        const isAtTop = window.scrollY <= 0;
        const isPopupOpen = this.isPopupOpen;

        // Voeg een extra controle toe om te controleren of de gebruiker boven het "About Me"-gedeelte scrollt
        const isAboveAboutSection = window.scrollY <= document.querySelector(".section--about").offsetTop;

        if (isSmallScreen || isAtTop || isPopupOpen || isAboveAboutSection) {
            this.button.style.display = "none";
        } else {
            this.button.style.display = "block";
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

function openPopup() {
    document.dispatchEvent(new Event("popupOpen"));
}

function closePopup() {
    document.dispatchEvent(new Event("popupClose"));
}



