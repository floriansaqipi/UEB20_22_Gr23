const users = [
    { id: 1, name: 'Rigoberto Whitney', location: 'Prishtine', position: 'Product Manager', workEnviorment: 'Physical', experience: 'Senior', education: 'Master', wallpaperSrc: './pictures/cover/1.jpg', profilePicSrc: './pictures/profile/1.jpg' },
    { id: 2, name: 'Keagan Hardin', location: 'Bucharest', position: 'UI/UX Designer', workEnviorment: 'Physical', experience: 'Senior', education: 'Bachelor', wallpaperSrc: './pictures/cover/2.jpg', profilePicSrc: './pictures/profile/2.jpg' },
    { id: 3, name: 'Hannah Winters', location: 'Berlin', position: 'Frontend Developer', workEnviorment: 'Online', experience: 'Junior', education: 'Bachelor', wallpaperSrc: './pictures/cover/3.jpg', profilePicSrc: './pictures/profile/3.jpg' },
    { id: 4, name: 'Tyrese Ferrell', location: 'New York', position: 'Backend Developer', workEnviorment: 'Physical', experience: 'Senior', education: 'Master', wallpaperSrc: './pictures/cover/6.jpg', profilePicSrc: './pictures/profile/4.jpg' },
    { id: 5, name: 'Eric Howard', location: 'Prishtine', position: 'Backend Developer', workEnviorment: 'Online', experience: 'Junior', education: 'Master', wallpaperSrc: './pictures/cover/4.jpg', profilePicSrc: './pictures/profile/5.jpg' },
    { id: 6, name: 'Paige Elliott', location: 'Bucharest', position: 'Frontend Developer', workEnviorment: 'Physical', experience: 'Senior', education: 'Bachelor', wallpaperSrc: './pictures/cover/5.jpg', profilePicSrc: './pictures/profile/6.jpg' },
    { id: 7, name: 'Chace Bullock', location: 'Berlin', position: 'Product Manager', workEnviorment: 'Physical', experience: 'Intern', education: 'High School', wallpaperSrc: './pictures/cover/2.jpg', profilePicSrc: './pictures/profile/3.jpg' },
    { id: 8, name: 'Scott Reeves', location: 'New York', position: 'UI/UX Designer', workEnviorment: 'Online', experience: 'Intern', education: 'Master', wallpaperSrc: './pictures/cover/6.jpg', profilePicSrc: './pictures/profile/2.jpg' },
    { id: 9, name: 'Anton Wall', location: 'Prishtine', position: 'Frontend Developer', workEnviorment: 'Online', experience: 'Senior', education: 'Bachelor', wallpaperSrc: './pictures/cover/3.jpg', profilePicSrc: './pictures/profile/4.jpg' },
    { id: 10, name: 'Sherlyn Galvan', location: 'Oslo', position: 'Frontend Developer', workEnviorment: 'Physical', experience: 'Junior', education: 'Master', wallpaperSrc: './pictures/cover/1.jpg', profilePicSrc: './pictures/profile/5.jpg' },
    { id: 11, name: 'Brayden Herman', location: 'New York', position: 'Backend Developer', workEnviorment: 'Physical', experience: 'Senior', education: 'Master', wallpaperSrc: './pictures/cover/4.jpg', profilePicSrc: './pictures/profile/1.jpg' },
    { id: 12, name: 'Nikhil Duarte', location: 'Prishtine', position: 'Backend Developer', workEnviorment: 'Online', experience: 'Intern', education: 'High School', wallpaperSrc: './pictures/cover/5.jpg', profilePicSrc: './pictures/profile/6.jpg' },
]

const stateUsers = [...users];

const cards = document.querySelectorAll(".employee-section__card");

const updateCardImage = (imageDiv, wallpaperSrc, profilePicSrc) => {
    imageDiv.children[0].src = wallpaperSrc;
    imageDiv.children[1].children[0].src = profilePicSrc;
}

const updateCardName = (cardBody, name) => {
    cardBody.firstElementChild.innerHTML = name;
}
const updateCardPosition = (cardBody, position) => {
    cardBody.children[1].innerHTML = position;
}

const updateCardLocation = (cardListItem, location) => {
    cardListItem.children[1].innerHTML = location;
}

const updateCardWorkEnviornment = (cardListItem, workEnviorment) => {
    console.log("cardLocation",cardListItem); 
    cardListItem.children[1].innerHTML = workEnviorment;
}
const updateCardExperience = (cardListItem, experience) => {
    cardListItem.children[1].innerHTML = experience;
}
const updateCardEducation = (cardListItem,education) => {
    cardListItem.children[1].innerHTML = education;
}


const updateCardAttributes = (cardList, location, workEnviorment, experience, education) => {
    updateCardLocation(cardList.children[0].children[0].children[0].children[0], location);
    updateCardWorkEnviornment(cardList.children[0].children[0].children[1].children[0], workEnviorment);
    updateCardExperience(cardList.children[0].children[0].children[2].children[0], experience);
    updateCardEducation(cardList.children[0].children[0].children[3].children[0], education);
}


for (let i = 0; i < cards.length; i++) {
    updateCardImage(cards[i].firstElementChild, users[i].wallpaperSrc, users[i].profilePicSrc);
    updateCardName(cards[i].children[1], users[i].name);
    updateCardPosition(cards[i].children[1], users[i].position);
    updateCardAttributes(cards[i].children[2], users[i].location, users[i].workEnviorment, users[i].experience, users[i].education);
}

