// Make the necessary imports here.

import {appendFileSync, readFileSync} from 'fs';

export const writeBlog = (filePath, name) => {
    try{
        appendFileSync(filePath,name + "\n");
    }
    catch(err){
        console.log(`error at ${filePath} `, err);
    }
}

export const publishBlog = (filePath) => {
    try{
        return readFileSync(filePath,{encoding : 'utf8'});
        
    }catch(err){
        console.log(`error at ${filePath} `, err);
    }
}
