//  jshint esversion:6
$(document).ready(function () {

    const games = [{
            id: 1,
            image1: "../img/headercp.jpg",
            image2: "../img/cyberpunk2.webp",
            image3: "../img/cyberpunk3.webp",
            name: "Cyberpunk 2077",
            genre: ["Cyberpunk", "Open World", "Nudity", "RGP", "Sci-fi"],
            synopsis: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
            store:"https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
        },
        {
            id: 2,
            image1: "../img/headereld.jpg",
            image2: "../img/Eldenring2.webp",
            image3: "../img/Eldenring3.webp",
            name: "Elden Ring",
            genre: ["Souls-like", "Dark Fantasy", "Open World", "RPG"],
            synopsis: "THE NEW FANTASY ACTION RPG. <br> Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
            store:"https://store.steampowered.com/app/1245620/ELDEN_RING/",
        },
        {
            id: 3,
            image1: "../img/Destiny.webp",
            image2: "../img/Destiny1.webp",
            image3: "../img/Destiny2.webp",
            name: "Destiny 2",
            genre: ["Free to Play", "Open World", "FPS", "MMORPG"],
            synopsis: " Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
            store:"https://store.steampowered.com/app/1085660/Destiny_2/",
        },
        {
            id: 4,
            image1: "../img/warframe.png",
            image2: "../img/warframe1.avif",
            image3: "../img/warframe2.jpg",
            name: "Warframe",
            genre: ["Free to Play", "RPG", "Looter Shooter", "Action"],
            synopsis: "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds in this thrilling, genre-defining third-person combat experience.",
            store:"https://store.steampowered.com/app/230410/Warframe/ ",
        },
        {
            id: 5,
            image1: "../img/Helldivers.webp",
            image2: "../img/Helldivers1.webp",
            image3: "../img/Helldivers2.webp",
            name: "HELLDIVERS™ 2",
            genre: ["Online Co-Op", "Third-Person Shooter", "Multiplayer", "Capitalism"],
            synopsis: "Freedom. Peace. Democracy. Your Super Earth-born rights. The key pillars of our civilization. Of our very existence. But the war rages on. And everything is once again under threat. Join the greatest military force the galaxy has ever seen and make this a safe and free place to live. ",
            store:"https://store.steampowered.com/app/553850/HELLDIVERS_2/",
        },
        {
            id: 6,
            image1: "../img/headerterr.jpg",
            image2: "../img/Terraria2.avif",
            image3: "../img/Terraria2.jpg",
            name: "Terraria",
            genre: ["Open World", "Survival Craft", "Sandbox", "2D"],
            synopsis: "Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter along your travels? ",
            store:"https://store.steampowered.com/app/105600/Terraria/",
        },
        {
            id: 7,
            image1: "../img/headerspace.jpg",
            image2: "../img/Spaceengineers1.webp",
            image3: "../img/Spaceengineers2.webp",
            name: "Space Engineers",
            genre: ["Space", "Sandbox", "Building", "Multiplayer"],
            synopsis: "It is a sandbox game about engineering, construction, exploration and survival in space and on planets. Players build space ships, wheeled vehicles, space stations, planetary outposts of various sizes and uses (civil and military), pilot ships and travel through space to explore planets and gather resources to survive. Featuring both creative and survival modes, there is no limit to what can be built, utilized and explored. ",
            store:"https://store.steampowered.com/app/244850/Space_Engineers/",
        },
        {
            id: 8,
            image1: "../img/headerrain.jpg",
            image2: "../img/RainbowSixSiege1.jpg",
            image3: "../img/RainbowSixSiege2.jpg",
            name: "Tom Clancy's Rainbow Six® Siege",
            genre: ["FPS", "Tactical", "eSports", "Multiplayer"],
            synopsis: " Tom Clancy's Rainbow Six® Siege is an elite, realistic, tactical team-based shooter where superior planning and execution triumph. It features 5v5 attack vs. defense gameplay and intense close-quarters combat in destructible environments.",
            store:"https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/",
        },
        {
            id: 9,
            image1: "../img/headercode.jpg",
            image2: "../img/CODEVEIN1.webp",
            image3: "../img/CODEVEIN2.webp",
            name: "CODE VEIN",
            genre: ["Souls-like", "Anime", "JRPG", "Vampire"],
            synopsis: "Team up with an AI partner or a friend in co-op multiplayer and venture out into a world of destruction in this story driven connected dungeon experience. Use your combined strength to coordinate your approach and defend each other from surprise attacks or tackle overpowered enemies. ",
            store:"https://store.steampowered.com/app/678960/CODE_VEIN/",
        },
        {
            id: 10,
            image1: "../img/headervel.jpg",
            image2: "../img/Valheim1.webp",
            image3: "../img/Valheim2.jpeg",
            name: "Valheim",
            genre: ["Open World", "Online Co-Op", "Survival", "Survival Craft"],
            synopsis: " Valheim is a brutal exploration and survival game for 1-10 players set in a procedurally-generated world inspired by Norse mythology. Craft powerful weapons, construct longhouses, and slay mighty foes to prove yourself to Odin!",
            store:"https://store.steampowered.com/app/892970/Valheim/",
        },
        {
            id: 11,
            image1: "../img/headercore.jpg",
            image2: "../img/ARMOREDCORE1.jpg",
            image3: "../img/ARMOREDCORE2.jpg",
            name: "ARMORED CORE™ VI FIRES OF RUBICON™",
            genre: ["Mechs", "Action", "Vehicular Combat", "Souls-like"],
            synopsis: " Combining FromSoftware’s longstanding expertise in mech games with their signature action gameplay, ARMORED CORE VI FIRES OF RUBICON brings a brand-new action experience to the series. ",
            store:"https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/",
        },
        {
            id: 12,
            image1: "../img/Borderlands.jpg",
            image2: "../img/Borderlands1.jpg",
            image3: "../img/Borderlands2.avif",
            name: "Borderlands 2",
            genre: ["Loot", "Shooter", "Co-Op", "Action"],
            synopsis: " A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.",
            store:"https://store.steampowered.com/app/49520/Borderlands_2/",
        },
        {
            id: 13,
            image1: "../img/headercs.jpg",
            image2: "../img/Counter-Strike1.avif",
            image3: "../img/Counter-Strike2.webp",
            name: "Counter-Strike 2",
            genre: ["FPS", "eSports", "Shooter", "Competitive"],
            synopsis: " For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2. A free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.",
            store:"https://store.steampowered.com/app/730/CounterStrike_2/",
        },
        {
            id: 14,
            image1: "../img/headerpay.jpg",
            image2: "../img/PAYDAY1.jpg",
            image3: "../img/PAYDAY2.webp",
            name: "PAYDAY 2",
            genre: ["Co-Op", "FPS", "Heist", "Crime"],
            synopsis: " PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree. ",
            store:"https://store.steampowered.com/app/218620/PAYDAY_2/",
        },
        {
            id: 15,
            image1: "../img/MonsterHunterWorld.jpg",
            image2: "../img/MonsterHunterWorld1.webp",
            image3: "../img/MonsterHunterWorld2.jpg",
            name: "Monster Hunter: World",
            genre: ["Co-Op", "RPG", "Action", "Open World"],
            synopsis: " Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts! ",
            store:"https://store.steampowered.com/app/582010/Monster_Hunter_World/",
        },
        {
            id: 16,
            image1: "../img/headertit.jpg",
            image2: "../img/Titanfall1.webp",
            image3: "../img/Titanfall2.jpg",
            name: "Titanfall® 2",
            genre: ["FPS", "Mech", "Multiplayer", "Action"],
            synopsis: " Call down your Titan and get ready for an exhilarating first-person shooter experience in Titanfall® 2! The sequel introduces a new single player campaign that explores the bond between Pilot and Titan. Or blast your way through an even more innovative and intense multiplayer experience - featuring 6 new Titans, deadly new Pilot abilities, expanded customization, new maps, modes, and much more.",
            store:"https://store.steampowered.com/app/1237970/Titanfall_2/",
        },
        {
            id: 17,
            image1: "../img/headermgr.jpg",
            image2: "../img/REVENGEANCE1.jpg",
            image3: "../img/REVENGEANCE2.jpg",
            name: "METAL GEAR RISING: REVENGEANCE",
            genre: ["Great Soundtrack", "Hack nad Slash", "Action", "Ninja,"],
            synopsis: " Developed by Kojima Productions and PlatinumGames, METAL GEAR RISING: REVENGEANCE takes the renowned METAL GEAR franchise into exciting new territory with an all-new action experience. The game seamlessly melds pure action and epic story-telling that surrounds Raiden – a child soldier transformed into a half-human, half-cyborg ninja who uses his High Frequency katana blade to cut through any thing that stands in his vengeful path!",
            store:"https://store.steampowered.com/app/235460/METAL_GEAR_RISING_REVENGEANCE/",
        },
        {
            id: 18,
            image1: "../img/headert7.jpg",
            image2: "../img/TEKKEN 71.jpg",
            image3: "../img/TEKKEN 72.jpg",
            name: "TEKKEN 7",
            genre: ["Fighting", "Action", "Multiplayer", "Competitive"],
            synopsis: " Love, Revenge, Pride. Everyone has a reason to fight. Values are what define us and make us human, regardless of our strengths and weaknesses. There are no wrong motivations, just the path we choose to take.",
            store:"https://store.steampowered.com/app/389730/TEKKEN_7/",
        },
        {
            id: 19,
            image1: "../img/Halo.webp",
            image2: "../img/Halo1.jpg",
            image3: "../img/Halo2.jpg",
            name: "Halo: The Master Chief Collection",
            genre: ["Great Soundtrack", "FPS", "Classic", "Multiplayer"],
            synopsis: " Featuring Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign, and Halo 4, The Master Chief Collection offers players their own exciting journey through the epic saga. Starting with the incredible bravery of Noble Six in Halo: Reach and ending with the rise of a new enemy in Halo 4, the Master Chief’s saga totals 67 campaign missions over six critically-acclaimed titles.",
            store:"https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/",
        },
        {
            id: 20,
            image1: "../img/headersky.jpg",
            image2: "../img/Skyrim1.jpg",
            image3: "../img/Skyrim2.jpg",
            name: "The Elder Scrolls V: Skyrim Special Edition",
            genre: ["Open World", "RPG", "Adventure", "Singleplayer"],
            synopsis: " Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
            store:"https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
        },
        {
            id: 21,
            image1: "../img/headerapex.jpg",
            image2: "../img/apex1.avif",
            image3: "../img/apex2.jpg",
            name: "Apex Legends™",
            genre: ["Free to Play", "Battle Royale", "Multiplayer", "FPS"],
            synopsis: " Conquer with character in Apex Legends, a free-to-play* Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.Master an ever-growing roster of diverse Legends, deep-tactical squad play, and bold, new innovations that go beyond the Battle Royale experience — all within a rugged world where anything goes. Welcome to the next evolution of Hero Shooter.",
            store:"https://store.steampowered.com/app/1172470/Apex_Legends/",
        },
    ];



    // FULLPAGE Initialisation
    new fullpage('#fullpage', {
        // licence
        licenseKey: 'gplv3-license', // Open Source Free licence
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows:
        // navigation: true, // comment out or remove to remove nav arrows
        controlArrows: false,

    });

    fullpage_api.setAllowScrolling(true); // prevent scroll of sections and slides
    

    // Set Up a Variable to track the User
    let user;
    // click on submit button
    $("#submitButton").click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // get input values
        const username = $("#username").val();
        const email = $("#email").val();
        const password = $("#password").val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $('#formMessage').html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
        } else if (!emailRegex.test(email)) {
            $('#formMessage').html(`<p>'Invalid email format.'</p>`);
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        } else {
            // if passed all regex tests:
            $('#formMessage').html('');
            // set user equal to the username:
            user = username;
            checkForLoggedInUser();
            // Set the logged in user span to the user value:
            $('#loggedInUser').text(user);
            // Move to slide 2 of section 1
            fullpage_api.moveTo(1, 1); // slide 2
        }
        
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log();
        } else {
            console.log(user);
            $("nav").html(`<h2> Arise <span id="loggedInUser">${user}</span>!</h2>`);
        }
    }

    checkForLoggedInUser(); // because no vlaue is assigned to user it treats it as false



    // ------- CHECKBOX LOGIC ----------
    const genreButtons = $(".genreCheck").toArray(); // Create an ACTUAL array of of the buttons

    console.log(genreButtons);

    // Array to store the values of checked checkboxes
    const checkedGenres = [];

    // Iterate over each checkbox
    genreButtons.forEach(checkboxElement => {
        $(checkboxElement).click(function (event) {
            const clickedCheckbox = $(event.target);

            // Clear the array of checked genres
            checkedGenres.length = 0;

            // Check all checkboxes and add checked ones to checkedGenres array
            genreButtons.forEach(checkbox => {
                if ($(checkbox).is(":checked")) {
                    checkedGenres.push($(checkbox).val());
                }
            });

            // Filter Aniems - see filter function
            filteredGames = filter();

            // Log or do something with filteredAnimes
            console.log(filteredGames);

            populateCards(filteredGames);
        });
    });

    // ____________FILTERING _____________
    function filter(){
        // filter games array based of checked genres 
        let filteredGames;
        if (checkedGenres.length > 0) {
            filteredGames = games.filter(game =>{
                // Check if all checked genres are included in game.genre
                return checkedGenres.every(genre => game.genre.includes(genre));
            });
            return filteredGames;
        } else {
            // If no checkboxes are checked, include all games objects
            filteredGames = games;
            return filteredGames;
        }
    }

    
    // ___________POPULATE_____________
    function populateCards(array) {
        $('#results').html('');

        if (array.length === 0) {
            $("#results").append(`<p> no results</p>`);
        }

        array.forEach(item => {
            // Create a card for that property:
            const card = `
                <div class="games" data-tilt>
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide"><img src="${item.image1}" alt="${item.name} image 1" class="games-image" data-id="${item.id}"></div>
                            <div class="swiper-slide"><img src="${item.image2}" alt="${item.name} image 2" class="games-image" data-id="${item.id}"></div>
                            <div class="swiper-slide"><img src="${item.image3}" alt="${item.name} image 3" class="games-image" data-id="${item.id}"></div>
                        </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="games-details">
                    <h2>${item.name}</h2>
                    <div class="genre-box">
                    <p>Genres</p>
                        <div class="genre-container">
                            ${item.genre.map(genre => `<p class="genre">${genre},</p>`).join(' ')}
                        </div> 
                    </div>
                </div>
            `;

            $("#results").append(card);
             // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
        });

        // Call attachModalToImages after populating cards
        attachModalToImages();
    }


    function attachModalToImages() {
        // Get images
        const images = $(".games-image");
        // Get modal
        const detailsModal = $("#details-modal");

        for (let i = 0; i < images.length; i++) {
        // Add a click event listener to each image
        images.on('click', function(event) {
            // Keep scroll position
            const scrollPosition = $(window).scrollTop();
            detailsModal.data('scrollPosition', scrollPosition); // Store scroll position in the modal's data
            const rect = event.target.getBoundingClientRect(); // Get the position of the clicked image relative to the viewport
            const imageTop = rect.top + scrollPosition; // Calculate the top position 
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // Height of the modal
            const viewportTop = scrollPosition;
            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // Calculate the top position for the dialog to be centered

            // Ensure the dialog doesn't go above or below the viewport
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // Place the dialog just below the clicked image if there's enough space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // Place the dialog at the bottom of the viewport if there's not enough space
            }
            detailsModal.css('top', dialogTop + "px"); // Set top position of the dialog

            console.log('Image click working');
            detailsModal.show(); // Open modal
            // $("body").addClass("modal-open"); // Add class to disable scrolling
            // Populate modal
            populateModal($(event.target).data('id'));
        });
    }
    }

     // Closing modal
     function closeDetailsModal() {
        // Get close button
        const $close = $('#close-modal');
        // Get the modal
        const $detailsModal = $("#details-modal");
        // Click event to close modal
        $close.on('click', function () {
            $detailsModal.hide();
            $("body").removeClass('modal-open'); // Remove scroll-lock class
            const scrollPosition = $detailsModal.data('scrollPosition') || 0;
            $(window).scrollTop(scrollPosition);
        });
    }

    function populateModal(imageId) {
        // Check if imageId is valid
        const game = games.find(a => a.id === imageId);
        if (!game) {
            console.error('Invalid imageId:', imageId);
            return;
        }

        // Get modal content container
        const $detailsModalContent = $('.modal-contents');

        $detailsModalContent.html(`
            <img src="${game.image1}" alt="${game.name} image 1">
            <h2>${game.name}</h2>
            <h4>${game.genre.join(', ')}</h4>
            <p class="game-description">${game.synopsis}</p>
            <a class="game-store" href="${game.store}" target="_blank">Steam Store Page</a>
        `);
    }

    // Initialize modal functionality on DOMContentLoaded
    $(document).ready(function () {
        populateCards(games); // Populate cards first
        closeDetailsModal(); // Set up modal close event
    });

    // Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
});