//I used chatgpt for refernce

let flights = [
  { flightNo: "AI101", airline: "Air India", from: "Chennai", to: "Delhi", delay: 10, status: "Delayed" },
  { flightNo: "6E202", airline: "IndiGo", from: "Chennai", to: "Mumbai", delay: 0, status: "On Time" },
  { flightNo: "AI303", airline: "Air India", from: "Delhi", to: "Bangalore", delay: 25, status: "Delayed" },
  { flightNo: "SG404", airline: "SpiceJet", from: "Mumbai", to: "Delhi", delay: 5, status: "Delayed" },
  { flightNo: "6E505", airline: "IndiGo", from: "Delhi", to: "Hyderabad", delay: 0, status: "On Time" }
];

console.log("All Flights:", flights);


// 1. Destructuring example
let [firstFlight] = flights;
let { flightNo, airline, from, to, delay, status } = firstFlight;

console.log("\nFirst Flight Details using Destructuring:");
console.log(flightNo, airline, from, to, delay, status);


// 2. Filter delayed flights
let delayedFlights = flights.filter(function(flight) {
  return flight.delay > 0;
});

console.log("\nDelayed Flights:");
console.log(delayedFlights);


// 3. Map flight summary
let flightSummaries = flights.map(function(flight) {
  return `${flight.flightNo} - ${flight.airline} - ${flight.status}`;
});

console.log("\nFlight Summaries:");
console.log(flightSummaries);


// 4. Total delay
let totalDelay = flights.reduce(function(sum, flight) {
  return sum + flight.delay;
}, 0);

console.log("\nTotal Delay:", totalDelay);


// 5. Average delay
let avgDelay = totalDelay / flights.length;
console.log("Average Delay:", avgDelay);


// 6. Group flights by airline
let groupedByAirline = flights.reduce(function(group, flight) {
  if (!group[flight.airline]) {
    group[flight.airline] = [];
  }

  group[flight.airline].push(flight);
  return group;
}, {});

console.log("\nGrouped By Airline:");
console.log(groupedByAirline);


// 7. Aggregated flight report
let report = Object.keys(groupedByAirline).map(function(airlineName) {
  let airlineFlights = groupedByAirline[airlineName];

  let totalFlights = airlineFlights.length;

  let totalDelay = airlineFlights.reduce(function(sum, flight) {
    return sum + flight.delay;
  }, 0);

  let avgDelay = totalDelay / totalFlights;

  return {
    airline: airlineName,
    totalFlights: totalFlights,
    totalDelay: totalDelay,
    avgDelay: avgDelay
  };
});

console.log("\nAggregated Flight Report:");
console.log(report);


// 8. Shallow copy example
let shallowCopyFlights = [...flights];
shallowCopyFlights[0].status = "Boarding";

console.log("\nAfter Shallow Copy Change:");
console.log("Original Flights:", flights);
console.log("Shallow Copy Flights:", shallowCopyFlights);


// 9. Deep copy example
let deepCopyFlights = structuredClone(flights);
deepCopyFlights[1].status = "Cancelled";

console.log("\nAfter Deep Copy Change:");
console.log("Original Flights:", flights);
console.log("Deep Copy Flights:", deepCopyFlights);