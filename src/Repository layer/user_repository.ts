import { User } from '../Interfaces/user_interfaces';

export const user: User[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];

export interface IUserRpository {
    getAllUsers(): User[],
    getUserByID(id: string): User | undefined,
    createNewUser(user: User): User,
    updateUser(id: string, updatedUser: Partial<User>): User | undefined,
    deleteUser(id: string): User | undefined
}

export class UserRepository implements IUserRpository{
    getAllUsers(): User[] {
        return user;
    }
    getUserByID(id: string): User | undefined {
        return user.find(us => us.id === id);
    }
    createNewUser(newUser: User): User {
        user.push(newUser);
        return newUser;
    }
    updateUser(id: string, updatedUser: Partial<User>): User | undefined {
        const userIndex = user.findIndex(u => u.id === id);
        if (userIndex === -1) return undefined;

        user[userIndex] = {
            ...user[userIndex],
            ...updatedUser,
            id 
        };
        return user[userIndex];
    }
    deleteUser(id: string): User | undefined {
        const userIndex = user.findIndex(u => u.id === id);
        if (userIndex === -1) return undefined;

        const deletedUser = user[userIndex];
        user.splice(userIndex, 1);
        return deletedUser;
    }
}