const db = require('../models');

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
    {
      teamId: "100000001",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Afreeca_Freecs_logo.png&width=300",
      splash: "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/aa/Afreeca_Freecs_Roster_2018_Spring.png",
    },
    {
      teamId: "100000002",
      logo: "https://www.esportspedia.com/lol/images/a/a3/BBQ_Olivers_logo.png",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/10/20000633/bbq-1.jpg",
    },
    {
      teamId: "100000003",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Jin_Air_GreenWings_logo.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/09/11102132/48508948991_2c402a5af9_k.jpg",
    },
    {
      teamId: "100000004",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=KongdooMonstersNew.png&width=300",
      splash: "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/a6/Kongdoo_Monster_Roster_2018_Spring.png",
    },
    {
      teamId: "100000005",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=KT_Rolster_logo.png&width=300",
      splash: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqoUh0igvkiB7YjkVNpN9q8k_WFxA3XiA7VaJLjngejBSeQ0q&s",
    },
    {
      teamId: "100000006",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=LongZhu_Gaminglogo_square.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/11141246/0ede5d7c-6db5-408e-8cb2-0e0bd2b276e3.jpg",
    },
    {
      teamId: "100000007",
      logo: "https://www.esportspedia.com/lol/images/7/7f/MVP_logo.png",
      splash: "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/0b/MVP_2017_LCK_SPRING.png",
    },
    {
      teamId: "100000008",
      logo: "https://www.esportspedia.com/lol/images/9/94/Roxtigersnew.png",
      splash: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0110%2Fr170071_1296x729_16%2D9.jpg",
    },
    {
      teamId: "100000009",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Samsung_Galaxy.png&width=300",
      splash: "http://ic.pics.livejournal.com/markerlimes/65805276/277/277_original.jpg",
    },
    {
      teamId: "100000010",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=T1_2019_logo.png&width=300",
      splash: "https://s3-eu-west-1.amazonaws.com/pplus.images.dexerto.com/uploads/thumbnails/_thumbnailLarge/sk-telecom-rebranding-comcast-t1-entertainment-sports.jpg",
    },
    {
      teamId: "100000031",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Ever8_Winners.png&width=300",
      splash: "https://i.ytimg.com/vi/MuGcEc-JFdU/maxresdefault.jpg",
    },
    {
      teamId: "100000034",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Kingzone_DragonX_logo.png&width=300",
      splash: "https://nineteesix.files.wordpress.com/2018/04/a312fb7d-4839-41b7-85db-e8bee9973d1c.jpg?w=1200&h=675",
    },
    {
      teamId: "100000035",
      logo: "https://www.esportspedia.com/lol/images/9/94/KSV_eSportslogo_square.png",
      splash: "https://cdn.vox-cdn.com/thumbor/pv-zlmf7l05hQdKEVTUK-PDuGR4=/0x0:2048x1152/1200x800/filters:focal(856x115:1182x441)/cdn.vox-cdn.com/uploads/chorus_image/image/57807029/ssg_to_ksv.0.jpg",
    },
    {
      teamId: "100000064",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Gen.G_logo.png&width=300",
      splash: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/11/25/inaugural-pubg-global-championship-ends-with-geng-win_feature.jpg",
    },
    {
      teamId: "100000065",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Griffin_logo.png&width=300",
      splash: "https://static1.millenium.us.org/articles/0/74/40/@/76923-griffin-first-seed-group-a-2019-worlds-amp_main_media_schema-1.jpg",
    },
    {
      teamId: "100000066",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Hanwha_Life_Esports_logo.png&width=300",
      splash: "https://www.korizon.net/wp-content/uploads/2019/11/Haru-and-Sake.jpg",
    },
    {
      teamId: "100000154",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=DAMWON_Gaming_logo.png&width=300",
      splash: "https://static.invenglobal.com/upload/image/2019/10/05/i1570276028544017.jpeg",
    },
    {
      teamId: "100000155",
      logo: "https://www.esportspedia.com/lol/images/0/0c/SANDBOX_Gaminglogo_square.png",
      splash: "https://editorial01.shutterstock.com/wm-preview-1500/10322500b/3dbcf047/league-of-legends-champions-match-31-seoul-south-korea-shutterstock-editorial-10322500b.jpg",
    },
    {
      teamId: "100000011",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Fnatic_logo.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/11/02155452/FNC-Worlds-2018-2.jpg",
    },
    {
      teamId: "100000033",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Nip_2017.png&width=300",
      splash: "https://s.starladder.com/uploads/ckeditor/elfinder/s.shutko/fifa/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-06-16%20%D0%B2%2023.21.23.png",
    },
    {
      teamId: "100000012",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=G2_Esports_2019_logo.png&width=300",
      splash: "https://image.redbull.com/rbcom/052/2019-09-09/5e8b32c4-4519-4a1f-acdf-f2c26145c3c7/0012/0/0/0/1365/2047/1050/1/g2-esports-lec-summer-split-gaming.jpg",
    },
    {
      teamId: "100000013",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=VodafoneGiants2019.png&width=300",
      splash: "https://pbs.twimg.com/media/DTMy7eLXcAItgVW.jpg",
    },
    {
      teamId: "100000016",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Origen_2018_logo.png&width=300",
      splash: "https://image.redbull.com/rbcom/010/2015-11-18/1331760352635_2/0100/0/1/nico-will-be-hoping-the-team-goes-far-at-worlds.jpg",
    },
    {
      teamId: "100000014",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=H2K-new-logo.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/09/11183951/H2k-2018.jpg",
    },
    {
      teamId: "100000015",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Misfits_Logo.png&width=300",
      splash: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dd7e44ce0af7b0006b1feae%2F960x0.jpg",
    },
    {
      teamId: "100000074",
      logo: "https://www.esportspedia.com/lol/images/4/48/ExceL.png",
      splash: "https://eu.lolesports.com/lec-assets/v11/img/excel-header-1920.jpg",
    },
    {
      teamId: "100000017",
      logo: "https://www.esportspedia.com/lol/images/9/9e/Splycelogo_square.png",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/05/30203113/CWLVegas_2018_Day2_12-2.jpg",
    },
    {
      teamId: "100000018",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=ROCCAT.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/11115548/fba2b8d8-0765-4fef-9bb6-5fcc53cae6d4.jpg",
    },
    {
      teamId: "100000020",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=UOL_logo.png&width=300",
      splash: "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/11/02170450/28647952127_d02c550324_k.jpg",
    },
    {
      teamId: "100000032",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=MyMosquare.png&width=300",
      splash: "https://s3.amazonaws.com/battlefy-user-generated-assets-with-permissions%2Fauth0%7C56d838196803fe81122bfb88/facebook_banner.png.1470652992440",
    },
    {
      teamId: "100000036",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=FC_Schalke_04_Esports_logo.png&width=300",
      splash: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0824%2Fr419503_1296x729_16%2D9.jpg",
    },
    {
      teamId: "100000076",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=SK_Gaminglogo_square.png&width=300",
      splash: "https://oddslifenetstorage.blob.core.windows.net/esportsinsider/2019/11/SK-Gaming-SMITE-World-Championship.jpg",
    },
    {
      teamId: "100000019",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=Team_Vitalitylogo_square.png&width=300",
      splash: "https://image.redbull.com/rbcom/010/2016-08-23/1331813511607_4/0100/0/1/vitality-have-a-team-meeting-before-a-league-of-legends-lcs-match.jpg",
    },
    {
      teamId: "100000075",
      logo: "https://www.esportspedia.com/lol/thumb.php?f=TeamRogue.png&width=300",
      splash: "https://cdn.segmentnext.com/wp-content/uploads/2017/10/mossawi_687315532471_20160821022851_142378000076.png",
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