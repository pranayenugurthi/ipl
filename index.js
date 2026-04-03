let homeContent=document.getElementById("home");
let scheduleContent=document.getElementById("schedule");
let teamsContent=document.getElementById("teams");
let playersContent=document.getElementById("players");
let pointsContent=document.getElementById("points");
let sectionList=[
    {name:"home",display:"block"},
    {name:"schedule",display:"none"},
    {name:"teams",display:"none"},
    {name:"players",display:"none"},
    {name:"points",display:"none"}
];
// Smooth Scroll
function display(content) {
    if(content==="home"){
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById("home").style.display="block";
        document.getElementById("schedule").style.display="block";
        document.getElementById("teams").style.display="block";
        document.getElementById("players").style.display="block";
        document.getElementById("points").style.display="block";
    }else{
        sectionList.forEach(section=>{
            if(section.name===content){
                document.getElementById(section.name).style.display="block";
                section.display="block";
            }else{
                document.getElementById(section.name).style.display="none";
                section.display="none";
            }
        })
    }
  
  console.log(sectionList);
}

// MATCHES
const matches = [
  { teams: "MI vs CSK", date: "April 5, 7:30 PM",stadium:"Wankhede Stadium" },
  { teams: "RCB vs KKR", date: "April 6, 7:30 PM",stadium:"M Chinnaswamy Stadium" },
  { teams: "SRH vs RR", date: "April 7, 7:30 PM",stadium:"Rajiv Gandhi International Stadium" },
  { teams: "MI vs RCB", date: "April 8, 7:30 PM",stadium:"Wankhede Stadium" },
  { teams: "CSK vs SRH", date: "April 9, 7:30 PM",stadium:"M Chinnaswamy Stadium" },
  { teams: "KKR vs RR", date: "April 10, 7:30 PM",stadium:"Rajiv Gandhi International Stadium" },
  { teams: "MI vs KKR", date: "April 11, 7:30 PM",stadium:"Wankhede Stadium" },
  { teams: "CSK vs RR", date: "April 12, 7:30 PM",stadium:"M Chinnaswamy Stadium" },
  { teams: "RCB vs SRH", date: "April 13, 7:30 PM",stadium:"Rajiv Gandhi International Stadium" }
];

const matchContainer = document.getElementById("matchContainer");

matches.forEach(match => {
  matchContainer.innerHTML += `
    <div class="match-card">
    <h5 class="card-teams">${match.teams}</h5>
    <p class="card-date">${match.date}</p>
    <p class="card-date">${match.stadium}</p>

    </div>

  `;
});

// TEAMS
const teams = [
    {name: "MI", color: "#4949ee",captain: "Rohit Sharma"},
    {name: "CSK", color: "#e7eb28", captain: "MS Dhoni"},
    {name: "RCB", color: "#d90000", captain: "Virat Kohli"},
    {name: "KKR", color: "#581dac", captain: "Dinesh Karthik"},
    {name: "SRH", color: "#d05b0d", captain: "David Warner"},
    {name: "RR", color: "#8d0c7c", captain: "Shreyas Iyer"},
    {name: "DC", color: "#3c5ee9", captain: "Rishabh Pant"},
    {name: "PBKS", color: "#dc326b", captain: "David Warner"},
    {name: "LSG", color: "#3a2b7a", captain: "Krunal Pandya"},
    {name: "GT", color: "#0e0e47", captain: "Shubman Gill"}
];

const teamsContainer = document.getElementById("teamsContainer");

teams.forEach(team => {
  teamsContainer.innerHTML += `
    <div class="team-card"style="background-color: ${team.color};">
        <p class="team-name">${team.name}</p>
        <p class="team-captain">Captain: ${team.captain}</p>  
    </div>
  `;
});

// PLAYERS
const players = [
    { name: "Virat Kohli", role: "Batsman" },
    { name: "MS Dhoni", role: "Wicketkeeper" },
    { name: "Rohit Sharma", role: "Batsman" },
    { name: "Jasprit Bumrah", role: "Bowler" },
    { name: "Andre Russell", role: "All-rounder" },
    { name: "Sunil Narine", role: "Bowler" },
    { name: "Shikhar Dhawan", role: "Batsman" },
    { name: "Kane Williamson", role: "Batsman" },
    { name: "Yuzvendra Chahal", role: "Bowler" },
    { name: "Hardik Pandya", role: "All-rounder" },
    { name: "Rishabh Pant", role: "Wicketkeeper" }
];

const playersContainer = document.getElementById("playersContainer");

players.forEach(player => {
  playersContainer.innerHTML += `
    <div class="col-md-4 mb-3">
      <div class="card p-3 text-center">
        <h5>${player.name}</h5>
        <p>${player.role}</p>
      </div>
    </div>
  `;
});

// POINTS TABLE
const points = [
    { team: "CSK", matches: 5, wins: 4, points: 8 },
    { team: "MI", matches: 5, wins: 3, points: 6 },
    { team: "RCB", matches: 5, wins: 2, points: 4 },
    { team: "KKR", matches: 5, wins: 2, points: 4 },
    { team: "SRH", matches: 5, wins: 1, points: 2 },
    { team: "RR", matches: 5, wins: 1, points: 2 },
    { team: "DC", matches: 5, wins: 0, points: 0 },
    { team: "PBKS", matches: 5, wins: 0, points: 0 },
    { team: "LSG", matches: 5, wins: 0, points: 0 },
    { team: "GT", matches: 5, wins: 0, points: 0 }
];

const table = document.getElementById("pointsTable");

points.forEach(t => {
  table.innerHTML += `
    <tr>
      <td>${t.team}</td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.points}</td>
    </tr>
  `;
});

// NEWS
const news = [
  "CSK wins by 5 wickets",
  "RCB signs new player",
  "MI tops the table"
];

const newsList = document.getElementById("newsList");

news.forEach(n => {
  newsList.innerHTML += `<li class="list-group-item">${n}</li>`;
});