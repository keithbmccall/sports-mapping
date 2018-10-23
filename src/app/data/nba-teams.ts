import {constructors} from './team-data';

const kings = new constructors.team(1, 'Sacramento', 'Kings', 'Golden 1 Center'),
  pistons = new constructors.team(2, 'Detroit', 'Pistons', 'Little Caesar\'s Arena'),
  hawks = new constructors.team(3, 'Atlanta', 'Hawks', 'State Farm Arena'),
  celtics = new constructors.team(4, 'Boston', 'Celtics', 'TD Garden'),
  nets = new constructors.team(11, 'Brooklyn', 'Nets', 'Barclays Center'),
  hornets = new constructors.team(25, 'Charlotte', 'Hornets', 'Spectrum Center'),
  knicks = new constructors.team(6, 'New York', 'Knicks', 'Madison Square Garden'),
  warriors = new constructors.team(5, 'Golden State', 'Warriors', 'Oracle Arena'),
  sixers = new constructors.team(7, 'Philadelphia', '76ers', 'Wells Fargo Center'),
  lakers = new constructors.team(8, 'Los Angeles', 'Lakers', 'Staples Center'),
  wizards = new constructors.team(9, 'Washington', 'Wizards', 'Capital One Arena'),
  bulls = new constructors.team(10, 'Chicago', 'Bulls', 'United Center'),
  nuggets = new constructors.team(12, 'Denver', 'Nuggets', 'Pepsi Center'),
  rockets = new constructors.team(13, 'Houston', 'Rockets', 'Toyota Center'),
  pacers = new constructors.team(14, 'Indiana', 'Pacers', 'Bankers Life Fieldhouse'),
  thunder = new constructors.team(15, 'Oklahoma City', 'Thunder', 'Chesapeake Energy Arena'),
  spurs = new constructors.team(16, 'San Antonio', 'Spurs', 'AT&T Center'),
  bucks = new constructors.team(17, 'Milwaukee', 'Bucks', 'Fiserv Forum'),
  suns = new constructors.team(18, 'Phoenix', 'Suns', 'Talking Stick Resort Arena'),
  cavaliers = new constructors.team(19, 'Cleveland', 'Cavaliers', 'Quicken Loans Arena'),
  clippers = new constructors.team(20, 'Los Angeles', 'Clippers', 'Staples Center'),
  blazers = new constructors.team(21, 'Portland', 'Trail Blazers', 'Moda Center'),
  jazz = new constructors.team(22, 'Utah', 'Jazz', 'Vivint Smart Home Arena'),
  mavericks = new constructors.team(23, 'Dallas', 'Mavericks', 'American Airlines Center'),
  heat = new constructors.team(24, 'Miami', 'Heat', 'American Airlines Arena'),
  timberwolves = new constructors.team(26, 'Minnesota', 'Timberwolves', 'Target Center'),
  magic = new constructors.team(27, 'Orlando', 'Magic', 'Amway Center'),
  grizzlies = new constructors.team(28, 'Memphis', 'Grizzlies', 'FedEx Forum'),
  raptors = new constructors.team(29, 'Toronto', 'Raptors', 'Scotiabank Arena'),
  pelicans = new constructors.team(30, 'New Orleans', 'Pelicans', 'Smoothie King Center');

const pacific = new constructors.division(6, 'Pacific Division', [
    lakers, clippers, kings, suns, warriors
  ]), atlantic = new constructors.division(1, 'Atlantic Division', [raptors, sixers, celtics,
    nets, knicks]), central = new constructors.division(2, 'Central Division', [bucks, pistons, pacers, cavaliers, bulls]),
  southeast = new constructors.division(3, 'Southeast Division', [hornets, magic, heat, hawks, wizards]),
  northwest = new constructors.division(4, 'Northwest Division', [nuggets, blazers, timberwolves,
    jazz, thunder]), southwest = new constructors.division(5, 'Southwest Division', [rockets, spurs, mavericks, grizzlies, pelicans]);

const eastLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Eastern_Conference_%28NBA%29_logo_2018.png/150px-Eastern_Conference_%28NBA%29_logo_2018.png',
  westLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Western_Conference_%28NBA%29_logo_2018.png/150px-Western_Conference_%28NBA%29_logo_2018.png';

const west = new constructors.conference(
  2,
  'Western Conference',
  [southwest, pacific, northwest],
  westLogoUrl
  ),
  east = new constructors.conference(
    1,
    'Eastern Conference',
    [atlantic, central, southeast],
    eastLogoUrl
  );

export const NBA = {
  id: 2,
  name: 'NBA',
  conferences: [east, west]
};
