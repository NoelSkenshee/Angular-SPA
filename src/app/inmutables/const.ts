import { HttpHandler, HttpHeaders } from '@angular/common/http';

function joinStrArrayQuey(strArray?: string[]) {
  return strArray ? strArray.join('&') : '';
}
function joinStrArrayParams(strArray?: string[]) {
  alert(strArray?strArray[0]:"")
  return strArray ? strArray.join('/') : '';
}

export const urlBase = 'http://localhost:3000/';
export const Utils = {
  http: {
    url: (end: string, query?: string[]) =>{
      if(query)return `${urlBase}${end}?${joinStrArrayQuey(query)}`;
      else return `${urlBase}${end}`;
    },
    endpoints: {
      dishes: 'dishes',
      dishesPar: (params: string[]) => `dishes/${joinStrArrayParams(params)}`,
      promotions: 'promotions',
      promotionsPar: (params: string[]) =>
        `promotions/${joinStrArrayParams(params)}`,
      leadership: 'leadership',
      leadershipPar: (params: string[]) =>
        `leadership/${joinStrArrayParams(params)}`,
      about: 'about',
      aboutPar: (params: string[]) => `about/${joinStrArrayParams(params)}`,
      feedback: 'feedback',
      feedbackPar: (params: string[]) =>
        `feedback/${joinStrArrayParams(params)}`,
    },
    querys: {
      featured: (featured: boolean) => `featured=${featured}`,
      id: (id: string) => `id=${id}`,
    },
    header: {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Autorization: 'My web token json',
      }),
    },
  },
  components: {
    contact: {
      errorManager: {
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
      },
      errorMessages: {
        firstname: {
          required: 'Youre first name is required',
          minlength: 'Min characters 3',
          maxlength: 'Max character 15',
        },
        lastname: {
          required: 'Youre last name is required',
          minlength: 'Min characters 3',
          maxlength: 'Max character 15',
        },
        telnum: {
          required: 'Youre phpne number is required',
          pattern: 'Is not a valid  phone number',
        },
        email: {
          email: 'Is not a valid email',
          required: 'Youre email is required',
        },
      },
    },
    details: {
      comment: {
        required: 'The comment is required',
        minlength: 'Min total character  30',
      },
      author: {
        required: 'Youre name is required',
        minlength: 'Min total characters 3',
        maxlength: 'Max total characters 10',
      },
    },
  },
};
