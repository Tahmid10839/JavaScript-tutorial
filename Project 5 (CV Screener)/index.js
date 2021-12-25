
const data = [
    {
        name: 'Rahim',
        age: 20,
        city: "United States",
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Karim',
        age: 21,
        city: "United Kingdom",
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Tamanna',
        age: 22,
        city: "London",
        language: 'Python',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name: 'Camila Cabello',
        age: 28,
        city: "Canada",
        language: 'Python',
        framework: 'Laravel',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    }
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">with ${currentCandidate.framework} framework</li>
      </ul>`;
    }
    else{
        alert("End of Applications");
        window.location.reload();
    }
}

