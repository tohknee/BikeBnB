"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "SpotImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          url: "https://fastly.picsum.photos/id/155/200/200.jpg?hmac=D_Tf9XAIteS9U6InmFX2j3DXYkvhlEOOkGGiWuMwU9Q",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://fastly.picsum.photos/id/257/200/200.jpg?hmac=k0qf_n518If39xOB7qmdqgZZNQ38WdbfQXdF30TSPCw",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://fastly.picsum.photos/id/165/200/200.jpg?hmac=tQGrY9pm5ze9soSsZ5CNBt87zqnHfFwdPv_khau12Sw",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://fastly.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://fastly.picsum.photos/id/261/200/200.jpg?hmac=4mNici_jSM7rVZzJL7M6G24f0axnDV3BZR-LBo5gMIg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://fastly.picsum.photos/id/626/200/200.jpg?hmac=k-fpo_bQAtxcljtuQzE1GTq5YEufAV5jjzW3n86c0i0",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://fastly.picsum.photos/id/851/200/200.jpg?hmac=JVRP-bj1-hofsGmrxkRZ4VaDr699PvCv6i8zcc6n-GQ",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://fastly.picsum.photos/id/397/200/200.jpg?hmac=3VBYe8NBAUuvEizTQB0-d8wp2jgqMblJK8vH3h8cslE",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://fastly.picsum.photos/id/447/200/200.jpg?hmac=CwQWs2SxtAz87GyTTmC1s4okk4869xQiZAfx7rPW0FM",
          preview: false,
        },
         {
          spotId: 2,
          url: "https://fastly.picsum.photos/id/834/200/200.jpg?hmac=vcoSQ7O6i2vxWANscm-9EGrw0MNqLzU3X0pQZ1o5ovI",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://fastly.picsum.photos/id/863/200/200.jpg?hmac=b2PqP--PkLWi3zKCrto-MSpLXkrtt4kYpKbUkZa2Yjo",
          preview: true,
        },
        {
          spotId: 3,
          url: "ihttps://fastly.picsum.photos/id/618/200/200.jpg?hmac=749yPgO2NHLB8qH92MCDtCjdkglAPh6-J4CygmoI2JYl",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://fastly.picsum.photos/id/645/200/200.jpg?hmac=cSCoZuf6WY_fGNCAORxjDRxPwHsSbagPJ1_9SRlugUs",
          preview: false,
        }, {
          spotId: 3,
          url: "https://fastly.picsum.photos/id/396/200/200.jpg?hmac=1OjJQ2_7SRz0wUfAkBJnIpcCn8IbJrSE5o3zG3T3tJY",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://fastly.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://fastly.picsum.photos/id/830/200/200.jpg?hmac=3ce7zNUn5yg_XKy7dHgIHta7t_0vghPQnAGUSGJuBZE",
          preview: true,
        },
        {
          spotId:4 ,
          url: "https://fastly.picsum.photos/id/87/200/200.jpg?hmac=IHnh6D2-VHDRNEnAKr5_9gaKNH6PfBO0XifjLCb4GUY",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://fastly.picsum.photos/id/1019/200/200.jpg?hmac=KHfXQt_BONEwuWtr85KJ-jStSnVp_GL9FWpJXW_XtKw",
          preview: false,
        },{
          spotId: 4,
          url: "https://fastly.picsum.photos/id/249/200/200.jpg?hmac=75zqoHvrxGGVnJnS8h0gUzZ3zniIk6PggG38GjmyOto",
          preview: false,
        },
        {
          spotId:5 ,
          url: "https://fastly.picsum.photos/id/57/200/200.jpg?hmac=EAluVy04ceTUijEPw3vraS5dkJ6vtBD3HmNwvMI5f3k",
          preview: true,
        },
         {
          spotId:5 ,
          url: "https://fastly.picsum.photos/id/117/200/200.jpg?hmac=hAXY0lMbkjkxYIKxW0UjtazVquGY1NCu3ruHLJGc4gs",
          preview: false,
        },
        {
          spotId:5 ,
          url: "https://fastly.picsum.photos/id/856/200/200.jpg?hmac=0i-cnhrzdHoF0g75vH6s_S8RUe5ej3nWdKiqxfYhuTo",
          preview: false,
        },
        {
          spotId:5 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:5 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId: 6,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:7 ,
          url: "https://fastly.picsum.photos/id/1063/200/200.jpg?hmac=MY2ChBFr2WzXJRx0fJyztE7fXaMohAdg1Gh1U7yop1k",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId: 7,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:8 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId:8,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:9 ,
          url: "https://fastly.picsum.photos/id/33/200/200.jpg?hmac=Byvb9ZEKV47fLdwaE2BGClGsgcm5fyuDH6sWb9pvWbI",
          preview: true,
        },

        {
          spotId: 9,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:9 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:9 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:10 ,
          url: "https://fastly.picsum.photos/id/925/200/200.jpg?hmac=GRls_CYMB5cOj1RE3IwjOC0zUwiPc25idJNavVPWbtM",
          preview: true,
        },
        {
          spotId:10 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId: 10,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://fastly.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA",
          preview: true,
        },
        {
          spotId:11 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId:11 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:12 ,
          url: "https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },

        {
          spotId: 12,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:12 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 12,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 13,
          url: "https://fastly.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI",
          preview: true,
        },

        {
          spotId: 13,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 13,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:13 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 13,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 14,
          url: "https://fastly.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI",
          preview: true,
        },

        {
          spotId: 14,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 14,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:14,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 14,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 15,
          url: "https://fastly.picsum.photos/id/428/200/200.jpg?hmac=t9FYhwylg9uE-Y2lJluz7aIxlV_-R2FJQZV8UpoOu7M",
          preview: true,
        },

        {
          spotId: 15,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 15,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:15,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 15,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 16,
          url: "https://fastly.picsum.photos/id/434/200/200.jpg?hmac=XGqvfpLw0rMcPyD8jH0Ta9jFlmmXrnpbu7IcMOORrQQ",
          preview: true,
        },

        {
          spotId: 16,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 16,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:16,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 16,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 17,
          url: "https://fastly.picsum.photos/id/217/200/200.jpg?hmac=LoNAUhfCfURrqYjw6WECEWybn4B8y37k5G2odewlZ_Y",
          preview: true,
        },

        {
          spotId: 17,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 17,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:17,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 17,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 18,
          url: "https://fastly.picsum.photos/id/799/200/200.jpg?hmac=zFQHfBiAYFHDNrr3oX_pQDYz-YWPWTDB3lIszvP8rRY",
          preview: true,
        },

        {
          spotId: 18,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:18 ,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:18,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 18,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 19,
          url: "https://fastly.picsum.photos/id/743/200/200.jpg?hmac=p4EqNQGnGvZo65W4_FlXvjPQG8g1ogR7bgvnrQCUnEs",
          preview: true,
        },

        {
          spotId: 19,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 19,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:19,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 19,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:20 ,
          url: "https://fastly.picsum.photos/id/465/200/200.jpg?hmac=66oxx-Qv8Bakk-7zPy6Kdv7t064QKKWhmDwQTWGZ7A0",
          preview: true,
        },

        {
          spotId: 20,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 20,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId:20,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },
        {
          spotId: 20,
          url: "https://fastly.picsum.photos/id/327/200/200.jpg?hmac=-qY8ApRJQJVHwDBxBmp-qnzM8xmqT5aJwHUXxZy3RAM",
          preview: false,
        },




      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        spotId: { [Op.in]: [1, 2] },
      },
      {}
    );
  },
};
