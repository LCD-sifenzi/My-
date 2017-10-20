
var pageIndex = 1;
var isRefresh = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogs:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.startPullDownRefresh({})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    pageIndex = 1
    this.getBlogs()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!isRefresh) {
      this.getBlogs()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getBlogs: function () {
    let that = this
    isRefresh = true
    wx.request({
      url: 'https://app.wancheleyuan.com/AppIndex/Foreign_SayTableAPI',
      data: {
        'PageIndex': pageIndex
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        console.log(res.data.Data.length)
        wx.stopPullDownRefresh()
        isRefresh = false
        if (pageIndex == 1) {
          that.setData({ blogs: res.data.Data })
        } else {
          console.log(res.data)
          that.setData({ blogs: [...that.data.blogs, ...res.data.Data] })
        }
        if (res.data.Data.length > 0) {
          pageIndex += 1
        }
      },
      fail: function (res) {
        wx.stopPullDownRefresh()
        isRefresh = false
        console.log('请求错误=>' + res.data)
      }
    })
  }

})


/**
 *
ApplyNum
:
0
BrowseNum
:
3
CollectionNum
:
0
Contens
:
"每次一看到中间那个二货，内心就一万头草泥马奔腾！"
ContensLink
:
null
EndIfRed
:
null
EndLogo
:
null
ExceptionalNum
:
0
FansNum
:
0
GoldNum
:
0
GoodTopic
:
null
HonorItem
:
null
Id
:
18471
IfLike
:
false
IfRed
:
"1"
IfSomething
:
0
ImgType
:
null
InterestList
:
null
IsApply
:
0
IsAuthorized
:
0
IsCanMarvellous
:
false
IsClubManager
:
0
IsCream
:
true
IsFocus
:
false
IsHomePage
:
false
IsMarvellous
:
false
IsMe
:
false
IsQuestion
:
0
IsTop
:
0
IsUpdate
:
0
IsVideo
:
false
Isofficial
:
0
ItemDesc
:
null
JsonContent
:
null
Latitude
:
""
LikeNum
:
0
LikeOrExceptionalNum
:
0
ListTop
:
true
LocalAddress
:
""
Longitude
:
""
MainImg1
:
"https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190811406531064.jpg&Size=4,https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190812054661001.jpg&Size=4,https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190812070161413.jpg&Size=4"
MainImg1Height
:
0
MainImg1Width
:
0
MainImg2
:
""
MainImg3
:
""
OfficialType
:
0
Options
:
null
PayNum
:
0
PicPost
:
Array(3)
0
:
LinkType
:
0
Pic
:
"https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190811406531064.jpg&Size=4"
Piclink
:
""
__proto__
:
Object
1
:
{Pic: "https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190812054661001.jpg&Size=4", Piclink: "", LinkType: 0}
2
:
{Pic: "https://picpan.wancheleyuan.com:444/Index/ImgReView?FileName=a_201710190812070161413.jpg&Size=4", Piclink: "", LinkType: 0}
length
:
3
__proto__
:
Array(0)
Ranking
:
0
ReleaseTime
:
"10月19日 08:12"
RemarkNum
:
1
ReviewList
:
Array(1)
0
:
Contents
:
"我也不喜欢他，甚至不允许孩子看他的片😔"
Floor
:
0
IfRed
:
null
IfReds
:
null
IsReview
:
false
LikeNum
:
0
Liked
:
false
RContents
:
""
RFloor
:
0
RId
:
0
RReviewTime
:
"/Date(1508380744756)/"
RUserId
:
0
RUserLogo
:
""
RUserNickName
:
""
ReviewId
:
168021
ReviewTime
:
null
UserId
:
0
UserLogo
:
"https://picpan.wancheleyuan.com:444/Index/ImgReView?filename=201709272228231562028.png&Size=0"
UserNickName
:
"双瞳"
__proto__
:
Object
length
:
1
__proto__
:
Array(0)
SayNum
:
0
ShareDesc
:
null
ShareLink
:
null
SharePic
:
null
ShareTitle
:
null
ShowNum
:
1
Title
:
"每次一看到中间那个二货，内心就一万头草泥马奔腾！"
TopicType
:
0
TourList
:
null
TypeName
:
null
Typename
:
""
UpdateTime
:
null
UserId
:
4990
UserLogo
:
"https://picpan.wancheleyuan.com:444/Index/ImgReView?filename=201710041518129789322.jpg&Size=0"
UserName
:
"尤尤"
contensPics
:
null
fileId
:
""
str_from
:
0
videoUrl
:
""
 */