import { api } from "@mb" ;

const userService = {

    getUser: async () => api.get("https://jsonplaceholder.typicode.com/users"),

};

export default userService;