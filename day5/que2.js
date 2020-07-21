console.log("Question 2");

class User
{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coin =0;
        this.courses = [];
    }

    login()
    {
        console.log(this.name +' Logged in');
    }

    logout()
    {
        console.log(this.name+" Logged out");
    }
}

let u1 = new User("akshay",20,"akshay@gmail.com");
console.log(u1);

u1.login();
u1.logout();


class Moderator extends User
{

   addcoin(user)
   {
        user.coin++;
        console.log(user.name+" has "+user.coin +" coins" );
   }

   removecoin(user)
   {
        user.coin--;
        console.log(user.name+" has "+user.coin +" coins" );

   }
}


mod=new Moderator("yash",23,"yash@yahooo.com");
mod.addcoin(u1);
mod.addcoin(u1);
mod.removecoin(u1);
mod.addcoin(u1);
mod.addcoin(u1);


class Admin extends Moderator
{
     addCourse(user,course)
    {
        user.courses.push(course);

    }

    removeCourse(user,course)
    {
        user.courses.pop(course);

    }
}

ad1 = new Admin("persi",24,"persi@gmail.com");
ad1.addCourse(u1,"javascript");
ad1.addCourse(u1,"python");
ad1.addCourse(u1,"java");

console.log(u1);

ad1.removeCourse(u1,"java");

console.log(u1);