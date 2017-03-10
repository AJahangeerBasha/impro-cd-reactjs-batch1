import delay from './delay';

const userstories = [
    {
        id: "1488978474001",
        title: "Unit Testing",
        description: "The core units which make up features should be verified with accompanying unit tests. In JavaScript apps, the smallest units of code you can test are usually individual functions.",
        status: "ToDo"
    },
    {
        id: "1488978474002",
        title: " Integration Testing",
        description: "When user stories are being created, it's a good idea to flesh out integration tests which will correspond to user journeys.",
        status: "ToDo"
    },
    {
        id: "1488978474003",
        title: "Mocking Services and Modules in AngularJS",
        description: "Stubbing out endpoints which our module is interacting with is a really good way of ensuring the reliability of our tests is dependent purely on how well the code inside our module performs.",
        status: "ToDo"
    },
    {
        id: "1488978474004",
        title: "D3 js",
        description: "The single most important requirement to perform interpolation in D3.js, is that the structure of A must match the structure of B",
        status: "Progress"
    },
    {
        id: "1488978474005",
        title: "Array",
        description: "The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
        status: "Progress"
    },
    {
        id: "1488978474006",
        title: "RegExp ",
        description: "The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.",
        status: "Done"
    }
    
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
    return +new Date;
};

class UserstoryApi {
    static getAllUserstories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], userstories));
            }, delay);
        });
    }

    static saveUserstory(userstory) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minUserstoryTitleLength = 1;
                if (userstory.title.length < minUserstoryTitleLength) {
                    reject(`Title must be at least ${minUserstoryTitleLength} characters.`);
                }
                if (userstory.id) {
                    const existingUserstoryIndex = userstories.findIndex(a => a.id == userstory.id);
                    userstories.splice(existingUserstoryIndex, 1, userstory);
                } else {
                    userstory.id = generateId();
                    userstory.status = 'ToDo';
                    userstories.push(userstory);
                }

                resolve(Object.assign({}, userstory));
            }, delay);
        });
    }

    static deleteUserstory(userstoryId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfUserstoryToDelete = userstories.findIndex(userstory => {
                    userstory.userstoryId == userstoryId;
                });
                userstories.splice(indexOfUserstoryToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default UserstoryApi;
