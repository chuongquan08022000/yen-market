import type { CategoryObject } from '~/models/category/CategoryObject'

export default defineEventHandler(() => {
  return [
    {
      GroupID: 3466,
      GroupParentID: 3393,
      GroupName: 'PROMOTION',
      GroupCode: 'PRO.YMKDL',
      DisplayOrder: 0,
      GroupLevel: 3,
      GroupPath: ';2560;3393;3466',
      CountItem: 61,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3402,
      GroupParentID: 3393,
      GroupName: 'OUR PRODUCTS',
      GroupCode: 'OUR.YMKDL',
      DisplayOrder: 1,
      GroupLevel: 3,
      GroupPath: ';2560;3393;3402',
      CountItem: 469,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3398,
      GroupParentID: 3393,
      GroupName: 'YEN MARKET MENU',
      GroupCode: 'YEN MARKET.YMKDL',
      DisplayOrder: 2,
      GroupLevel: 3,
      GroupPath: ';2560;3393;3398',
      CountItem: 18,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3401,
      GroupParentID: 3393,
      GroupName: 'SEASONAL',
      GroupCode: 'SEASONAL.YMKDL',
      DisplayOrder: 3,
      GroupLevel: 3,
      GroupPath: ';2560;3393;3401',
      CountItem: 2,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
  ] as CategoryObject[]
})
