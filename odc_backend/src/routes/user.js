import { Router } from "express";
import user from "../controller/user";

const UserRoute=Router();
UserRoute.post("/api/user",user.createUSer)
UserRoute.get("/api/user",user.findAllUsers);
UserRoute.get("/api/user/':id'",user.findUserById);
UserRoute.put("/api/user/':id'",user.update);
UserRoute.post("/api/user/':id'",user.deleUser);

export default UserRoute;