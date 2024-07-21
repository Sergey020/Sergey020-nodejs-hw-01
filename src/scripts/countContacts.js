import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const countContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const parsedData = JSON.parse(data);
            return parsedData;
      } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

console.log(await countContacts());
