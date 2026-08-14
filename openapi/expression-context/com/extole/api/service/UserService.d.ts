import type { User } from "../user/User";

export interface UserService {
    getUserById(userId: string): User | null;
}
