import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const removeAllContacts = async () => {
    try{
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('All contacts have been removed.');
        // const data = await fs.readFile(PATH_DB, 'utf-8');
        // const parsedData = JSON.parse(data);
        // const updatedData = parsedData.filter(() => false);
        // await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null));
    }catch(error) {
        console.log('Error removing contacts:', error);
    }
};

removeAllContacts();
