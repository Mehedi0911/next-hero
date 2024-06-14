import connectDB from "@/lib/connectDB"

export const POST = async (request) => {
try {
    const db = await connectDB();
    const userCollection = db.collection('users')
    const newUser = await request.json();
    const exist =await userCollection.findOne({email : newUser.email})
    if(exist) {
        return Response.json({message : 'User already exists'})
    }
    const res = await userCollection.insertOne(newUser)
    return Response.json({message : "new User Created"})

} catch (error) {
    return Response.json({message : "something went wrong"});
}
}