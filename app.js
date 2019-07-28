const data = [
  {
    name: "Jonathan Doe",
    age: 42,
    gender: "male",
    lookingfor: "female",
    location: "Cape Town, South Africa",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Sarah Smith",
    age: 32,
    gender: "female",
    lookingfor: "male",
    location: "Johannesburg, South Africa",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Michael Smith",
    age: 22,
    gender: "male",
    lookingfor: "female",
    location: "Port Elizabeth, South Africa",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Smith",
    age: 23,
    gender: "female",
    lookingfor: "male",
    location: "Pretoria, South Africa",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display function
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Preference: ${
              currentProfile.gender
            } looking for  ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${
              currentProfile.location
            }</li>
        </ul>`;

    document.getElementById("imageDisplay").innerHTML = `<img src="${
      currentProfile.image
    }">`;
  } else {
    //No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false
          }
        : {
            done: true
          };
    }
  };
}
