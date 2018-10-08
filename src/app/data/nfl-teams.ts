import { constructors } from "./team-data";
//
const patriots = new constructors.team(
    16,
    "New England",
    "Patriots",
    "Gilette Stadium"
  ),
  dolphins = new constructors.team(
    23,
    "Miami",
    "Dolphins",
    "Hard Rock Stadium"
  ),
  jets = new constructors.team(17, "New York", "Jets", "MetLife Stadium"),
  bills = new constructors.team(13, "Buffalo", "Bills", "New Era Field"),
  steelers = new constructors.team(8, "Pittsburgh", "Steelers", "Heinz Field"),
  browns = new constructors.team(
    31,
    "Cleveland",
    "Browns",
    "FirstEnergy Stadium"
  ),
  bengals = new constructors.team(
    26,
    "Cincinatti",
    "Bengals",
    "Paul Brown Stadium"
  ),
  ravens = new constructors.team(11, "Baltimore", "Ravens", "M&T Bank Stadium"),
  jaguars = new constructors.team(
    29,
    "Jacksonville",
    "Jaguars",
    "EverBank Field"
  ),
  titans = new constructors.team(20, "Tennessee", "Titans", "Nissan Stadium"),
  colts = new constructors.team(
    12,
    "Indianapolis",
    "Colts",
    "Lucas Oil Stadium"
  ),
  texans = new constructors.team(32, "Houston", "Texans", "NRG Stadium"),
  chiefs = new constructors.team(
    15,
    "Kansas City",
    "Chiefs",
    "Arrowhead Stadium"
  ),
  raiders = new constructors.team(
    18,
    "Oakland",
    "Raiders",
    "Oakland Alameda Coliseum"
  ),
  chargers = new constructors.team(
    19,
    "Los Angeles",
    "Chargers",
    "StubHub Center"
  ),
  broncos = new constructors.team(
    14,
    "Denver",
    "Broncos",
    "Sports Authority Field at Mile High"
  ),
  giants = new constructors.team(2, "New York", "Giants", "MetLife Stadium"),
  cowboys = new constructors.team(21, "Dallas", "Cowboys", "Cowboys Stadium"),
  redskins = new constructors.team(6, "Washington", "Redskins", "FedEx Field"),
  eagles = new constructors.team(
    7,
    "Philadelphia",
    "Eagles",
    "Lincoln Financial Field"
  ),
  packers = new constructors.team(4, "Green Bay", "Packers", "Lambeau Field"),
  bears = new constructors.team(1, "Chicago", "Bears", "Soldier Field"),
  vikings = new constructors.team(
    22,
    "Minnesota",
    "Vikings",
    "U.S. Bank Stadium"
  ),
  lions = new constructors.team(5, "Detroit", "Lions", "Ford Field"),
  niners = new constructors.team(
    10,
    "San Francisco",
    "49ers",
    "Levi's Stadium"
  ),
  seahawks = new constructors.team(
    27,
    "Seattle",
    "Seahawks",
    "CenturyLink Field"
  ),
  rams = new constructors.team(
    9,
    "Los Angeles",
    "Rams",
    "Los Angeles Memorial Coliseum"
  ),
  cardinals = new constructors.team(
    3,
    "Arizona",
    "Cardinals",
    "University of Phoenix Stadium"
  ),
  buccaneers = new constructors.team(
    28,
    "Tampa Bay",
    "Buccaneers",
    "Raymond James Stadium"
  ),
  falcons = new constructors.team(
    24,
    "Atlanta",
    "Falcons",
    "Mercedes-Benz Stadium"
  ),
  panthers = new constructors.team(
    30,
    "Carolina",
    "Panthers",
    "Bank of America Stadium"
  ),
  saints = new constructors.team(
    25,
    "New Orleans",
    "Saints",
    "Mercedes-Benz Superdome"
  );

const afcnorth = new constructors.division(8, "AFC north", [
    steelers,
    browns,
    ravens,
    bengals
  ]),
  afceast = new constructors.division(7, "AFC east", [
    patriots,
    jets,
    dolphins,
    bills
  ]),
  afcsouth = new constructors.division(6, "AFC south", [
    colts,
    texans,
    jaguars,
    titans
  ]),
  afcwest = new constructors.division(5, "AFC west", [
    chiefs,
    raiders,
    broncos,
    chargers
  ]),
  nfcnorth = new constructors.division(1, "NFC north", [
    packers,
    bears,
    vikings,
    lions
  ]),
  nfceast = new constructors.division(2, "NFC east", [
    giants,
    cowboys,
    eagles,
    redskins
  ]),
  nfcsouth = new constructors.division(3, "NFC south", [
    buccaneers,
    saints,
    falcons,
    panthers
  ]),
  nfcwest = new constructors.division(4, "NFC west", [
    seahawks,
    cardinals,
    rams,
    niners
  ]);

let nfcLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Football_Conference_logo.svg/300px-National_Football_Conference_logo.svg.png",
  afcLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/American_Football_Conference_logo.svg/300px-American_Football_Conference_logo.svg.png";
const afc = new constructors.conference(
    2,
    "AFC",
    [afcnorth, afceast, afcsouth, afcwest],
    afcLogoUrl
  ),
  nfc = new constructors.conference(
    1,
    "NFC",
    [nfcnorth, nfceast, nfcsouth, nfcwest],
    nfcLogoUrl
  );

export const NFL = {
  id: 1,
  name: "NFL",
  conferences: [afc, nfc]
};
