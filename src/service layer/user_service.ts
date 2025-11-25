import { User } from '../Interfaces/user_interfaces';

let users: User[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];

export class UserService {
  getAllUsers(): User[] {
    return users;
  }

  getUserById(id: string): User | undefined {
    return users.find(u => u.id === id);
  }

  createUser(newUser: User): User {
    users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedUser: Partial<User>): User | undefined {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return undefined;

    users[index] = { ...users[index], ...updatedUser, id };
    return users[index];
  }

  deleteUser(id: string): User | undefined {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return undefined;

    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
  }
}