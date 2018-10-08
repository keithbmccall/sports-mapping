export class Team {
  id: number;
  name: string;
  city: string;
  stadium: string;
  divisionId: number;
  // logoUrl: string;
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

export const constructors = {
  team: function(id, city, name, stadium) {
    this.id = id;
    this.city = city;
    this.name = name;
    this.stadium = stadium;
  },
  division: function(id, name, teams) {
    this.id = id;
    this.name = name;
    this.teams = teams;
  },
  conference: function(id, name, divisions, logoUrl) {
    this.id = id;
    this.name = name;
    this.divisions = divisions;
    this.logoUrl = logoUrl;
  }
};
