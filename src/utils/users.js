const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room}) =>{
    // clean data
    username = username.trim().toLowerCase()
    room = room.trim()
    room = room.toUpperCase()

    // validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    // Check the existing user
    const existingUser = users.find((user) =>{
        return user.room === room && user.username === username
    })

    // validate usersname
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

// remove user
const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

// get user by id
const getUser = (id)=>{
    return users.find((user)=> user.id === id)
}

// return users in a  room
const getUsersInRoom = (room)=>{
    return users.filter((user)=> user.room === room)
}



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

