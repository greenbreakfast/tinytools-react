// Note: took data from https://www.espn.com/racing/schedule/_/series/f1 and asked Claude to convert it into a javascript object
// Key was to make sure it handled daylight savings time correctly!


const f1Schedule2025 = [
  {
    name: "Louis Vuitton Australian Grand Prix",
    circuit: "Albert Park",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-03-13T21:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-03-14T01:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-03-14T21:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-03-15T01:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-03-16T00:00:00-04:00") }
    ]
  },
  {
    name: "Heineken Chinese Grand Prix",
    circuit: "Shanghai International",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-03-20T23:30:00-04:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-03-21T03:30:00-04:00") },
      { type: "Sprint Race", dateTime: new Date("2025-03-21T23:00:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-03-22T03:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-03-23T03:00:00-04:00") }
    ]
  },
  {
    name: "Lenovo Japanese Grand Prix",
    circuit: "Suzuka Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-04-03T22:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-04-04T02:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-04-04T22:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-04-05T02:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-04-06T01:00:00-04:00") }
    ]
  },
  {
    name: "Gulf Air Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-04-11T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-04-11T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-04-12T08:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-04-12T12:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-04-13T11:00:00-04:00") }
    ]
  },
  {
    name: "STC Saudi Arabian Grand Prix",
    circuit: "Jeddah Street Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-04-18T09:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-04-18T13:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-04-19T09:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-04-19T13:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-04-20T13:00:00-04:00") }
    ]
  },
  {
    name: "Crypto.com Miami Grand Prix",
    circuit: "Miami International Autodrome",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-05-02T12:30:00-04:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-05-02T16:30:00-04:00") },
      { type: "Sprint Race", dateTime: new Date("2025-05-03T12:00:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-05-03T16:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-05-04T16:00:00-04:00") }
    ]
  },
  {
    name: "AWS Made in Italy Emilia Romagna Grand Prix",
    circuit: "Autodromo Enzo e Dino Ferrari",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-05-16T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-05-16T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-05-17T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-05-17T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-05-18T09:00:00-04:00") }
    ]
  },
  {
    name: "Tag Heuer Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-05-23T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-05-23T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-05-24T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-05-24T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-05-25T09:00:00-04:00") }
    ]
  },
  {
    name: "Aramco Spanish Grand Prix",
    circuit: "Circuit de Catalunya",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-05-30T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-05-30T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-05-31T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-05-31T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-06-01T09:00:00-04:00") }
    ]
  },
  {
    name: "Pirelli Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-06-13T13:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-06-13T17:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-06-14T12:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-06-14T16:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-06-15T14:00:00-04:00") }
    ]
  },
  {
    name: "MSC Cruises Austrian Grand Prix",
    circuit: "Red Bull Ring",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-06-27T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-06-27T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-06-28T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-06-28T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-06-29T09:00:00-04:00") }
    ]
  },
  {
    name: "Qatar Airways British Grand Prix",
    circuit: "Silverstone Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-07-04T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-07-04T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-07-05T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-07-05T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-07-06T10:00:00-04:00") }
    ]
  },
  {
    name: "Moët & Chandon Belgian Grand Prix",
    circuit: "Spa-Francorchamps",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-07-25T06:30:00-04:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-07-25T10:30:00-04:00") },
      { type: "Sprint Race", dateTime: new Date("2025-07-26T06:00:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-07-26T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-07-27T09:00:00-04:00") }
    ]
  },
  {
    name: "Lenovo Hungarian Grand Prix",
    circuit: "Hungaroring",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-08-01T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-08-01T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-08-02T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-08-02T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-08-03T09:00:00-04:00") }
    ]
  },
  {
    name: "Heineken Dutch Grand Prix",
    circuit: "Circuit Park Zandvoort",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-08-29T06:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-08-29T10:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-08-30T05:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-08-30T09:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-08-31T09:00:00-04:00") }
    ]
  },
  {
    name: "Pirelli Italian Grand Prix",
    circuit: "Autodromo Nazionale Monza",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-09-05T07:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-09-05T11:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-09-06T06:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-09-06T10:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-09-07T09:00:00-04:00") }
    ]
  },
  {
    name: "Qatar Airways Azerbaijan Grand Prix",
    circuit: "Baku City Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-09-19T04:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-09-19T08:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-09-20T04:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-09-20T08:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-09-21T07:00:00-04:00") }
    ]
  },
  {
    name: "Singapore Airlines Singapore Grand Prix",
    circuit: "Marina Bay Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-10-03T05:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-10-03T09:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-10-04T05:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-10-04T09:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-10-05T08:00:00-04:00") }
    ]
  },
  {
    name: "MSC Cruises United States Grand Prix",
    circuit: "Circuit of the Americas",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-10-17T13:30:00-04:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-10-17T17:30:00-04:00") },
      { type: "Sprint Race", dateTime: new Date("2025-10-18T13:00:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-10-18T17:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-10-19T15:00:00-04:00") }
    ]
  },
  {
    name: "Mexico City Grand Prix",
    circuit: "Autódromo Hermanos Rodríguez",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-10-24T14:30:00-04:00") },
      { type: "Practice 2", dateTime: new Date("2025-10-24T18:00:00-04:00") },
      { type: "Practice 3", dateTime: new Date("2025-10-25T13:30:00-04:00") },
      { type: "Qualifying", dateTime: new Date("2025-10-25T17:00:00-04:00") },
      { type: "Race", dateTime: new Date("2025-10-26T16:00:00-04:00") }
    ]
  },
  {
    name: "MSC Cruises São Paulo Grand Prix",
    circuit: "Autódromo José Carlos Pace",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-11-07T09:30:00-05:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-11-07T13:30:00-05:00") },
      { type: "Sprint Race", dateTime: new Date("2025-11-08T09:00:00-05:00") },
      { type: "Qualifying", dateTime: new Date("2025-11-08T13:00:00-05:00") },
      { type: "Race", dateTime: new Date("2025-11-09T12:00:00-05:00") }
    ]
  },
  {
    name: "Heineken Las Vegas Grand Prix",
    circuit: "Las Vegas Street Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-11-20T19:30:00-05:00") },
      { type: "Practice 2", dateTime: new Date("2025-11-20T23:00:00-05:00") },
      { type: "Practice 3", dateTime: new Date("2025-11-21T19:30:00-05:00") },
      { type: "Qualifying", dateTime: new Date("2025-11-21T23:00:00-05:00") },
      { type: "Race", dateTime: new Date("2025-11-22T23:00:00-05:00") }
    ]
  },
  {
    name: "Qatar Airways Qatar Grand Prix",
    circuit: "Lusail International Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-11-28T08:30:00-05:00") },
      { type: "Sprint Shootout", dateTime: new Date("2025-11-28T12:30:00-05:00") },
      { type: "Sprint Race", dateTime: new Date("2025-11-29T09:00:00-05:00") },
      { type: "Qualifying", dateTime: new Date("2025-11-29T13:00:00-05:00") },
      { type: "Race", dateTime: new Date("2025-11-30T11:00:00-05:00") }
    ]
  },
  {
    name: "Etihad Airways Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    events: [
      { type: "Practice 1", dateTime: new Date("2025-12-05T04:30:00-05:00") },
      { type: "Practice 2", dateTime: new Date("2025-12-05T08:00:00-05:00") },
      { type: "Practice 3", dateTime: new Date("2025-12-06T05:30:00-05:00") },
      { type: "Qualifying", dateTime: new Date("2025-12-06T09:00:00-05:00") },
      { type: "Race", dateTime: new Date("2025-12-07T08:00:00-05:00") }
    ]
  }
];

export default f1Schedule2025;