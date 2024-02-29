const user ={id:1,name:`Gorib na amir`,job:`Actor`}

// JavaScript Object Notation



// console.log(user);


const stringified=JSON.stringify(user);
// console.log(stringified)


const shop={
    owner:`Alia`,
    address:{
        street:`Kochu ket ramBari`,
        city:`Rnbir`,
        country:`BD`,
    },
    products:[`laptop`,`mic`,`monitor`,`keybord`],
    revenue:45000,
    isOpen:true,
    isNew:false
}
console.log(shop)

const shopJson=JSON.stringify(shop)
console.log(shopJson)

const shopObject=JSON.parse(shopJson)
console.log(shopObject)