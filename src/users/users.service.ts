import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "lola",
      email: "lola@example.com",
      role: "INTERN"
    },
    {
      id: 2,
      name: "lola",
      email: "lola@example.com",
      role: "ENGINEER"
    },
    {
      id: 3,
      name: "rahul",
      email: "rahul@example.com",
      role: "ADMIN"
    },
    {
      id: 4,
      name: "lola",
      email: "lola@example.com",
      role: "ENGINEER"
    },
    {
      id: 5,
      name: "lola",
      email: "lola@example.com",
      role: "ENGINEER"
    },
    {
      id: 6,
      name: "lola",
      email: "lola@example.com",
      role: "ENGINEER"
    }
  ];

  findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "ADMIN";
  }) {
    const usersByHighetsId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighetsId[0].id + 1,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatesUser: {
      name?: string;
      email?: string;
      role?: "INTERN" | "ENGINEER" | "ADMIN";
    }
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatesUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
