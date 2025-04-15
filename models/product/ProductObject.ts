export interface ProductObject {
  ItemId: number
  ItemNo: string
  ItemName: string
  ItemName1: string
  ItemName2: string
  ItemNameLang: string
  UomName: string
  UomId: number
  ItemUrlImage: string
  ItemDisplayOrder: number | null
  ItemSetMenu: boolean
  ItemPrice: number
  ItemPriceInclTax: number
  ItemDiscountPer: number
  ItemDiscount: number
  DiscountSum: number
  PriceAfterDiscount: number
  VATPer: number
  ItemDiscountWithVat: number
  ItemDescription: string
  CurName: string
  FlashSale: number
  ItemGroupId: number
  ItemGroupName: string
  OrderDetailId: number
  OrderedQuantity: number
  MoreRequestDetail: string
  BackgroundColor: string
  ForeColor: string
  Display: string
  isSoldOut: boolean
  isBuffet: boolean
  ItemSubGroupId: number
  CreateDate: string // ISO date string
  InfoTitle: string
}
