import axios from 'axios';

export default {
	namespaced: true,
	state: {
		searchedGifs: [],
	},
	getters: {
		searchedGifs(state) {
			return state.searchedGifs;
		}
	},
	mutations: {
		addGifsIntoSearchedGifs(state, gifs) {
			for (const gif of gifs) {	//not using concat for future animation implementations / reactivity design
				state.searchedGifs.push(gif);
			}
		}
	},
	actions: {
		getGifsFromGiphy(store, searchInput) {
			/* const gifList = await axios.get(
				"https://api.giphy.com/v1/gifs/search?" +
				"api_key=" + "STZdG71c7H6T5YF4RefqSFm6IFMNbKRu" +
                "&q=" + gifName +
                "&limit=25" +
                "&offset=0" +//limit * currentPage
                "&lang=" + "pt"
			) */

			return {
				"data": [
				  {
					"type": "gif",
					"id": "7J7ncOYCSiHXwxfo3R",
					"url": "https://giphy.com/gifs/happy-sun-good-morning-7J7ncOYCSiHXwxfo3R",
					"slug": "happy-sun-good-morning-7J7ncOYCSiHXwxfo3R",
					"bitly_gif_url": "https://gph.is/2pBT5QH",
					"bitly_url": "https://gph.is/2pBT5QH",
					"embed_url": "https://giphy.com/embed/7J7ncOYCSiHXwxfo3R",
					"username": "omerstudios",
					"source": "www.clipcards.net",
					"title": "Happy Good Morning GIF by Omer Studios",
					"rating": "pg",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "www.clipcards.net",
					"is_sticker": 0,
					"import_datetime": "2018-10-05 20:18:19",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "760762",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "710338",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "20",
						"hash": "883618bf67e27a488438119246db2b37"
					  },
					  "downsized": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "164",
						"width": "246",
						"mp4_size": "49247",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "300",
						"size": "352347",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "141052",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "192316",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "300",
						"size": "143412",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "81786",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "150",
						"size": "196206",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "46430",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "74478",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "150",
						"size": "7648",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "300",
						"size": "18576",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "133",
						"width": "200",
						"size": "332242",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "71996",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "108164",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "133",
						"width": "200",
						"size": "107934",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "42634",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "67",
						"width": "100",
						"size": "68907",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "26703",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "43182",
						"webp": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "67",
						"width": "100",
						"size": "4332",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "133",
						"width": "200",
						"size": "11419",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "5617447",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "320",
						"width": "480",
						"size": "51892",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "320",
						"width": "480",
						"mp4_size": "760762",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "128",
						"width": "192",
						"mp4_size": "34042",
						"mp4": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "71",
						"width": "107",
						"size": "34351",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "82",
						"width": "124",
						"size": "28832",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "320",
						"width": "480",
						"size": "1017152",
						"url": "https://media1.giphy.com/media/7J7ncOYCSiHXwxfo3R/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media3.giphy.com/avatars/omerstudios/wG9hnQyPYgOT.png",
					  "banner_image": "https://media3.giphy.com/headers/omerismos/3gFzR5rNSEYu.gif",
					  "banner_url": "https://media3.giphy.com/headers/omerismos/3gFzR5rNSEYu.gif",
					  "profile_url": "https://giphy.com/omerstudios/",
					  "username": "omerstudios",
					  "display_name": "Omer Studios",
					  "description": "Illustrator & Gif Maker\r\n\r\n\r\n* Characters \r\n* Typography\r\n* Backgrounds\r\n* Greeting Cards",
					  "instagram_url": "https://instagram.com/omerstudios",
					  "website_url": "http://www.omerstudios.com",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTdKN25jT1lDU2lIWHd4Zm8zUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdKN25jT1lDU2lIWHd4Zm8zUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdKN25jT1lDU2lIWHd4Zm8zUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTdKN25jT1lDU2lIWHd4Zm8zUiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "SYzT1oZZSkLRWapi3J",
					"url": "https://giphy.com/gifs/brasil-brazil-carmelacaldart-SYzT1oZZSkLRWapi3J",
					"slug": "brasil-brazil-carmelacaldart-SYzT1oZZSkLRWapi3J",
					"bitly_gif_url": "https://gph.is/g/ZlleBGg",
					"bitly_url": "https://gph.is/g/ZlleBGg",
					"embed_url": "https://giphy.com/embed/SYzT1oZZSkLRWapi3J",
					"username": "carmelacaldart",
					"source": "http://carmelacaldart.com",
					"title": "Bom Dia Brazil GIF by carmelacaldart",
					"rating": "g",
					"content_url": "",
					"source_tld": "carmelacaldart.com",
					"source_post_url": "http://carmelacaldart.com",
					"is_sticker": 0,
					"import_datetime": "2021-10-22 14:03:04",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "656976",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "737270",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "52",
						"hash": "4fb54d7164c8c66e98951d391700489d"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "260",
						"width": "260",
						"mp4_size": "85815",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "420743",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "107362",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "211330",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "50668",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "33472",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "134343",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "34216",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "87964",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2273",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "4703",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "420743",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "107362",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "211330",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "50668",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "33472",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "134343",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "34216",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "87964",
						"webp": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2273",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "4703",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "3263345",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "44244",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "656976",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "242",
						"width": "242",
						"mp4_size": "37652",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "110",
						"width": "110",
						"size": "49587",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "226",
						"width": "226",
						"size": "46010",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1080",
						"mp4_size": "3217154",
						"mp4": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "1820219",
						"url": "https://media2.giphy.com/media/SYzT1oZZSkLRWapi3J/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/carmelacaldart/PKvkO9ZyMvnd.gif",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/carmelacaldart/",
					  "username": "carmelacaldart",
					  "display_name": "carmelacaldart",
					  "description": "Hello! I’m Carmela, a Brazilian illustrator & GIF-maker in Barcelona.\r\n\r\nMy work is bold, colorful and lighthearted, but often touches on issues I’m passionate about - making sure to be as diverse, inclusive, and accessible as possible.\r\n\r\nThrough my work, I strive to break down paradigms and stereotypes about bodies, portraying characters who are confident, strong, present, badass, and who take up space - often with bright colors, playful textures, and a touch of humor.",
					  "instagram_url": "https://instagram.com/carmelacaldart",
					  "website_url": "http://www.carmelacaldart.com",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPVNZelQxb1paU2tMUldhcGkzSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNZelQxb1paU2tMUldhcGkzSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNZelQxb1paU2tMUldhcGkzSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNZelQxb1paU2tMUldhcGkzSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "6pt04KgHyWhB4sllaW",
					"url": "https://giphy.com/gifs/ryndean-bom-dia-kathryn-dean-ryn-6pt04KgHyWhB4sllaW",
					"slug": "ryndean-bom-dia-kathryn-dean-ryn-6pt04KgHyWhB4sllaW",
					"bitly_gif_url": "https://gph.is/g/aXNxj5V",
					"bitly_url": "https://gph.is/g/aXNxj5V",
					"embed_url": "https://giphy.com/embed/6pt04KgHyWhB4sllaW",
					"username": "ryndean",
					"source": "",
					"title": "Yawning Good Morning GIF by Ryn Dean",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2021-07-09 17:42:00",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "2436590",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "463819",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "584720",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "53",
						"hash": "cf863f06342b94b003481ad8f0fbaf23"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "1668800",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-downsized.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "2436590",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "2436590",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "314",
						"width": "314",
						"mp4_size": "108386",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "32489",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-downsized_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "535212",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "118241",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "217690",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "74621",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "41774",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "174757",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "43834",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "93412",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "4214",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "14281",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "535212",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "118241",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "217690",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "74621",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "41774",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "174757",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "43834",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "93412",
						"webp": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "4214",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "14281",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1760149",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "53655",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "463819",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "330",
						"width": "330",
						"mp4_size": "28107",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "80",
						"width": "80",
						"size": "49781",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "238",
						"width": "238",
						"size": "49070",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1888",
						"width": "1888",
						"mp4_size": "5116228",
						"mp4": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "2436590",
						"url": "https://media3.giphy.com/media/6pt04KgHyWhB4sllaW/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media2.giphy.com/avatars/kathryndeanofficial/mnhDretjf7gW.gif",
					  "banner_image": "https://media2.giphy.com/headers/kathryndeanofficial/Shnvv8qFgT8h.jpg",
					  "banner_url": "https://media2.giphy.com/headers/kathryndeanofficial/Shnvv8qFgT8h.jpg",
					  "profile_url": "https://giphy.com/ryndean/",
					  "username": "ryndean",
					  "display_name": "Ryn Dean",
					  "description": "Los Angeles-based singer/songwriter.",
					  "instagram_url": "https://instagram.com/theryndean",
					  "website_url": "https://www.ryndean.com/",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTZwdDA0S2dIeVdoQjRzbGxhVyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZwdDA0S2dIeVdoQjRzbGxhVyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZwdDA0S2dIeVdoQjRzbGxhVyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZwdDA0S2dIeVdoQjRzbGxhVyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "ZJto2akDNWFpnQLdA8",
					"url": "https://giphy.com/gifs/Encantadoradeunhas-encantadoradigital-luana-marfil-encantadoradeunhas-ZJto2akDNWFpnQLdA8",
					"slug": "Encantadoradeunhas-encantadoradigital-luana-marfil-encantadoradeunhas-ZJto2akDNWFpnQLdA8",
					"bitly_gif_url": "https://gph.is/g/aXexg1V",
					"bitly_url": "https://gph.is/g/aXexg1V",
					"embed_url": "https://giphy.com/embed/ZJto2akDNWFpnQLdA8",
					"username": "Encantadoradeunhas",
					"source": "",
					"title": "Bom Dia Love GIF by Encantadora de unhas",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2022-01-12 21:05:26",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "65861",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "71326",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "4",
						"hash": "930c5e5f480da3b3b890df7ac39bc127"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "480",
						"width": "480",
						"mp4_size": "66618",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "20385",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "20910",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "20068",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "20385",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "24490",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "9116",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "8500",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "8668",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2650",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "5099",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "20385",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "20910",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "20068",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "20385",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "24490",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "9116",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "8500",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "8668",
						"webp": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2650",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "5099",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "615997",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "22487",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "65861",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "414",
						"width": "414",
						"mp4_size": "37034",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "244",
						"width": "244",
						"size": "48040",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "480",
						"width": "480",
						"size": "49970",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1000",
						"width": "1000",
						"mp4_size": "161064",
						"mp4": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "69764",
						"url": "https://media1.giphy.com/media/ZJto2akDNWFpnQLdA8/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media2.giphy.com/avatars/Encantadoradeunhas/GQXsg7iUyooz.jpeg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/Encantadoradeunhas/",
					  "username": "Encantadoradeunhas",
					  "display_name": "Encantadora de unhas",
					  "description": "Produtora de Películas de Unhas\r\nJoinha com GARANTIA e programa fidelidade",
					  "instagram_url": "https://instagram.com/luana",
					  "website_url": "http://www.encantadoradeunhas.com.br/",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPVpKdG8yYWtETldGcG5RTGRBOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpKdG8yYWtETldGcG5RTGRBOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpKdG8yYWtETldGcG5RTGRBOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpKdG8yYWtETldGcG5RTGRBOCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "yA8xQzQvapxoScxupk",
					"url": "https://giphy.com/gifs/visual-bom-identidade-yA8xQzQvapxoScxupk",
					"slug": "visual-bom-identidade-yA8xQzQvapxoScxupk",
					"bitly_gif_url": "https://gph.is/g/Z7pRpJm",
					"bitly_url": "https://gph.is/g/Z7pRpJm",
					"embed_url": "https://giphy.com/embed/yA8xQzQvapxoScxupk",
					"username": "samararodrigues4683",
					"source": "idsamara",
					"title": "",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "idsamara",
					"is_sticker": 0,
					"import_datetime": "2020-09-29 21:20:38",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "400",
						"width": "400",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "18060",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "10536",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "2",
						"hash": "8cb19ee6d58bcb29d472a50ae919b856"
					  },
					  "downsized": {
						"height": "400",
						"width": "400",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "400",
						"width": "400",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "400",
						"width": "400",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "400",
						"width": "400",
						"mp4_size": "14602",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "400",
						"width": "400",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "6626",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "6857",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "4686",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "6626",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "4958",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "3538",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "3552",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "2050",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2329",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "3867",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "6626",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "6857",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "4686",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "6626",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "4958",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "3538",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "3552",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "2050",
						"webp": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2329",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "3867",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "579282",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "400",
						"width": "400",
						"size": "17088",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "18060",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "400",
						"width": "400",
						"mp4_size": "14602",
						"mp4": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "400",
						"width": "400",
						"size": "30833",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "400",
						"width": "400",
						"size": "10536",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "16601",
						"url": "https://media4.giphy.com/media/yA8xQzQvapxoScxupk/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media0.giphy.com/avatars/samararodrigues4683/XjDt0w8QPp5N.jpg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/channel/samararodrigues4683/",
					  "username": "samararodrigues4683",
					  "display_name": "idsamara",
					  "description": "",
					  "instagram_url": "",
					  "website_url": "http://giphy.com/channel/samararodrigues4683",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPXlBOHhRelF2YXB4b1NjeHVwayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXlBOHhRelF2YXB4b1NjeHVwayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXlBOHhRelF2YXB4b1NjeHVwayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXlBOHhRelF2YXB4b1NjeHVwayZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "0r7y9nq9iXwMVXlZPc",
					"url": "https://giphy.com/gifs/salonline-salon-line-sarah-gama-sarahgama-0r7y9nq9iXwMVXlZPc",
					"slug": "salonline-salon-line-sarah-gama-sarahgama-0r7y9nq9iXwMVXlZPc",
					"bitly_gif_url": "https://gph.is/g/4D8nWGO",
					"bitly_url": "https://gph.is/g/4D8nWGO",
					"embed_url": "https://giphy.com/embed/0r7y9nq9iXwMVXlZPc",
					"username": "salonline",
					"source": "",
					"title": "Good Morning Hello GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2021-03-18 14:20:56",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "454281",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "548454",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "34",
						"hash": "c9f341329e5d444c7d5dfc5a3460c8c0"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "238",
						"width": "317",
						"mp4_size": "137972",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "540676",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "196430",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "284600",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "106817",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "66970",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "183835",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "80918",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "118678",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "6656",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "17122",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "380710",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "137588",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "201038",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "73157",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "45740",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "120319",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "48580",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "81822",
						"webp": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4479",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "11402",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2805190",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "60833",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "454281",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "182",
						"width": "242",
						"mp4_size": "46784",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "69",
						"width": "92",
						"size": "49555",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "134",
						"width": "178",
						"size": "49002",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1440",
						"mp4_size": "2323365",
						"mp4": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "1865691",
						"url": "https://media0.giphy.com/media/0r7y9nq9iXwMVXlZPc/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media3.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media3.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media3.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTByN3k5bnE5aVh3TVZYbFpQYyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTByN3k5bnE5aVh3TVZYbFpQYyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTByN3k5bnE5aVh3TVZYbFpQYyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTByN3k5bnE5aVh3TVZYbFpQYyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "ajGuegoyhfzJetDWR1",
					"url": "https://giphy.com/gifs/Vimodji-bom-dia-feliz-vimodji-ajGuegoyhfzJetDWR1",
					"slug": "Vimodji-bom-dia-feliz-vimodji-ajGuegoyhfzJetDWR1",
					"bitly_gif_url": "https://gph.is/g/4D87r0O",
					"bitly_url": "https://gph.is/g/4D87r0O",
					"embed_url": "https://giphy.com/embed/ajGuegoyhfzJetDWR1",
					"username": "Vimodji",
					"source": "https://www.vimodji.com/video/YQdJgRoeOG_bom-dia",
					"title": "Bom Dia GIF by Vimodji",
					"rating": "g",
					"content_url": "",
					"source_tld": "www.vimodji.com",
					"source_post_url": "https://www.vimodji.com/video/YQdJgRoeOG_bom-dia",
					"is_sticker": 0,
					"import_datetime": "2021-05-05 09:59:03",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "156770",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "266214",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "61",
						"hash": "949ce8fb06205dff050b020a327fed96"
					  },
					  "downsized": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "270",
						"width": "480",
						"mp4_size": "156770",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "356",
						"size": "625554",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "103564",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "258708",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "356",
						"size": "168631",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "124166",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "178",
						"size": "246568",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "41736",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "104222",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "178",
						"size": "11021",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "356",
						"size": "29865",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "113",
						"width": "200",
						"size": "236494",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "48305",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "128472",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "113",
						"width": "200",
						"size": "66310",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "50832",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "57",
						"width": "100",
						"size": "92344",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "18531",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "35248",
						"webp": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "57",
						"width": "100",
						"size": "4700",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "113",
						"width": "200",
						"size": "13809",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "574588",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "270",
						"width": "480",
						"size": "58787",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "270",
						"width": "480",
						"mp4_size": "156770",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "216",
						"width": "384",
						"mp4_size": "26487",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "83",
						"width": "148",
						"size": "48434",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "100",
						"width": "178",
						"size": "39096",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "406",
						"width": "720",
						"mp4_size": "237249",
						"mp4": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "270",
						"width": "480",
						"size": "1142379",
						"url": "https://media1.giphy.com/media/ajGuegoyhfzJetDWR1/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/Vimodji/Y4mCyEMaYq49.png",
					  "banner_image": "https://media1.giphy.com/headers/Vimodji/nIdHvuptV2Ov.png",
					  "banner_url": "https://media1.giphy.com/headers/Vimodji/nIdHvuptV2Ov.png",
					  "profile_url": "https://giphy.com/Vimodji/",
					  "username": "Vimodji",
					  "display_name": "Vimodji",
					  "description": "The world’s largest library of short videos by mood, now on your mobile phone! Vimodji is the simplest way to search and share video emojis (vimodjis) across all of your favorite social channels. Navigate through our world and be amazed with what vimodjis can express, compared to text, emoji’s, stickers and gifs!",
					  "instagram_url": "https://instagram.com/vimodjis",
					  "website_url": "https://vimodji.com/",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPWFqR3VlZ295aGZ6SmV0RFdSMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFqR3VlZ295aGZ6SmV0RFdSMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFqR3VlZ295aGZ6SmV0RFdSMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFqR3VlZ295aGZ6SmV0RFdSMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "TKXMVRt5uvV8OYErao",
					"url": "https://giphy.com/gifs/studiosoriginals-TKXMVRt5uvV8OYErao",
					"slug": "studiosoriginals-TKXMVRt5uvV8OYErao",
					"bitly_gif_url": "https://gph.is/g/E0WAqXo",
					"bitly_url": "https://gph.is/g/E0WAqXo",
					"embed_url": "https://giphy.com/embed/TKXMVRt5uvV8OYErao",
					"username": "studiosoriginals",
					"source": "",
					"title": "Bom Dia Portugese GIF by GIPHY Studios Originals",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2020-09-01 17:40:19",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "1080",
						"width": "1080",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "35492",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "94348",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "3",
						"hash": "5a339491e270102138155b2772abb8a1"
					  },
					  "downsized": {
						"height": "1080",
						"width": "1080",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "1080",
						"width": "1080",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "1080",
						"width": "1080",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "1080",
						"width": "1080",
						"mp4_size": "92264",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "1080",
						"width": "1080",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "16956",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "12540",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "14398",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "16956",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "13952",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "8113",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "5631",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "6238",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "3214",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "6203",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "16956",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "12540",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "14398",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "16956",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "13952",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "8113",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "5631",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "6238",
						"webp": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "3214",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "6203",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1829613",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "1080",
						"width": "1080",
						"size": "31011",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "35492",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "794",
						"width": "794",
						"mp4_size": "37827",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "255",
						"width": "255",
						"size": "49658",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "578",
						"width": "578",
						"size": "49280",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1080",
						"mp4_size": "92264",
						"mp4": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "85851",
						"url": "https://media2.giphy.com/media/TKXMVRt5uvV8OYErao/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media2.giphy.com/avatars/studiosoriginals/YkMcrX3ELQ7C.gif",
					  "banner_image": "https://media2.giphy.com/headers/studiosoriginals/qlAO7tupLPrq.png",
					  "banner_url": "https://media2.giphy.com/headers/studiosoriginals/qlAO7tupLPrq.png",
					  "profile_url": "https://giphy.com/studiosoriginals/",
					  "username": "studiosoriginals",
					  "display_name": "GIPHY Studios Originals",
					  "description": "",
					  "instagram_url": "",
					  "website_url": "https://giphy.com/studios",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPVRLWE1WUnQ1dXZWOE9ZRXJhbyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRLWE1WUnQ1dXZWOE9ZRXJhbyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRLWE1WUnQ1dXZWOE9ZRXJhbyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRLWE1WUnQ1dXZWOE9ZRXJhbyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "33FesMo3i4fht81Qs0",
					"url": "https://giphy.com/gifs/buongiorno-bom-dia-pao-33FesMo3i4fht81Qs0",
					"slug": "buongiorno-bom-dia-pao-33FesMo3i4fht81Qs0",
					"bitly_gif_url": "https://gph.is/2McbEJd",
					"bitly_url": "https://gph.is/2McbEJd",
					"embed_url": "https://giphy.com/embed/33FesMo3i4fht81Qs0",
					"username": "buongiorno",
					"source": "www.padariabuongiorno.com.br",
					"title": "bom dia pao GIF by Padaria Buongiorno",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "www.padariabuongiorno.com.br",
					"is_sticker": 0,
					"import_datetime": "2018-08-10 20:38:04",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "4810846",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "700029",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "1462080",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "165",
						"hash": "dc4117221184834edf4a419f87a5f5e6"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "1353641",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-downsized.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "4810846",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "3629385",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-downsized-medium.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-medium.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "208",
						"width": "208",
						"mp4_size": "55971",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "80627",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-downsized_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "736072",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "78203",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "435058",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "64159",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "41182",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "256427",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "28667",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "184786",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "6829",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "18648",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "736072",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "78203",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "435058",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "64159",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "41182",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "256427",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "28667",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "184786",
						"webp": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "6829",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "18648",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2599537",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "155971",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "700029",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "278",
						"width": "278",
						"mp4_size": "31140",
						"mp4": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "174",
						"width": "174",
						"size": "48356",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "200",
						"width": "200",
						"size": "40388",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "4810846",
						"url": "https://media3.giphy.com/media/33FesMo3i4fht81Qs0/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media4.giphy.com/avatars/buongiorno/nP67yAJ6Xg8O.png",
					  "banner_image": "https://media4.giphy.com/headers/buongiorno/cUzMTTdCW5eN.png",
					  "banner_url": "https://media4.giphy.com/headers/buongiorno/cUzMTTdCW5eN.png",
					  "profile_url": "https://giphy.com/buongiorno/",
					  "username": "buongiorno",
					  "display_name": "Padaria Buongiorno",
					  "description": "Empresa no seguimento de Padaria em Marília, São Paulo",
					  "instagram_url": "https://instagram.com/@padariabuongiorno",
					  "website_url": "http://padariabuongiorno.com.br/",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPTMzRmVzTW8zaTRmaHQ4MVFzMCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzRmVzTW8zaTRmaHQ4MVFzMCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzRmVzTW8zaTRmaHQ4MVFzMCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTMzRmVzTW8zaTRmaHQ4MVFzMCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "da6OHWBMf6pke9AB3L",
					"url": "https://giphy.com/gifs/mariee-weddings-transparent-sticker-thaisa-dalmut-da6OHWBMf6pke9AB3L",
					"slug": "mariee-weddings-transparent-sticker-thaisa-dalmut-da6OHWBMf6pke9AB3L",
					"bitly_gif_url": "https://gph.is/g/E1qOR11",
					"bitly_url": "https://gph.is/g/E1qOR11",
					"embed_url": "https://giphy.com/embed/da6OHWBMf6pke9AB3L",
					"username": "mariee_weddings",
					"source": "www.mariee.com.br",
					"title": "Good Morning Sticker GIF by Mariée Weddings",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "www.mariee.com.br",
					"is_sticker": 0,
					"import_datetime": "2019-12-17 00:16:24",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "37467",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "37842",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "9",
						"hash": "a52d0b4ce07a86b32fd6eb71e0a33e98"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "480",
						"width": "480",
						"mp4_size": "37467",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "17876",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "14088",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "19172",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "12023",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "14360",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "8183",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "6072",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "8556",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2963",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "5792",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "17876",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "14088",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "19172",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "12023",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "14360",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "8183",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "6072",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "8556",
						"webp": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2963",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "5792",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "695899",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "15082",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "37467",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "480",
						"width": "480",
						"mp4_size": "37467",
						"mp4": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "480",
						"width": "480",
						"size": "44604",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "44302",
						"url": "https://media3.giphy.com/media/da6OHWBMf6pke9AB3L/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media4.giphy.com/avatars/mariee_weddings/QA7VMc9QJaKb.jpg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/mariee_weddings/",
					  "username": "mariee_weddings",
					  "display_name": "Mariée Weddings",
					  "description": "Um blog que começa com o casamento e vai muito além. Inspire-se!",
					  "instagram_url": "https://instagram.com/mariee_weddings",
					  "website_url": "http://www.mariee.com.br",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPWRhNk9IV0JNZjZwa2U5QUIzTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRhNk9IV0JNZjZwa2U5QUIzTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRhNk9IV0JNZjZwa2U5QUIzTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRhNk9IV0JNZjZwa2U5QUIzTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "i0TPPAx6T1EB1XTZEG",
					"url": "https://giphy.com/gifs/languages-i0TPPAx6T1EB1XTZEG",
					"slug": "languages-i0TPPAx6T1EB1XTZEG",
					"bitly_gif_url": "https://gph.is/g/Zn8p7rP",
					"bitly_url": "https://gph.is/g/Zn8p7rP",
					"embed_url": "https://giphy.com/embed/i0TPPAx6T1EB1XTZEG",
					"username": "languages",
					"source": "",
					"title": "Bom Dia Portuguese GIF by languages",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2021-06-23 23:57:09",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "127681",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "166920",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "32",
						"hash": "7b8699fda0ad2c6aa0192553b4610c55"
					  },
					  "downsized": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "270",
						"width": "480",
						"mp4_size": "127681",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "356",
						"size": "157412",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "95538",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "133852",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "356",
						"size": "34579",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "23752",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "178",
						"size": "54759",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "43982",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "64790",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "178",
						"size": "273",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "356",
						"size": "523",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "113",
						"width": "200",
						"size": "67332",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "52262",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "74704",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "113",
						"width": "200",
						"size": "15094",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "13010",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "57",
						"width": "100",
						"size": "26270",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "23891",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "30876",
						"webp": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "57",
						"width": "100",
						"size": "202",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "113",
						"width": "200",
						"size": "377",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "841011",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "270",
						"width": "480",
						"size": "684",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "270",
						"width": "480",
						"mp4_size": "127681",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "216",
						"width": "384",
						"mp4_size": "37947",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "98",
						"width": "174",
						"size": "48877",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "258",
						"width": "458",
						"size": "49408",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1920",
						"mp4_size": "606312",
						"mp4": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "270",
						"width": "480",
						"size": "297968",
						"url": "https://media0.giphy.com/media/i0TPPAx6T1EB1XTZEG/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media2.giphy.com/avatars/languages/vV7Xw394ELWG.gif",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/languages/",
					  "username": "languages",
					  "display_name": "",
					  "description": "",
					  "instagram_url": "",
					  "website_url": "",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPWkwVFBQQXg2VDFFQjFYVFpFRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWkwVFBQQXg2VDFFQjFYVFpFRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWkwVFBQQXg2VDFFQjFYVFpFRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWkwVFBQQXg2VDFFQjFYVFpFRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "AEGmLh3oLcUecOpWO7",
					"url": "https://giphy.com/gifs/salonline-blogueira-janataffarel-jana-taffarel-AEGmLh3oLcUecOpWO7",
					"slug": "salonline-blogueira-janataffarel-jana-taffarel-AEGmLh3oLcUecOpWO7",
					"bitly_gif_url": "https://gph.is/2yAzFRe",
					"bitly_url": "https://gph.is/2yAzFRe",
					"embed_url": "https://giphy.com/embed/AEGmLh3oLcUecOpWO7",
					"username": "salonline",
					"source": "",
					"title": "happy good morning GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2018-10-29 19:41:17",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "210426",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "257456",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "24",
						"hash": "d927cb9df2e59b879dca40a930ef2eb3"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "324",
						"width": "432",
						"mp4_size": "95439",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "301842",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "90147",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "150476",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "92470",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "60730",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "104068",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "38238",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "73364",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "7695",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "18702",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "200721",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "64107",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "109400",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "62132",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "44624",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "67526",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "27008",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "54470",
						"webp": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4970",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "13290",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1847071",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "58651",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "210426",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "174",
						"width": "232",
						"mp4_size": "35901",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "114",
						"width": "152",
						"size": "49771",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "152",
						"width": "202",
						"size": "49374",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "720",
						"width": "960",
						"mp4_size": "556306",
						"mp4": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "996082",
						"url": "https://media4.giphy.com/media/AEGmLh3oLcUecOpWO7/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media0.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media0.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media0.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPUFFR21MaDNvTGNVZWNPcFdPNyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFR21MaDNvTGNVZWNPcFdPNyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFR21MaDNvTGNVZWNPcFdPNyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFR21MaDNvTGNVZWNPcFdPNyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "PuQFOiDqip5Wir6ILf",
					"url": "https://giphy.com/gifs/salonline-salon-line-raylenali-raylenalinhares-PuQFOiDqip5Wir6ILf",
					"slug": "salonline-salon-line-raylenali-raylenalinhares-PuQFOiDqip5Wir6ILf",
					"bitly_gif_url": "https://gph.is/g/aQnVBKB",
					"bitly_url": "https://gph.is/g/aQnVBKB",
					"embed_url": "https://giphy.com/embed/PuQFOiDqip5Wir6ILf",
					"username": "salonline",
					"source": "",
					"title": "Good Morning Sleeping GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2021-05-03 20:22:02",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "190206",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "268050",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "16",
						"hash": "729a6903986a1c8c75ddce90e0d1f3b0"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "360",
						"width": "480",
						"mp4_size": "190206",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "243011",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "78356",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "134008",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "109573",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "74138",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "78564",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "29423",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "56684",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "7249",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "19077",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "154691",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "52332",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "97548",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "67030",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "50780",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "50176",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "18840",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "38250",
						"webp": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4781",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "12765",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2474859",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "61660",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "190206",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "184",
						"width": "245",
						"mp4_size": "36254",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "76",
						"width": "101",
						"size": "48330",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "128",
						"width": "170",
						"size": "48776",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1440",
						"mp4_size": "1031485",
						"mp4": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "821572",
						"url": "https://media1.giphy.com/media/PuQFOiDqip5Wir6ILf/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media4.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media4.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media4.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPVB1UUZPaURxaXA1V2lyNklMZiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVB1UUZPaURxaXA1V2lyNklMZiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVB1UUZPaURxaXA1V2lyNklMZiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVB1UUZPaURxaXA1V2lyNklMZiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "5UH2PJ8VIEuMqN8V6R",
					"url": "https://giphy.com/gifs/5UH2PJ8VIEuMqN8V6R",
					"slug": "5UH2PJ8VIEuMqN8V6R",
					"bitly_gif_url": "https://gph.is/2ypoBJ9",
					"bitly_url": "https://gph.is/2ypoBJ9",
					"embed_url": "https://giphy.com/embed/5UH2PJ8VIEuMqN8V6R",
					"username": "boomerangtoons",
					"source": "",
					"title": "Good Morning Dancing GIF by Boomerang Official",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2018-06-19 17:14:23",
					"trending_datetime": "2019-06-06 12:45:03",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "3664574",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "1451494",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "2127672",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "83",
						"hash": "b288fd8fc64381a0aae61b91598fc69d"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "1891730",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-downsized.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "3664574",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "3664574",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "144",
						"width": "192",
						"mp4_size": "83588",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "60727",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-downsized_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "1468442",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "276232",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "1066386",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "161471",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "90112",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "501540",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "83295",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "359546",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "8526",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "23298",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "916930",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "167077",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "687268",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "109289",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "57036",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "288216",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "49413",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "223666",
						"webp": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "5224",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "14694",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2875385",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "80169",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "1451494",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "176",
						"width": "234",
						"mp4_size": "30620",
						"mp4": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "92",
						"width": "123",
						"size": "45933",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "102",
						"width": "136",
						"size": "40608",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "3664574",
						"url": "https://media4.giphy.com/media/5UH2PJ8VIEuMqN8V6R/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/boomerangtoons/ZP91dqljlrb2.jpg",
					  "banner_image": "https://media1.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
					  "banner_url": "https://media1.giphy.com/headers/boomerangtoons/XiGRmmjgFW79.gif",
					  "profile_url": "https://giphy.com/boomerangtoons/",
					  "username": "boomerangtoons",
					  "display_name": "Boomerang Official",
					  "description": "Stream timeless cartoons, characters, and laughs on-demand and on-the-go! Download the app and start your free trial!",
					  "instagram_url": "https://instagram.com/boomerangtoons/",
					  "website_url": "http://boomtn.co/GIPHY",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTVVSDJQSjhWSUV1TXFOOFY2UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVVSDJQSjhWSUV1TXFOOFY2UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVVSDJQSjhWSUV1TXFOOFY2UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTVVSDJQSjhWSUV1TXFOOFY2UiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "lcTWlYzMRXyqxC4hoJ",
					"url": "https://giphy.com/gifs/grupposandonato-good-morning-buongiorno-gruppo-san-donato-lcTWlYzMRXyqxC4hoJ",
					"slug": "grupposandonato-good-morning-buongiorno-gruppo-san-donato-lcTWlYzMRXyqxC4hoJ",
					"bitly_gif_url": "https://gph.is/g/Z7OeoPB",
					"bitly_url": "https://gph.is/g/Z7OeoPB",
					"embed_url": "https://giphy.com/embed/lcTWlYzMRXyqxC4hoJ",
					"username": "grupposandonato",
					"source": "",
					"title": "Good Morning Hello GIF by Gruppo San Donato",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2022-02-14 15:29:06",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "57907",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "52756",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "4",
						"hash": "5ea96b6c6b1300ff8c794d59618940ec"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "480",
						"width": "480",
						"mp4_size": "59883",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "24322",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "19474",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "18868",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "24322",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "22384",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "10441",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "9034",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "7464",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "4061",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "10149",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "24322",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "19474",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "18868",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "24322",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "22384",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "10441",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "9034",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "7464",
						"webp": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "4061",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "10149",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "229294",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "36062",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "57907",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "480",
						"width": "480",
						"mp4_size": "29936",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "208",
						"width": "208",
						"size": "48544",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "480",
						"width": "480",
						"size": "14046",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1080",
						"width": "1080",
						"mp4_size": "145432",
						"mp4": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "70656",
						"url": "https://media2.giphy.com/media/lcTWlYzMRXyqxC4hoJ/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/grupposandonato/aN9Moyqub1dW.jpg",
					  "banner_image": "https://media1.giphy.com/headers/grupposandonato/cC93xLrLc9Bk.gif",
					  "banner_url": "https://media1.giphy.com/headers/grupposandonato/cC93xLrLc9Bk.gif",
					  "profile_url": "https://giphy.com/grupposandonato/",
					  "username": "grupposandonato",
					  "display_name": "Gruppo San Donato",
					  "description": "Leading Italian Healthcare company, since 1957. Discover our social media, website and more!",
					  "instagram_url": "https://instagram.com/grupposandonato",
					  "website_url": "https://linktr.ee/GruppoSanDonato",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPWxjVFdsWXpNUlh5cXhDNGhvSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxjVFdsWXpNUlh5cXhDNGhvSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxjVFdsWXpNUlh5cXhDNGhvSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxjVFdsWXpNUlh5cXhDNGhvSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "izyIpezgM6kIaBuq0H",
					"url": "https://giphy.com/gifs/salonline-beauty-salon-line-todecacho-izyIpezgM6kIaBuq0H",
					"slug": "salonline-beauty-salon-line-todecacho-izyIpezgM6kIaBuq0H",
					"bitly_gif_url": "https://gph.is/g/Z5BjMlo",
					"bitly_url": "https://gph.is/g/Z5BjMlo",
					"embed_url": "https://giphy.com/embed/izyIpezgM6kIaBuq0H",
					"username": "salonline",
					"source": "",
					"title": "Bom Dia Reaction GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2020-05-13 15:21:40",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "142104",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "206766",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "15",
						"hash": "f560f43c5097157cb3db86c0fa913ffc"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "360",
						"width": "480",
						"mp4_size": "142104",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "178363",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "53497",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "98380",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "84540",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "58672",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "59974",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "18878",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "38614",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "6084",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "16564",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "117256",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "34563",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "67114",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "54532",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "38922",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "37607",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "12137",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "25448",
						"webp": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4238",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "15098",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1945160",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "53789",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "142104",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "212",
						"width": "282",
						"mp4_size": "28949",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "86",
						"width": "115",
						"size": "48684",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "156",
						"width": "208",
						"size": "49714",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "720",
						"width": "960",
						"mp4_size": "446391",
						"mp4": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "601290",
						"url": "https://media0.giphy.com/media/izyIpezgM6kIaBuq0H/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media4.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media4.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media4.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPWl6eUlwZXpnTTZrSWFCdXEwSCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWl6eUlwZXpnTTZrSWFCdXEwSCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWl6eUlwZXpnTTZrSWFCdXEwSCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWl6eUlwZXpnTTZrSWFCdXEwSCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "6E5UgTuvUR0b3OLgWV",
					"url": "https://giphy.com/gifs/good-morning-coffee-tea-6E5UgTuvUR0b3OLgWV",
					"slug": "good-morning-coffee-tea-6E5UgTuvUR0b3OLgWV",
					"bitly_gif_url": "https://gph.is/g/4DWV58j",
					"bitly_url": "https://gph.is/g/4DWV58j",
					"embed_url": "https://giphy.com/embed/6E5UgTuvUR0b3OLgWV",
					"username": "michellekirsch",
					"source": "http://michellekirschcreative.com",
					"title": "Good Morning GIF",
					"rating": "g",
					"content_url": "",
					"source_tld": "michellekirschcreative.com",
					"source_post_url": "http://michellekirschcreative.com",
					"is_sticker": 0,
					"import_datetime": "2021-02-27 18:33:19",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "26628",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "38844",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "12",
						"hash": "4844d007f0c9ba8d6ac3b47fbe142cae"
					  },
					  "downsized": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "480",
						"width": "480",
						"mp4_size": "26387",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "16769",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "10416",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "17504",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "11472",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "11598",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "9267",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "5737",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "9718",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2637",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "4760",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "16769",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "10416",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "17504",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "11472",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "11598",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "9267",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "5737",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "9718",
						"webp": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2637",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "4760",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "224318",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "480",
						"width": "480",
						"size": "19271",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "26628",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "480",
						"width": "480",
						"mp4_size": "26387",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "480",
						"width": "480",
						"size": "36597",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "480",
						"width": "480",
						"size": "38844",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "1920",
						"width": "1920",
						"mp4_size": "112062",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "45646",
						"url": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  },
					  "4k": {
						"height": "2400",
						"width": "2400",
						"mp4_size": "144698",
						"mp4": "https://media0.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy-4k.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-4k.mp4&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media0.giphy.com/avatars/michellekirsch/OOM7DrBedq8c.jpeg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/channel/michellekirsch/",
					  "username": "michellekirsch",
					  "display_name": "Michelle Kirsch",
					  "description": "Cute illustrations just for fun. :)",
					  "instagram_url": "https://instagram.com/Michellekirschcreative",
					  "website_url": "http://michellekirschcreative.com",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPTZFNVVnVHV2VVIwYjNPTGdXViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZFNVVnVHV2VVIwYjNPTGdXViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZFNVVnVHV2VVIwYjNPTGdXViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZFNVVnVHV2VVIwYjNPTGdXViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "xM8CKTlDAN5Xa",
					"url": "https://giphy.com/gifs/sun-xM8CKTlDAN5Xa",
					"slug": "sun-xM8CKTlDAN5Xa",
					"bitly_gif_url": "http://gph.is/2bW3Fh7",
					"bitly_url": "http://gph.is/2bW3Fh7",
					"embed_url": "https://giphy.com/embed/xM8CKTlDAN5Xa",
					"username": "good-morning",
					"source": "http://sherv.net/good.afternoon-emoticon-3025.html",
					"title": "Sun Whatsapp Status GIF by good-morning",
					"rating": "g",
					"content_url": "",
					"source_tld": "sherv.net",
					"source_post_url": "http://sherv.net/good.afternoon-emoticon-3025.html",
					"is_sticker": 0,
					"import_datetime": "2016-09-08 10:25:31",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "135",
						"width": "135",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "386831",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "114914",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "34",
						"hash": "11c5a762b51147feed41b09255587778"
					  },
					  "downsized": {
						"height": "135",
						"width": "135",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "135",
						"width": "135",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "135",
						"width": "135",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "134",
						"width": "134",
						"mp4_size": "69670",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "135",
						"width": "135",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "331785",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "106380",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "174088",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "58605",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "34688",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "113731",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "47074",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "82132",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "3750",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "9392",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "331785",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "106380",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "174088",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "58605",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "34688",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "113731",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "47074",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "82132",
						"webp": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "3750",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "9392",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2055341",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "135",
						"width": "135",
						"size": "8127",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "386831",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "134",
						"width": "134",
						"mp4_size": "69670",
						"mp4": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "135",
						"width": "135",
						"size": "35152",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "135",
						"width": "135",
						"size": "35574",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "187089",
						"url": "https://media1.giphy.com/media/xM8CKTlDAN5Xa/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/good-morning/mBgOAyM6ww8i.gif",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/good-morning/",
					  "username": "good-morning",
					  "display_name": "",
					  "description": "Wake up! The coffee is on and breakfast is being cooked! All the best GIFs to wish your friends and family \"Good Morning.\"",
					  "instagram_url": "",
					  "website_url": "",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPXhNOENLVGxEQU41WGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jMzY2NzFiYjRwYXFqYnNpa2djanhsbmZmMjYyN2h2cjZxMG01aHQ3bWR4MG1tZnEmY3Q9Zw",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhNOENLVGxEQU41WGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jMzY2NzFiYjRwYXFqYnNpa2djanhsbmZmMjYyN2h2cjZxMG01aHQ3bWR4MG1tZnEmY3Q9Zw&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhNOENLVGxEQU41WGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jMzY2NzFiYjRwYXFqYnNpa2djanhsbmZmMjYyN2h2cjZxMG01aHQ3bWR4MG1tZnEmY3Q9Zw&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhNOENLVGxEQU41WGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jMzY2NzFiYjRwYXFqYnNpa2djanhsbmZmMjYyN2h2cjZxMG01aHQ3bWR4MG1tZnEmY3Q9Zw&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "26xBPPcBnFA6kVXsk",
					"url": "https://giphy.com/gifs/jerseydemic-26xBPPcBnFA6kVXsk",
					"slug": "jerseydemic-26xBPPcBnFA6kVXsk",
					"bitly_gif_url": "http://gph.is/2lg1gPZ",
					"bitly_url": "http://gph.is/2lg1gPZ",
					"embed_url": "https://giphy.com/embed/26xBPPcBnFA6kVXsk",
					"username": "jerseydemic",
					"source": "",
					"title": "Good Morning Ugh GIF by Demic",
					"rating": "pg",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2017-02-18 00:17:06",
					"trending_datetime": "2022-03-15 12:44:46",
					"images": {
					  "original": {
						"height": "195",
						"width": "346",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "879678",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "767682",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "48",
						"hash": "35303058803a7f3be9f42a96bf748559"
					  },
					  "downsized": {
						"height": "195",
						"width": "346",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "195",
						"width": "346",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "195",
						"width": "346",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "114",
						"width": "203",
						"mp4_size": "54255",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "195",
						"width": "346",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "355",
						"size": "1326548",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "372979",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "859606",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "355",
						"size": "175074",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "115096",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "178",
						"size": "374485",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "77266",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "239380",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "178",
						"size": "6531",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "355",
						"size": "21081",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "113",
						"width": "200",
						"size": "480235",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "91674",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "296376",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "113",
						"width": "200",
						"size": "63010",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "39588",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "57",
						"width": "100",
						"size": "135457",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "27574",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "86472",
						"webp": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "57",
						"width": "100",
						"size": "3063",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "113",
						"width": "200",
						"size": "8892",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2711707",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "195",
						"width": "346",
						"size": "21353",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "270",
						"width": "480",
						"mp4_size": "879678",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "112",
						"width": "199",
						"mp4_size": "35931",
						"mp4": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "88",
						"width": "156",
						"size": "49817",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "106",
						"width": "188",
						"size": "28234",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "271",
						"width": "480",
						"size": "1461045",
						"url": "https://media4.giphy.com/media/26xBPPcBnFA6kVXsk/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media4.giphy.com/avatars/jerseydemic/tdJP9Q4QOY4x.jpg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/jerseydemic/",
					  "username": "jerseydemic",
					  "display_name": "Demic",
					  "description": "",
					  "instagram_url": "https://instagram.com/kingdemic",
					  "website_url": "https://twitter.com/kingdemic",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTI2eEJQUGNCbkZBNmtWWHNrJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YzM2NjcxYmI0cGFxamJzaWtnY2p4bG5mZjI2MjdodnI2cTBtNWh0N21keDBtbWZxJmN0PWc",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI2eEJQUGNCbkZBNmtWWHNrJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YzM2NjcxYmI0cGFxamJzaWtnY2p4bG5mZjI2MjdodnI2cTBtNWh0N21keDBtbWZxJmN0PWc&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI2eEJQUGNCbkZBNmtWWHNrJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YzM2NjcxYmI0cGFxamJzaWtnY2p4bG5mZjI2MjdodnI2cTBtNWh0N21keDBtbWZxJmN0PWc&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTI2eEJQUGNCbkZBNmtWWHNrJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YzM2NjcxYmI0cGFxamJzaWtnY2p4bG5mZjI2MjdodnI2cTBtNWh0N21keDBtbWZxJmN0PWc&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "v3NX04siH8cvzFHCna",
					"url": "https://giphy.com/gifs/salonline-hair-cabelo-salon-line-v3NX04siH8cvzFHCna",
					"slug": "salonline-hair-cabelo-salon-line-v3NX04siH8cvzFHCna",
					"bitly_gif_url": "https://gph.is/g/4oMPPg5",
					"bitly_url": "https://gph.is/g/4oMPPg5",
					"embed_url": "https://giphy.com/embed/v3NX04siH8cvzFHCna",
					"username": "salonline",
					"source": "",
					"title": "Happy Bom Dia GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2020-09-25 19:53:36",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "155713",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "215798",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "16",
						"hash": "f36759fd19a98ea0f4c0b02a6f10f35e"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "360",
						"width": "480",
						"mp4_size": "155713",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "230016",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "66360",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "115732",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "96525",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "67028",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "78969",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "28907",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "55094",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "5922",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "15140",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "152237",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "46780",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "85644",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "62476",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "46690",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "51090",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "20280",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "39280",
						"webp": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4220",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "12817",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "2018737",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "47400",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "155713",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "202",
						"width": "269",
						"mp4_size": "34293",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "77",
						"width": "103",
						"size": "49589",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "138",
						"width": "184",
						"size": "49822",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "hd": {
						"height": "720",
						"width": "960",
						"mp4_size": "538157",
						"mp4": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/giphy-hd.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-hd.mp4&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "732703",
						"url": "https://media2.giphy.com/media/v3NX04siH8cvzFHCna/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media1.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media1.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPXYzTlgwNHNpSDhjdnpGSENuYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXYzTlgwNHNpSDhjdnpGSENuYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXYzTlgwNHNpSDhjdnpGSENuYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXYzTlgwNHNpSDhjdnpGSENuYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "j2jRtX6c6sY78hL5VP",
					"url": "https://giphy.com/gifs/salonline-cabelo-salon-line-todecacho-j2jRtX6c6sY78hL5VP",
					"slug": "salonline-cabelo-salon-line-todecacho-j2jRtX6c6sY78hL5VP",
					"bitly_gif_url": "https://gph.is/g/4oNPGgJ",
					"bitly_url": "https://gph.is/g/4oNPGgJ",
					"embed_url": "https://giphy.com/embed/j2jRtX6c6sY78hL5VP",
					"username": "salonline",
					"source": "",
					"title": "Good Morning Hello GIF by Salon Line",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2020-07-20 19:30:58",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "119617",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "160370",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "15",
						"hash": "c663a14ee469efef3a9d4053326d864b"
					  },
					  "downsized": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "360",
						"width": "480",
						"mp4_size": "119617",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "188731",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "53910",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "87522",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "87897",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "48592",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "64727",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "22201",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "40506",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "6075",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "16062",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "136163",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "36689",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "63156",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "61219",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "33250",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "41965",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "15425",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "28920",
						"webp": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "4257",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "14152",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1696910",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "51182",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "119617",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "232",
						"width": "309",
						"mp4_size": "34709",
						"mp4": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "83",
						"width": "111",
						"size": "48707",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "164",
						"width": "218",
						"size": "47650",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "622508",
						"url": "https://media2.giphy.com/media/j2jRtX6c6sY78hL5VP/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media3.giphy.com/avatars/salonline/A0mPnGxAxFNG.png",
					  "banner_image": "https://media3.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "banner_url": "https://media3.giphy.com/headers/salonline/V6wI0nsdO3XO.jpg",
					  "profile_url": "https://giphy.com/salonline/",
					  "username": "salonline",
					  "display_name": "Salon Line",
					  "description": "A Salon Line valoriza todas as belezas, por isso sabemos que cada pessoa é única e cada textura de cabelo ou tipo de pele precisa de um cuidado especial.",
					  "instagram_url": "https://instagram.com/salonlinebrasil",
					  "website_url": "https://www.salonline.com.br",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPWoyalJ0WDZjNnNZNzhoTDVWUCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWoyalJ0WDZjNnNZNzhoTDVWUCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWoyalJ0WDZjNnNZNzhoTDVWUCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWoyalJ0WDZjNnNZNzhoTDVWUCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "SACl9SDjPSyw1x5l25",
					"url": "https://giphy.com/gifs/vigovideo-sexy-good-morning-bom-dia-SACl9SDjPSyw1x5l25",
					"slug": "vigovideo-sexy-good-morning-bom-dia-SACl9SDjPSyw1x5l25",
					"bitly_gif_url": "https://gph.is/g/aXprzJe",
					"bitly_url": "https://gph.is/g/aXprzJe",
					"embed_url": "https://giphy.com/embed/SACl9SDjPSyw1x5l25",
					"username": "vigovideo",
					"source": "http://www.vigovideo.net/",
					"title": "Sexy Good Morning GIF by Vigo Video",
					"rating": "g",
					"content_url": "",
					"source_tld": "www.vigovideo.net",
					"source_post_url": "http://www.vigovideo.net/",
					"is_sticker": 0,
					"import_datetime": "2019-08-02 14:43:59",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "360",
						"width": "480",
						"size": "8125658",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "1197092",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "1647070",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "146",
						"hash": "b28871dee405defb177eb56abe64ef2c"
					  },
					  "downsized": {
						"height": "288",
						"width": "384",
						"size": "1881789",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-downsized.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "360",
						"width": "480",
						"size": "5212662",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-downsized-large.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-large.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "360",
						"width": "480",
						"size": "3302178",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-downsized-medium.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-medium.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "146",
						"width": "194",
						"mp4_size": "128391",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "288",
						"width": "384",
						"size": "35001",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-downsized_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "267",
						"size": "2172524",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "309532",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "600410",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "267",
						"size": "127625",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "84520",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "134",
						"size": "753970",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "129106",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "275430",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "134",
						"size": "8149",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "267",
						"size": "20945",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "150",
						"width": "200",
						"size": "1384141",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "215506",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "430146",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "150",
						"width": "200",
						"size": "83444",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "55608",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "75",
						"width": "100",
						"size": "470201",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "48263",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "193556",
						"webp": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "75",
						"width": "100",
						"size": "5355",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "150",
						"width": "200",
						"size": "17610",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "3705578",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "360",
						"width": "480",
						"size": "90446",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "360",
						"width": "480",
						"mp4_size": "1197092",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "174",
						"width": "232",
						"mp4_size": "38235",
						"mp4": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "60",
						"width": "80",
						"size": "47490",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "92",
						"width": "122",
						"size": "41000",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "360",
						"width": "480",
						"size": "8125658",
						"url": "https://media0.giphy.com/media/SACl9SDjPSyw1x5l25/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media0.giphy.com/avatars/vigovideo/I18JkJYjrBEB.gif",
					  "banner_image": "https://media0.giphy.com/headers/vigovideo/PlaCaSRTCOsW.png",
					  "banner_url": "https://media0.giphy.com/headers/vigovideo/PlaCaSRTCOsW.png",
					  "profile_url": "https://giphy.com/vigovideo/",
					  "username": "vigovideo",
					  "display_name": "Vigo Video",
					  "description": "Vigo is a community of short, original 15-second videos for all people, allowing users to record and share their unique talents, stories, moments, and discover incredible people with common interests.\r\n----\r\nO Vigo é uma comunidade de vídeos curtos e originais de 15 segundos para todas as pessoas, permitindo aos usuários gravar e compartilhar seus talentos, histórias, momentos únicos e a descobrirem pessoas incríveis com interesses em comum.",
					  "instagram_url": "https://instagram.com/vigovideo.brasil",
					  "website_url": "http://www.vigovideo.net/",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPVNBQ2w5U0RqUFN5dzF4NWwyNSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNBQ2w5U0RqUFN5dzF4NWwyNSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNBQ2w5U0RqUFN5dzF4NWwyNSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNBQ2w5U0RqUFN5dzF4NWwyNSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "xUPGcigl4eOfc6hA5y",
					"url": "https://giphy.com/gifs/hello-hi-welcome-xUPGcigl4eOfc6hA5y",
					"slug": "hello-hi-welcome-xUPGcigl4eOfc6hA5y",
					"bitly_gif_url": "http://gph.is/2rkbQe1",
					"bitly_url": "http://gph.is/2rkbQe1",
					"embed_url": "https://giphy.com/embed/xUPGcigl4eOfc6hA5y",
					"username": "kevinacarter",
					"source": "www.kevinacarter.com",
					"title": "Bom Dia Hello GIF by Kevin Carter",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "www.kevinacarter.com",
					"is_sticker": 0,
					"import_datetime": "2017-05-19 00:47:06",
					"trending_datetime": "2017-05-22 23:45:01",
					"images": {
					  "original": {
						"height": "500",
						"width": "500",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "35641",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "27280",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "16",
						"hash": "4492cb97159bda344c49c75a2e0eb7cb"
					  },
					  "downsized": {
						"height": "500",
						"width": "500",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "500",
						"width": "500",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "500",
						"width": "500",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "500",
						"width": "500",
						"mp4_size": "41862",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "500",
						"width": "500",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "200",
						"size": "11033",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "9834",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "11432",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "200",
						"size": "8358",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "7830",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "100",
						"size": "5262",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "5014",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "5772",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "100",
						"size": "2849",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "200",
						"size": "6268",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "200",
						"width": "200",
						"size": "11033",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "9834",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "11432",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "200",
						"width": "200",
						"size": "8358",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "7830",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "100",
						"width": "100",
						"size": "5262",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "5014",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "5772",
						"webp": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "100",
						"width": "100",
						"size": "2849",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "200",
						"width": "200",
						"size": "6268",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "299029",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "500",
						"width": "500",
						"size": "59977",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "480",
						"width": "480",
						"mp4_size": "35641",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "500",
						"width": "500",
						"mp4_size": "41862",
						"mp4": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "500",
						"width": "500",
						"size": "33323",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "500",
						"width": "500",
						"size": "26708",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "480",
						"width": "480",
						"size": "60622",
						"url": "https://media3.giphy.com/media/xUPGcigl4eOfc6hA5y/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media1.giphy.com/avatars/kevinacarter/1KOrxfLwDKu0.jpg",
					  "banner_image": "https://media1.giphy.com/headers/kevinacarter/iauXl7axgCQ7.gif",
					  "banner_url": "https://media1.giphy.com/headers/kevinacarter/iauXl7axgCQ7.gif",
					  "profile_url": "https://giphy.com/kevinacarter/",
					  "username": "kevinacarter",
					  "display_name": "Kevin Carter",
					  "description": "Designer from LA who likes to make gifs",
					  "instagram_url": "https://instagram.com/kevin.a.carter",
					  "website_url": "http://www.kevinacarter.com",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPXhVUEdjaWdsNGVPZmM2aEE1eSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhVUEdjaWdsNGVPZmM2aEE1eSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhVUEdjaWdsNGVPZmM2aEE1eSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXhVUEdjaWdsNGVPZmM2aEE1eSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "3oKIPsx2VAYAgEHC12",
					"url": "https://giphy.com/gifs/DNCE-3oKIPsx2VAYAgEHC12",
					"slug": "DNCE-3oKIPsx2VAYAgEHC12",
					"bitly_gif_url": "http://gph.is/2np39Kn",
					"bitly_url": "http://gph.is/2np39Kn",
					"embed_url": "https://giphy.com/embed/3oKIPsx2VAYAgEHC12",
					"username": "DNCE",
					"source": "https://www.youtube.com/watch?v=J7it_g_gAY4",
					"title": "Nicki Minaj Hello GIF by DNCE",
					"rating": "g",
					"content_url": "",
					"source_tld": "www.youtube.com",
					"source_post_url": "https://www.youtube.com/watch?v=J7it_g_gAY4",
					"is_sticker": 0,
					"import_datetime": "2017-03-31 01:45:50",
					"trending_datetime": "1970-01-01 00:00:00",
					"images": {
					  "original": {
						"height": "270",
						"width": "480",
						"size": "4392537",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "337440",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "700744",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "68",
						"hash": "b586153006082301c698602a4be8a9d4"
					  },
					  "downsized": {
						"height": "216",
						"width": "384",
						"size": "1546110",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-downsized.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "270",
						"width": "480",
						"size": "4392537",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "270",
						"width": "480",
						"size": "2766064",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-downsized-medium.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-medium.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "164",
						"width": "291",
						"mp4_size": "83905",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "216",
						"width": "384",
						"size": "26919",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-downsized_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "356",
						"size": "1770687",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "212955",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "502862",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "356",
						"size": "171214",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "97848",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "178",
						"size": "635589",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "82072",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "167170",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "178",
						"size": "10700",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "356",
						"size": "26882",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "113",
						"width": "200",
						"size": "833951",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "88409",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "199820",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "113",
						"width": "200",
						"size": "73200",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "37338",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "57",
						"width": "100",
						"size": "236560",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "40153",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "70838",
						"webp": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "57",
						"width": "100",
						"size": "4314",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "113",
						"width": "200",
						"size": "13798",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "3555585",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "270",
						"width": "480",
						"size": "79321",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "270",
						"width": "480",
						"mp4_size": "337440",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "160",
						"width": "284",
						"mp4_size": "39961",
						"mp4": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "76",
						"width": "135",
						"size": "48157",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "102",
						"width": "182",
						"size": "42128",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "270",
						"width": "480",
						"size": "4392537",
						"url": "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media0.giphy.com/avatars/dnce/rfT2vlaZvX6D.jpg",
					  "banner_image": "https://media0.giphy.com/headers/dnce/eQmvB10wqiDp.jpg",
					  "banner_url": "https://media0.giphy.com/headers/dnce/eQmvB10wqiDp.jpg",
					  "profile_url": "https://giphy.com/dnce/",
					  "username": "dnce",
					  "display_name": "DNCE",
					  "description": "PEOPLE TO PEOPLE OUT NOW\r\nhttps://DNCE.lnk.to/PeopleToPeople",
					  "instagram_url": "https://instagram.com/DNCE",
					  "website_url": "http://www.dnce.com",
					  "is_verified": true
					},
					"analytics_response_payload": "e=Z2lmX2lkPTNvS0lQc3gyVkFZQWdFSEMxMiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvS0lQc3gyVkFZQWdFSEMxMiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvS0lQc3gyVkFZQWdFSEMxMiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvS0lQc3gyVkFZQWdFSEMxMiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  },
				  {
					"type": "gif",
					"id": "De8p8wY9ImVPosh6ax",
					"url": "https://giphy.com/gifs/bom-dia-feliz-De8p8wY9ImVPosh6ax",
					"slug": "bom-dia-feliz-De8p8wY9ImVPosh6ax",
					"bitly_gif_url": "https://gph.is/g/a9Rmq6B",
					"bitly_url": "https://gph.is/g/a9Rmq6B",
					"embed_url": "https://giphy.com/embed/De8p8wY9ImVPosh6ax",
					"username": "jairomaker",
					"source": "",
					"title": "",
					"rating": "g",
					"content_url": "",
					"source_tld": "",
					"source_post_url": "",
					"is_sticker": 0,
					"import_datetime": "2021-03-07 19:10:43",
					"trending_datetime": "0000-00-00 00:00:00",
					"images": {
					  "original": {
						"height": "386",
						"width": "478",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g",
						"mp4_size": "104551",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g",
						"webp_size": "98490",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.webp&ct=g",
						"frames": "16",
						"hash": "222c0ed52e340d79eeed85b7747ade33"
					  },
					  "downsized": {
						"height": "386",
						"width": "478",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_large": {
						"height": "386",
						"width": "478",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_medium": {
						"height": "386",
						"width": "478",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.gif&ct=g"
					  },
					  "downsized_small": {
						"height": "386",
						"width": "478",
						"mp4_size": "104551",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy-downsized-small.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-downsized-small.mp4&ct=g"
					  },
					  "downsized_still": {
						"height": "386",
						"width": "478",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "fixed_height": {
						"height": "200",
						"width": "248",
						"size": "41944",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.gif&ct=g",
						"mp4_size": "44972",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.mp4&ct=g",
						"webp_size": "60544",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200.webp&ct=g"
					  },
					  "fixed_height_downsampled": {
						"height": "200",
						"width": "248",
						"size": "27174",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.gif&ct=g",
						"webp_size": "40550",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_d.webp&ct=g"
					  },
					  "fixed_height_small": {
						"height": "100",
						"width": "124",
						"size": "17782",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.gif&ct=g",
						"mp4_size": "17509",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.mp4&ct=g",
						"webp_size": "25538",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100.webp&ct=g"
					  },
					  "fixed_height_small_still": {
						"height": "100",
						"width": "124",
						"size": "3473",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100_s.gif&ct=g"
					  },
					  "fixed_height_still": {
						"height": "200",
						"width": "248",
						"size": "7718",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200_s.gif&ct=g"
					  },
					  "fixed_width": {
						"height": "162",
						"width": "200",
						"size": "34201",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.gif&ct=g",
						"mp4_size": "33571",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.mp4&ct=g",
						"webp_size": "42124",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w.webp&ct=g"
					  },
					  "fixed_width_downsampled": {
						"height": "162",
						"width": "200",
						"size": "23639",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w_d.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.gif&ct=g",
						"webp_size": "33146",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w_d.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_d.webp&ct=g"
					  },
					  "fixed_width_small": {
						"height": "81",
						"width": "100",
						"size": "13669",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100w.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.gif&ct=g",
						"mp4_size": "12756",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100w.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.mp4&ct=g",
						"webp_size": "15920",
						"webp": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100w.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w.webp&ct=g"
					  },
					  "fixed_width_small_still": {
						"height": "81",
						"width": "100",
						"size": "2830",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/100w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=100w_s.gif&ct=g"
					  },
					  "fixed_width_still": {
						"height": "162",
						"width": "200",
						"size": "6161",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/200w_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=200w_s.gif&ct=g"
					  },
					  "looping": {
						"mp4_size": "1227638",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy-loop.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-loop.mp4&ct=g"
					  },
					  "original_still": {
						"height": "386",
						"width": "478",
						"size": "25085",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy_s.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy_s.gif&ct=g"
					  },
					  "original_mp4": {
						"height": "386",
						"width": "478",
						"mp4_size": "104551",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy.mp4&ct=g"
					  },
					  "preview": {
						"height": "266",
						"width": "329",
						"mp4_size": "47163",
						"mp4": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy-preview.mp4?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.mp4&ct=g"
					  },
					  "preview_gif": {
						"height": "133",
						"width": "165",
						"size": "49629",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy-preview.gif?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.gif&ct=g"
					  },
					  "preview_webp": {
						"height": "182",
						"width": "226",
						"size": "49748",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/giphy-preview.webp?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=giphy-preview.webp&ct=g"
					  },
					  "480w_still": {
						"height": "388",
						"width": "480",
						"size": "122067",
						"url": "https://media3.giphy.com/media/De8p8wY9ImVPosh6ax/480w_s.jpg?cid=c36671bb4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq&rid=480w_s.jpg&ct=g"
					  }
					},
					"user": {
					  "avatar_url": "https://media3.giphy.com/avatars/jairomaker/K4nApZDQIpVH.jpeg",
					  "banner_image": "",
					  "banner_url": "",
					  "profile_url": "https://giphy.com/channel/jairomaker/",
					  "username": "jairomaker",
					  "display_name": "Jairo",
					  "description": "",
					  "instagram_url": "https://instagram.com/jairomaker",
					  "website_url": "http://www.behance.net/jairomaker",
					  "is_verified": false
					},
					"analytics_response_payload": "e=Z2lmX2lkPURlOHA4d1k5SW1WUG9zaDZheCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n",
					"analytics": {
					  "onload": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURlOHA4d1k5SW1WUG9zaDZheCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SEEN"
					  },
					  "onclick": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURlOHA4d1k5SW1WUG9zaDZheCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=CLICK"
					  },
					  "onsent": {
						"url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURlOHA4d1k5SW1WUG9zaDZheCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWMzNjY3MWJiNHBhcWpic2lrZ2NqeGxuZmYyNjI3aHZyNnEwbTVodDdtZHgwbW1mcSZjdD1n&action_type=SENT"
					  }
					}
				  }
				],
				"pagination": {
				  "total_count": 5294,
				  "count": 25,
				  "offset": 0
				},
				"meta": {
				  "status": 200,
				  "msg": "OK",
				  "response_id": "4paqjbsikgcjxlnff2627hvr6q0m5ht7mdx0mmfq"
				}
			  }
		}
	},
	modules: {
	}
}
