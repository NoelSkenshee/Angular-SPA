import { Promotion } from "../Types/promotion";

export class  PromotionsDB{
 private  promotions:Promotion[]=[
  {
    id: '0',
    name: 'Weekend Grand Buffet',
    image: '/assets/images/buffet.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/uthappizza.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image:"/assets/images/uthappizza.png" ,
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }, {
    id: '1',
    name: 'Zucchipakoda',
    image: "/assets/images/uthappizza.png",
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }, {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }, {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }, {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }, {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  },

 ];
  getAllPro(){
    return this.promotions;
  }
}
