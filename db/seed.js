const db = require('./models');

const mediaList = [
    {
      teamId: "100000021",
      logo: "https://www.esportspedia.com/lol/images/a/ab/C9_logo.png",
      splash: "https://i.imgur.com/wSaPdtX.jpg",
    },
    {
      teamId: "100000023",
      logo: "https://www.esportspedia.com/lol/images/e/ed/Echo_Fox_logo.png",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/03/24153409/47361448912_347d244f46_k-1.jpg",
    },
    {
      teamId: "100000024",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=FlyQuest_logo.png&width=300",
      splash: "https://nexus.leagueoflegends.com/wp-content/uploads/2019/03/flyquest_header_nmn8rrqqnxw54syjgqqm.jpg",
    },
    {
      teamId: "100000027",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Dignitas_2019.png&width=300",
      splash: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3sgT3sMVscss7E41msCGi46zSCnb-xem67QhlD7DAf2M0DD5&s",
    },
    {
      teamId: "100000029",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Team_Liquid_logo.png&width=300",
      splash: "http://i.mineski.net/articles/featured_banners/f1ef9618-3fca-4b6e-93da-577057ee3770/f20b890595c44de3482cdb1bc521123e.jpg?1536747853",
    },
    {
      teamId: "100000045",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=100_Thieves_logo.png&width=300",
      splash: "https://nexus.leagueoflegends.com/wp-content/uploads/2019/05/LCS19_Lolesports_TeamWallpapers_100_1920x1080_bwi0j67rnexumgozi0wn.jpg",
    },
    {
      teamId: "100000046",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Clutch_Gaming_Logo.png&width=300",
      splash: "https://pbs.twimg.com/media/DPG6PQRUIAAVnPP.jpg",
    },
    {
      teamId: "100000047",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Golden_Guardians_logo.png&width=300",
      splash: "https://pbs.twimg.com/media/DtMZswBV4AAnEyF.jpg",
    },
    {
      teamId: "100000048",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=OpTic_Gaming_logo.png&width=300",
      splash: "https://cdn.estnn.com/wp-content/uploads/2019/08/08222035/optic-group-cheer.jpg",
    },
    {
      teamId: "100000022",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Counter_Logic_Gaming_logo.png&width=300",
      splash: "https://nexus.leagueoflegends.com/wp-content/uploads/2019/05/LCS19_Lolesports_TeamWallpapers_CLG_3840x2160_7frmh7llcpuockihp68m.jpg",
    },
    {
      teamId: "100000025",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Immortals_Logo_2.png&width=300",
      splash: "https://blogoflegends.com/files/2019/02/Immortals.jpeg",
    },
    {
      teamId: "100000026",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Phoenix1logo_square.png&width=600",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/11093339/98b39d76-8cfe-4e00-ac0d-3e3c6a3032ab.jpg",
    },
    {
      teamId: "100000028",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Team_EnVyUslogo_square.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/12051116/1lnAhFnr.jpg",
    },
    {
      teamId: "100000030",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Team_SoloMid_logo.png&width=300 ",
      splash: "https://nexus.leagueoflegends.com/wp-content/uploads/2019/01/3rdplacematch_header_94ui4gwel6wc7017bgbs.jpg",
    },   
];

db.Media.remove({}, () => {
  mediaList.forEach(media => {
    db.Media.create(media, (err, savedMedia) => {
      if (err) return console.log(err);
      console.log(savedMedia);
    });
  });
});