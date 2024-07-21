import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const parsedData = JSON.parse(data);
        if(parsedData.length>0) {
            parsedData.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
      console.log('Last contact has been removed.');
        }else{
            console.log('No contacts to remove.');
        }
    } catch(error) {
        console.error('Error removing last contact:', error);
    }
};

removeLastContact();
