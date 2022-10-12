// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
var launch = { mission_name: "Starlink-15 (v1.0)", links: { video_link: "href", article_link: null } };
console.log(launch.mission_name);
console.log(launch.links.video_link);
console.log(launch.links.article_link);
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
