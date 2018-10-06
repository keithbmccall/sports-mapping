export class Team {
  id: number;
  name: string;
  city: string;
  stadium: string;
  divisionId: number;
}

export class Division {
  id: number;
  name: string;
  teams: Team[];
  conferenceId: number;
}

export class Conference {
  id: number;
  name: string;
  divisions: Division[];
  logoUrl: string;
}

//
// constructors
function Club(id, city, name, stadium) {
  this.id = id;
  this.city = city;
  this.name = name;
  this.stadium = stadium;
}

function Div(id, name, teams) {
  this.id = id;
  this.name = name;
  this.teams = teams;
}

function Conf(id, name, divisions, logoUrl) {
  this.id = id;
  this.name = name;
  this.divisions = divisions;
  this.logoUrl = logoUrl;
}

const patriots = new Club(1, "New England", "Patriots", "Gilette Stadium"),
  dolphins = new Club(2, "Miami", "Dolphins", "Hard Rock Stadium"),
  jets = new Club(3, "New York", "Jets", "MetLife Stadium"),
  bills = new Club(4, "Buffalo", "Bills", "New Era Field"),
  steelers = new Club(5, "Pittsburgh", "Steelers", "Heinz Field"),
  browns = new Club(6, "Cleveland", "Browns", "FirstEnergy Stadium"),
  bengals = new Club(7, "Cincinatti", "Bengals", "Paul Brown Stadium"),
  ravens = new Club(8, "Baltimore", "Ravens", "M&T Bank Stadium"),
  jaguars = new Club(9, "Jacksonville", "Jaguars", "EverBank Field"),
  titans = new Club(10, "Tennessee", "Titans", "Nissan Stadium"),
  colts = new Club(11, "Indianapolis", "Colts", "Lucas Oil Stadium"),
  texans = new Club(12, "Houston", "Texans", "NRG Stadium"),
  chiefs = new Club(13, "Kansas City", "Chiefs", "Arrowhead Stadium"),
  raiders = new Club(14, "Oakland", "Raiders", "Oakland Alameda Coliseum"),
  chargers = new Club(15, "Los Angeles", "Chargers", "StubHub Center"),
  broncos = new Club(
    16,
    "Denver",
    "Broncos",
    "Sports Authority Field at Mile High"
  ),
  giants = new Club(17, "New York", "Giants", "MetLife Stadium"),
  cowboys = new Club(18, "Dallas", "Cowboys", "Cowboys Stadium"),
  redskins = new Club(19, "Washington", "Redskins", "FedEx Field"),
  eagles = new Club(20, "Philadelphia", "Eagles", "Lincoln Financial Field"),
  packers = new Club(21, "Green Bay", "Packers", "Lambeau Field"),
  bears = new Club(22, "Chicago", "Bears", "Soldier Field"),
  vikings = new Club(23, "Minnesota", "Vikings", "U.S. Bank Stadium"),
  lions = new Club(24, "Detroit", "Lions", "Ford Field"),
  niners = new Club(25, "San Francisco", "49ers", "Levi's Stadium"),
  seahawks = new Club(26, "Seattle", "Seahawks", "CenturyLink Field"),
  rams = new Club(27, "Los Angeles", "Rams", "Los Angeles Memorial Coliseum"),
  cardinals = new Club(
    28,
    "Arizona",
    "Cardinals",
    "University of Phoenix Stadium"
  ),
  buccaneers = new Club(29, "Tampa Bay", "Buccaneers", "Raymond James Stadium"),
  falcons = new Club(30, "Atlanta", "Falcons", "Mercedes-Benz Stadium"),
  panthers = new Club(31, "Carolina", "Panthers", "Bank of America Stadium"),
  saints = new Club(32, "New Orleans", "Saints", "Mercedes-Benz Superdome");

const afcnorth = new Div(1, "AFC north", [steelers, browns, ravens, bengals]),
  afceast = new Div(2, "AFC east", [patriots, jets, dolphins, bills]),
  afcsouth = new Div(3, "AFC south", [colts, texans, jaguars, titans]),
  afcwest = new Div(4, "AFC west", [chiefs, raiders, broncos, chargers]),
  nfcnorth = new Div(5, "NFC north", [packers, bears, vikings, lions]),
  nfceast = new Div(6, "NFC east", [giants, cowboys, eagles, redskins]),
  nfcsouth = new Div(7, "NFC south", [buccaneers, saints, falcons, panthers]),
  nfcwest = new Div(8, "NFC west", [seahawks, cardinals, rams, niners]);

let nfcLogoUrl ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Football_Conference_logo.svg/300px-National_Football_Conference_logo.svg.png",
  afcLogoUrl ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/American_Football_Conference_logo.svg/300px-American_Football_Conference_logo.svg.png"
const afc = new Conf(
    1,
    "AFC",
    [afcnorth, afceast, afcsouth, afcwest],
    afcLogoUrl
  ),
  nfc = new Conf(2, "NFC", [nfcnorth, nfceast, nfcsouth, nfcwest], nfcLogoUrl);

export const league = {
  name: "NFL",
  conferences: [afc, nfc]
};
