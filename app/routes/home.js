import Ember from 'ember';
var news = [{
  id:1,
  title:"Game of Thrones Season 7",
  type:"Series",
  headline:"No, it's not too early to get excited about the return of Game of Thrones. With the HBO hit's sixth run now over, thoughts are inevitably turning to the next season... and how much longer the fantasy epic can run.",
  image:"https://i1.wp.com/www.movienewsguide.com/wp-content/uploads/2016/11/1454967_10153536411297734_7284708237658659372_n.jpg?fit=750%2C392&ssl=1"},{
    id:2,
    title:"Basketball News",
    type:"Sports",
    headline:"NBA free agency is slowing down considerably. But there's still plenty of league news, rumors and updates, and that figures to be the case for a few more days. ",
    image:"http://stadiumastro-kentico.s3.amazonaws.com/stadiumastro/media/perform-article/2017/jun/20/nba-4317-usnews-getty-ftr_rqqfb3my0geo1gf1sllxa83wa.jpg?ext=.jpg"
  },{
    id:3,
    title:"Summer Dresses 2017",
    type:"Fashion",
    headline:"When it's so hot just looking out the window makes you steamy, putting any effort into getting dressed my become an issue. Live a stress-free summer with easy shirt dresses, chic wraps, and roomy kaftans that are simple, but far from basic. Here, 15 easy dresses that will get you through the rest of the season.",
    image:"http://adboard.info/2017/wp-content/uploads/2016/03/Sleeveless-summer-dresses-2017-2018-6.jpg"
  },]
export default Ember.Route.extend({
  model() {
    return news;
  },
});
