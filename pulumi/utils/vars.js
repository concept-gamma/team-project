// async function getIp() {
//     const ip = await fetch(`https://api.ipify.org?format=json`)
//     .then((res)=> res.json())
//     .then((body)=>{
//         console.log(body.ip)
//         return body.ip
//     })
//     return ip
// }

// const myIp = getIp();

// console.log(`This is my ip: ${myIp}`)

// module.exports = { myIp: myIp };

const projectName = "vapourops"
const vpcCidrBlock = "10.0.0.0/16"
const pubCidrBlocks = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
const privCidrBlocks = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
const myIp = "81.102.59.236"
const roleArn = "arn:aws:iam::225634316584:role/vapourops"
const dbUsername= "vapourops"
const dbPassword = "password"


module.exports = {
    projectName:projectName,
    vpcCidrBlock:vpcCidrBlock,
    pubCidrBlocks:pubCidrBlocks,
    privCidrBlocks:privCidrBlocks,
    myIp:myIp,
    roleArn:roleArn,
    dbUsername:dbUsername,
    dbPassword:dbPassword
}