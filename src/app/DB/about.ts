import { About } from "../Types/about";

export class AboutDB {
  private about: About = {
    about:
      'A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app. In a SPA, a page refresh never occurs; instead, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load,[1] or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.',

    startdate: '20/6/2022',
    sharholder: 'Alfredo Bobadilla',
    employers: 44,
  };

  ['get*'](): About {
    return this.about;
  }
}

console.log(25%5);
