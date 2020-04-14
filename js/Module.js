const productdb = (dbname, table) => {
    // Create database

    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();

    return db;
}

export default productdb;