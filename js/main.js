// Create database
const db = new Dexie('myDb');
db.version(1).stores({
    friends: `name, age`
})

// Open the database
db.open();