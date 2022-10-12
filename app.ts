// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

interface ILaunch{
    "mission_name": string
    "launch_date_local": string
    "launch_site": {
    "site_name_long": string
},
    "links": {
    "article_link": null
        "video_link": string
},
    "rocket": {
    "rocket_name": string
        "first_stage": {
        "cores": [
            {
                "flight": number
                "core": {
                    "reuse_count": number
                    "status": string
                }
            }
        ]
    },
    "second_stage": {
        "payloads": [
            {
                "payload_type": string
                "payload_mass_kg": number
                "payload_mass_lbs": number
            }
        ]
    }
}
}

const launch: Partial<ILaunch> = {mission_name: "Starlink-15 (v1.0)", links: {video_link: "href", article_link: null}}
console.log(launch.mission_name);
console.log(launch.links.video_link);
console.log(launch.links.article_link);


// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

interface IUser{
    name: string
    age: number
    gender: string
}

    const user: IUser = {
        name:"Max",
        age:18,
        gender:'male'
    }

function sum(a: number, b: number): number {
    return a+b
}
function showSum(a: number,b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): {} {
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
console.log(incAge(user, 2));