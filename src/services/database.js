import PouchDB from 'pouchdb';

export const updateDocument = async (docId, updatedCollection) => {
    const updatedDocument = {
        _id: docId,
        collection: updatedCollection
    };
    try {
        const doc = await dataBase.get(docId);
        updatedDocument._rev = doc._rev;
    } finally {
        await dataBase.put(updatedDocument);
    }
};

const dataBase = new PouchDB('budgetPwa');

export default dataBase;