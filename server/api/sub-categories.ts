import type { CategoryObject } from '~/models/category/CategoryObject'

export default defineEventHandler(() => {
  return [
    {
      GroupID: 1951,
      GroupParentID: 3402,
      GroupName: 'FRESH FOOD',
      GroupCode: 'FRESH.YMKDL',
      DisplayOrder: 1,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3402;1951',
      CountItem: 9,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3394,
      GroupParentID: 3402,
      GroupName: 'FROZEN FOOD',
      GroupCode: 'FROZEN.YMKDL',
      DisplayOrder: 2,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3402;3394',
      CountItem: 84,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3410,
      GroupParentID: 3402,
      GroupName: 'SALTY GROCERY',
      GroupCode: 'SALTY.YMKDL',
      DisplayOrder: 3,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3402;3410',
      CountItem: 174,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3403,
      GroupParentID: 3402,
      GroupName: 'SWEET GROCERY',
      GroupCode: 'SWEET.YMKDL',
      DisplayOrder: 4,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3402;3403',
      CountItem: 120,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3396,
      GroupParentID: 3402,
      GroupName: 'BEVERAGES',
      GroupCode: 'BEVERAGES.YMKDL',
      DisplayOrder: 5,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3402;3396',
      CountItem: 82,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3399,
      GroupParentID: 3398,
      GroupName: "YEN's KITCHEN",
      GroupCode: 'YEN.YMKDL',
      DisplayOrder: 1,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3398;3399',
      CountItem: 18,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
    {
      GroupID: 3464,
      GroupParentID: 3401,
      GroupName: 'Gói Quà Tết',
      GroupCode: 'HAMPER.YMKDL',
      DisplayOrder: 1,
      GroupLevel: 4,
      GroupPath: ';2560;3393;3401;3464',
      CountItem: 2,
      GroupImgUrl: 'https://mastererp.mylifecompany.com/Resources/Images/Items/NoImages.jpg',
    },
  ] as CategoryObject[]
})
