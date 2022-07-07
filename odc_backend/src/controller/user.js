import cnx from "../models";

const createUSer=async(req,res)=>{
    const user = await cnx.models.user.create()
    res.json(user)
}

const findAllUsers= async(req,res)=>{
    const users=await cnx.models.user.findAll();
    res.json(users);
}

const findUserById= async(req,res)=>{
    const user=await cnx.models.user.findByPk({
        where:{
            id:req.params.id
        }

    });
    res.json(users);
}

const update= async(req,res)=>{
    const user=await cnx.models.user.findByPk({

        where:{
            id:req.params.id
        }
        
    });
    res.json(users);
}

const deleUser= async(req,res)=>{
    const user=await cnx.models.user.destroy(
        req.params.id
        
    );
    res.json(users);
}


export default({
    createUSer,
    findAllUsers,
    findUserById,
    update,
    deleUser


})


