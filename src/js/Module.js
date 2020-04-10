const productdb = (dbname, table) => {
    // Create database

    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();

    /*    
    const db = new Dexie('myDb');
    db.version(1).stores({
        friends: `name, age`
    })
    */

    retuen db;
}

export default productdb;