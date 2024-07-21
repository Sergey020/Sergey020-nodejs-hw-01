import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
try{
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    for (let i = 1; i <= number; i++) {
        const contact = createFakeContact();
        parsedData.push(contact);
    }
    fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.error('Error generating contacts:', error);
}
};

generateContacts(5);
