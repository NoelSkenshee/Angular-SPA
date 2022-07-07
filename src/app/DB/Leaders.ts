import { Leader } from '../Types/Leader';
export class LeadersDB{

   leaders:Leader[]=[
    {
      name:"Jose Hernandez",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    },
    {
      name:"Miguel Maria",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    },
    {
      name:"Malta",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    },
    {
      name:"Jose Luiza",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    },
    {
      name:"Miran Nandez",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    },
    {
      name:"perz",
      image:"/assets/images/alberto.png",
      about:"A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the"
    }


  ];

["get*"]():Leader[]{
return this.leaders;
}











}
