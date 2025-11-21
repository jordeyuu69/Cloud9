// Team member data
const team = [
  {
    name: "Jeremiah Montero",
    section: "ONL-10-1",
    role: "Leader of group, cat. ",
    description: "N/A"
  },
  {
    name: "Julian Caleb Derit",
    section: "ONL-10-1",
    role: "One of Cloud 9’s best members",
    description: "One of Cloud 9’s best members, also known as King Julian, likes to move it. Claims to be nonchalant, specifically takes interest in the anime One Punch Man. Very creative in terms of avatar designing(Roblox, Minecraft) Will play the ukulele for you."
  },
  {
    name: "Faith Nava",
    section: "ONL-10-1",
    role: "Albert..?",
    description: "N/A"
  },
  {
    name: "Weiszsa Gomez",
    section: "ONL-10-1",
    role: "Turkey",
    description: "N/A"
  },
  {
    name: "Kameeya Pidazo",
    section: "ONL-10-1",
    role: "The pibbler. & programmer too",
    description: "N/A"
  }
];

let index = 0;

const nameEl = document.getElementById("member-name");
const sectE1 = document.getElementById("member-sect");
const roleEl = document.getElementById("member-role");
const descEl = document.getElementById("member-description");

function loadMember(i) {
  nameEl.textContent = team[i].name;
  sectE1.textContent = team[i].section;
  roleEl.textContent = team[i].role;
  descEl.textContent = team[i].description;
}

document.querySelector(".arrow-right").addEventListener("click", () => {
  index = (index + 1) % team.length;
  loadMember(index);
});

document.querySelector(".arrow-left").addEventListener("click", () => {
  index = (index - 1 + team.length) % team.length;
  loadMember(index);
});

loadMember(index);
