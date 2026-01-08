// Hour
// If hour is between 6am to 12pm: Good Morning
// If hour is between 12pm to 6pm: Good Afternoon
// Otherwise: Good Evening

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good Morning');

else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');

else if (hour >= 18 && hour < 24)
    console.log('Good Evening');
