export class Store {
  constructor(
    public createdAt: Date,
    public description: string,
    public id: number,
    public name: string,
    public storeType: StoreType,
    public updatedAt: Date,
  ) {
  }
}

export enum StoreType {
  ACCESSORIES = 'ACCESSORICES',
  LEISURE = 'LEISURE',
  BOOKS_MEDIA_ELECTRONICS = 'BOOKS_MEDIA_ELECTRONICS',
  HEALTH_BEAUTY = 'HEALTH_BEAUTY',
  OPTICIAN = 'OPTICIAN',
  HOME_DECORATION = 'HOME_DECORATION',
  TOYS_HOBBY = 'TOYS_HOBBY',
  GROCERIES = 'GROCERIES',
  RESTAURANT_CAFE = 'RESTAURANT_CAFE',
  JEWELLERY = 'JEWELLERY',
  STAND = 'STAND',
  FASHION = 'FASHION',
  SERVICE = 'SERVICE',
  SPORTS = 'SPORTS'
}

