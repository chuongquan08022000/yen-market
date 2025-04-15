export interface CategoryObject {
  GroupID: number
  GroupParentID: number
  GroupName: string
  GroupCode: string
  DisplayOrder: number
  GroupLevel: number
  GroupPath: string
  CountItem: number
  GroupImgUrl: string
}

export interface SubCategoryObject {
  ItemGroupId: number
  ItemGroupName: string
  BackgroundColor: string
  ForeColor: string
  DisplayOrder: number
  GroupLevel: number
  GroupPath: string
  ParentID: number
  GroupImgUrl: string
  InfoTitle?: string
}
