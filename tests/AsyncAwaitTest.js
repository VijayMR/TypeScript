"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function that returns a Promise of User array
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Fetching users...');
        // Simulate API call
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return [
            { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
            { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
        ];
    });
} // Async function to process users
function processUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // TypeScript knows users is User[]
            const users = yield fetchUsers();
            console.log(`Fetched ${users.length} users`);
            // Type-safe property access
            const adminEmails = users
                .filter(user => user.role === 'admin')
                .map(user => user.email);
            console.log('Admin emails:', adminEmails);
            return users;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Failed to process users:', error.message);
            }
            else {
                console.error('An unknown error occurred');
            }
            throw error; // Re-throw to let caller handle
        }
    });
}
// Execute the async function
processUsers()
    .then(users => console.log('Processing complete'))
    .catch(err => console.error('Processing failed:', err));
