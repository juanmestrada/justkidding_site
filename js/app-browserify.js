// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")

var Promise = require('es6-promise').Promise

import $ from 'jquery'
import Backbone from 'backbone'
import React, {Component} from 'react'
import _ from 'underscore'



!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


class NavHeader extends React.Component{
	render() {
		return (<div>
			
			<div className="header">
				<div className="header-top">
					<div className="header-logo">
						<img src="http://www.justkiddingfilms.net/wp-content/themes/v2/images/logo_primary.jpg"/>
					</div>
					<div className="header-tag">
						<img src="http://www.justkiddingfilms.net/wp-content/themes/v2/images/tagline.png"/>
					</div>	
				</div>
				<hr/>	
				<div className="header-nav">
					<ul>
						<li><a href="#home">HOME</a></li>
						<li><a href="#about">ABOUT</a></li>
						<li className="channels">CHANNELS
							<ul>
								<li><a href="#justkiddingnews">JustKiddingNews</a></li>
								<li><a href="#justkiddingparty">JustKiddingParty</a></li>
								<li><a href="#justkiddinggamer">JustKiddingGamer</a></li>
								<li><a href="#askthefeels">AskTheFeels</a></li>
							</ul>
						</li>	
						<li><a href="#crew">CREW</a></li>
						<li><a href="#gallery">GALLERY</a></li>
						<li><a href="http://justkiddingfilms.bigcartel.com/">STORE</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</div>
			</div>
	</div>)
	}
}

class LinksView extends React.Component{
	render() {
		return (<div>
			<ul id="links-container">
				<li id="links-facebook"><a href=""><img src="../images/facebook.png" /></a></li>
				<li id="links-twitter"><a href=""><img src="../images/twitter2.png" /></a></li>
				<li id="links-instagram"><a href=""><img src="../images/instagram.png" /></a></li>
				<li id="links-youtube"><a href=""><img src="../images/YouTube.png" /></a></li>
			</ul>
	</div>)
	}
}

class HomeView extends React.Component{
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="home-container">
				<p>JustKiddingFilms is a comedic phenomenon known to unabashedly tackle social, contemporary, and cultural issues, while ingeniously capturing and playing to universal sentiments. They strike a remarkable balance between stimulating and entertaining, garnering them an international fanbase of 125 million views and 706,000+ subscribers on YouTube.</p>
			</div>	
			<div id="home-tweets">
				<a className="twitter-timeline" href="https://twitter.com/JKFilms" data-widget-id="660182203867901952">Tweets by @JKFilms</a>
			</div>
		</div>)
	}
}

class AtfView extends React.Component{
	_startSlider(){
	


	}
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="atf-container" onLoad={ () => this._startSlider() }>
				<div id="atf-banner"></div>
				<div id="atf-info">
					<h3>Welcome to Ask the Feels</h3>
					<p>A place where all your love, relationship, and sex questions are discussed. Ready to share? Click <a href="http://www.askthefeels.com/">Here</a> to submit your question!</p>
					<br />
					<br />
					<p>Follow us to see which special guest gives their opinions to your burning questions.</p>
				</div>
				
				<div id="atf-lower">
					<div id="slider">
						
					<iframe src="http://snapwidget.com/sl/?u=YXNrdGhlZmVlbHN8aW58NTAwfDN8M3x8bm98NXxub25lfG9uU3RhcnR8eWVzfG5v&ve=011115" title="Instagram Widget" className="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no" ></iframe>
					</div>		
				</div>
				
			</div>
			<div className="atf-twitter">
				<a className="twitter-timeline" href="https://twitter.com/AskTheFeels" data-widget-id="660627696360132608">Tweets by @AskTheFeels</a>
			</div>
	</div>)
	}
}

class JknewsView extends React.Component{
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="jknews-container">
				<div id="jknews-banner"></div>
				<div id="jknews-info">
					<h3>Welcome to JustKiddingNews</h3>
					<p>JustKiddingNews. Real News. Realer Opinions.</p>
				</div>
				<div id="jknews-soundcloud">
					<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/134677507&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				</div>
			</div>
			<div id="jknews-twitter">
				<a className="twitter-timeline" href="https://twitter.com/JKFilms" data-widget-id="660182203867901952">Tweets by @JKFilms</a>
			</div>
	</div>)
	}
}

class JkpartyView extends React.Component{
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="jkparty-container">
				<div id="jkparty-banner"></div>
				<div id="jkparty-info">
					<h3>Welcome to JustKiddingParty</h3>
					<p>Watch the crew act crazy</p>
				</div>
				<div id="jkparty-soundcloud">
				</div>
			</div>
			<div id="jkparty-twitter">
				<a className="twitter-timeline" href="https://twitter.com/JKFilms" data-widget-id="660182203867901952">Tweets by @JKFilms</a>
			</div>
	</div>)
	}
}

class JkgamerView extends React.Component{
	_getPic(e, n){
		//e.preventDefault()
		
		if(n==1){
			$('.jkgamer-left').html('Tom Trinh');
			$('.jkgamer-img-left ').attr('src', '../images/tom.png')
			$(".gaming-history ").html('<p>Retired – [UAN] Up All Night. The Non-Clan Clan.<br/>Former MLG FPS PC Gamer:<br />– Medal of Honor: Allied Assault [2002] – Fast Trigger<br />– Call of Duty 2 [2005] – Lucky Shooter, Hot Potato, Rifle<br />– Call of Duty 4: Modern Warfare [2007] – Tactical Assault, Dual Noob-Tube Pro, Stun Spammer, Nade Counter<br />– Tom Clancy’s Rainbow Six series – Stealth Recon, Tactical Decoy, Fast Assault<br />Long live dedicated servers.')
			$('.preferred-platform').html('PC hands down. PS3 for the graphics. Xbox 360 for Halo. Wii for the family.')
			$(".games-played").html('Medal of Honor: Allied Assault<br />Battlefield 2<br />Battlefield 3<br />Battlefield 4<br />Call of Duty 2<br />Call of Duty 4: Modern Warfare<br />Call of Duty: World at War<br />Left 4 Dead<br />Grand Theft Auto 4<br />Command & Conquer: Red Alert, Tiberian Sun, C&C3<br />StarCraft<br />Metal Gear Solid series<br />Tom Clancy’s Rainbow Six series<br />Ghost Recon series<br />Tekken series<br />Need for Speed: Shift 1 & 2<br />Street Fighter series<br />Dead Space 1 & 2<br />Counter Strike series<br />Final Fantasy 7 & 8<br />Gameboy Color: Pokemon – Blue, Gold & Silver<br />NES – Super Mario, Megaman, Duck Hunt<br />N64 – Super Smash Bros, Conker’s Bad Fur Day, 007 Goldeneye, Star Fox, Bomberman, Bust-A-Move<br />Super Puzzle Fighter II Turbo<br />')
			$(".games-now").html('I rarely play these days… unless its for JKF/JKG haha')
			$(".games-interested").html('Sleeping Dogs<br />Watch Dogs<br />Splinter Cell Blacklist<br />Dead Space 3<br />Battlefield 3<br />Ghost Recon Future Solider<br />Medal of Honor Warfighter<br />Wii U is looking pretty dope. And it’s Pro Controller.. my option, the best controller out there by far.<br />ZombieU<br />')
			$(".steam-link").attr('href', 'http://steamcommunity.com/id/justkiddinggamer')
		}else if(n==2){
			$('.jkgamer-left').html('Can Nguyen');
			$('.jkgamer-img-left').attr('src', '../images/can.png');
			$('.gaming-history').html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', '')
		}else if(n==3){
			$('.jkgamer-left').html('Sean Nguyen')
			$('.jkgamer-img-left').attr('src', '../images/sean.png')
			$(".gaming-history p").html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', 'http://steamcommunity.com/id/LeaferSN')
		}else if(n==4){
			$('.jkgamer-right').html('Devin White')
			$('.jkgamer-img-right').attr('src', '../images/devin.png')
			$(".gaming-history p").html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', 'http://steamcommunity.com/id/kidinferno')
		}else if(n==5){
			$('.jkgamer-right').html('Byron Montilla')
			$('.jkgamer-img-right').attr('src', '../images/byron.png')
			$(".gaming-history p").html('')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', '')
		}else if(n==6){
			$('.jkgamer-right').html('Josh Osei')
			$('.jkgamer-img-right').attr('src', '../images/joshmk.png')
			$(".gaming-history p").html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', '')
		}else if(n==7){
			$('.jkgamer-left').html('Brandon Choi')
			$('.jkgamer-img-left').attr('src', '../images/brandon.png')
			$(".gaming-history p").html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', '')
		}
		else if(n==8){
			$('.jkgamer-right').html('Ryan Hasegawa')
			$('.jkgamer-img-right').attr('src', '')
			$(".gaming-history p").html('No info found')
			$('.preferred-platform').html('No info found')
			$(".games-played").html('No info found')
			$(".games-now").html('No info found')
			$(".games-interested").html('No info found')
			$(".steam-link").attr('href', '')
		}




		
	}

	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="jkgamer-container">
				<div id="jkgamer-banner"></div>
				<div id="jkgamer-info">
					<h3>Welcome to the JustKiddingGamer Channel!</h3>
					<p>Here youll find all the nonsense and time killing through video games! Sed suscipit, arcu feugiat blandit pellentesque, augue ex consectetur enim, vel vestibulum mauris lacus ut ligula. Curabitur in elementum libero. Nunc viverra porttitor finibus. Pellentesque quis diam sed magna lobortis porta eu nec purus. Donec ut maximus dui. Nam efficitur porttitor tortor quis scelerisque. Fusce nec diam id orci vestibulum imperdiet. Mauris eget nibh iaculis, vehicula orci ac, sagittis nibh. Aenean maximus eros ut interdum mollis. Quisque feugiat finibus metus, ac aliquam turpis hendrerit ac.</p>
					<br />
					<p>JustKiddingGamer is a video game commentary / electronic arts and entertainment division of JustKiddingFilms.</p>
					<hr />
				</div>
				<div id="jkgamer-img">
					<h4>Choose Your Player</h4>
					<div className="jkgamer-player">
						<img src="../images/brandon.png" className="jkgamer-img-left"/>
						<img src="../images/tom.png" className="jkgamer-img-right"/>
					</div>
					<div className="jkgamer-player-name">
						<span className="jkgamer-left">Brandon Choi</span>
						<span className="jkgamer-right">Tom Trinh</span>
					</div>
					<div id="jkgamer-imgholder">
					
						<ul>
							<li id="jkg-tom" onMouseOver={ (e) => this._getPic(e, 1) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/l/t51.2885-19/11899458_1630002033926711_2045681388_a.jpg" /></li>
							<li id="jkg-brandon" onMouseOver={ (e) => this._getPic(e, 7) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xpf1/t51.2885-19/11208311_1610788745862991_1518841737_a.jpg" /></li>
							<li id="jkg-can" onMouseOver={ (e) => this._getPic(e, 2) }><img src="https://pbs.twimg.com/profile_images/614907845201412096/Eqckvvdd_400x400.jpg" /></li>
							<li id="jkg-sean" onMouseOver={ (e) => this._getPic(e, 3) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xfa1/t51.2885-19/s150x150/11380103_517422731741233_678232403_a.jpg" /></li>
							<li id="jkg-devin" onMouseOver={ (e) => this._getPic(e, 4) }><img src="https://pbs.twimg.com/profile_images/519228076710830081/pcg311NV_400x400.jpeg" /></li>
							<li id="jkg-byron" onMouseOver={ (e) => this._getPic(e, 5) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xfa1/t51.2885-19/s150x150/11909189_897003660368630_1557104799_a.jpg" /></li>
							<li id="jkg-josh" onMouseOver={ (e) => this._getPic(e, 6) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11373540_538526442963020_43538073_a.jpg" /></li>
							<li id="jkg-ryan" onMouseOver={ (e) => this._getPic(e, 8) }><img src="https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/s150x150/11909968_502987243199133_504663725_a.jpg" /></li>
						</ul>
					</div>
				</div>
				<div className="jkgamer-stats">
					<h4>Gaming History:</h4>
					<p className="gaming-history"></p>
					<br />
					<h4>Preferred Platform:</h4>
					<p className="preferred-platform"></p>
					<br />
					<h4>Games I played / followed:</h4>
					<p className="games-played"></p>
					<br />
					<h4>Games I like to play now:</h4>
					<p className="games-now"></p>
					<br />
					<h4>Games I’m interested in:</h4>
					<p className="games-interested"></p>
					<br />
					<br />
					<h5><a href="http://steamcommunity.com/groups/JustKiddingGamer" className="steam-link">STEAM</a></h5>
				</div>
			</div>
	</div>)
	}
}

class CrewView extends React.Component{

	_getInfo(e, n){
		e.preventDefault()

		if(n==1){
			$(".crew-info-img img ").attr("src",'https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11373540_538526442963020_43538073_a.jpg');
			$('.crew-info-name h3').html('Josh Osei')
			$('.crew-info-name p').html('CAST/ACTOR')
			$('.crew-info-bottom p').html('Josh is the nicest guy you will ever meet, insert more Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/dubhalo/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/user/JustKiddingParty')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/JKFilms')
		}else if(n==2){
			$(".crew-info-img img ").attr("src",'https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11248740_1644648675822021_1542276627_a.jpg');
			$('.crew-info-name h3').html('Tiffany del Real')
			$('.crew-info-name p').html('CAST/MERCH')
			$('.crew-info-bottom p').html('Tiffany blablaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/real_tiff/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/channel/UCY-TNU5jYhB6E4zfKomi1wg')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/real_tiff')
		}else if(n==3){
			$(".crew-info-img img ").attr("src",'https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11349315_726461134147633_343364563_a.jpg');
			$('.crew-info-name h3').html('Joe Jo')
			$('.crew-info-name p').html('CO-FOUNDER//WRITER/DIRECTOR/CAST')
			$('.crew-info-bottom p').html('Living la vida loca, renaissance man, wish granter, and dog whisperer')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/joe_joverdose/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/user/theuncochin')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/joverdose')
		}else if(n==4){
			$(".crew-info-img img ").attr("src",'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11055874_421765964658905_2097866349_a.jpg');
			$('.crew-info-name h3').html('Bart Kwan')
			$('.crew-info-name p').html('CO-FOUNDER/WRITER/DIRECTOR/CAST')
			$('.crew-info-bottom p').html('Raised by wolves but nurtured by Mormons, Bart has rapidly become the most distinguished root beer float authority. Armed with extreme flexibility and incredible drive, Bart enjoys petting camels and is 2 feet away from doing the splits')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/bartkwan/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/user/bartkwan')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/bartkwan')
		}
		else if(n==5){
			$(".crew-info-img img ").attr("src",'https://scontent-dfw1-1.cdninstagram.com/hphotos-xfa1/t51.2885-19/s150x150/11809808_555221697958216_1274665466_a.jpg');
			$('.crew-info-name h3').html('Geo Kwan')
			$('.crew-info-name p').html('PR/MARKETING/PRODUCER/BOOKING/CAST')
			$('.crew-info-bottom p').html('Not to be mistaken for David, is immune to the pheromones of South Africa.As deadly as a firefly on a Saturday night, Geo has been known to smack a bitch or two. I love candy.')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/geo_antoinette/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/user/GeovannaAntoinette')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/Geo_Antoinette')
		}else if(n==6){
			$(".crew-info-img img ").attr("src",'https://scontent-dfw1-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11848848_1647557055485664_587084931_a.jpg');
			$('.crew-info-name h3').html('Julia Chow')
			$('.crew-info-name p').html('CAST/DIRECTOR/PRODUCER')
			$('.crew-info-bottom p').html('Insert info about Hoolia here Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ')
			$('.crew-info-links .instagram').attr('href', 'https://instagram.com/xblueapplez/')
			$('.crew-info-links .youtube').attr('href', 'https://www.youtube.com/channel/UCfPhyExfcaqJBKc3HO3cNBw')
			$('.crew-info-links .twitter').attr('href', 'https://twitter.com/blueapplezx')
		}
	}
	render() {
		return (<div>
			<NavHeader/>
			<div id="crew-container">
				<div className="crew-img-container">
					<ul>
						<a href="#"><li id="josh" className="crew" onClick={ (e) => this._getInfo(e, 1) }></li></a>
						<a href="#"><li id="tiff" className="crew" onClick={ (e) => this._getInfo(e, 2) }></li></a>
						<a href="#"><li id="joe" className="crew" onClick={ (e) => this._getInfo(e, 3) }></li></a>
						<a href="#"><li id="bart" className="crew" onClick={ (e) => this._getInfo(e, 4) }></li></a>
						<a href="#"><li id="geo" className="crew" onClick={ (e) => this._getInfo(e, 5) }></li></a>
						<a href="#"><li id="julia" className="crew" onClick={ (e) => this._getInfo(e, 6) }></li></a>
						
					</ul>
				</div>
				
				<div className="crew-info">
					<div className="crew-info-top">
						<div className="crew-info-img">
							<img src="https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/s150x150/11934702_1691973351038251_585106453_a.jpg" />
						</div>
						<div className="crew-info-name">
							<h3></h3><p>Click on one of the crew members to see their info.</p>
							<hr />
						</div>
						<div className="crew-info-links">
							<a href="https://instagram.com/jkfilms/" className='instagram'><img src="../images/instagram.png" /></a>
							<a href="https://www.youtube.com/justkiddingfilms" className='youtube'><img src="../images/YouTube.png" /></a>
							<a href="https://twitter.com/jkfilms" className='twitter'><img src="../images/twitter.png" /></a>
						</div>
					</div>
					<div className="crew-info-bottom">
						<p></p>
					</div>
				</div>
			
			</div>
		</div>)
	}
}

class GalleryView extends React.Component{
	render() {<div>
		<NavHeader />
		<div class="gallery-container">

		</div>
	</div>}
}

class ContactView extends React.Component{
	render() {<div>
		<NavHeader />
		<div class="contact-container">

		</div>
	</div>}
}

//React.render(<AtfView />, document.body)


var Router = Backbone.Router.extend ({
	routes: {
		'justkiddingnews': 'justkiddingnews',
		'justkiddingparty': 'justkiddingparty',
		'justkiddinggamer': 'justkiddinggamer',
		'askthefeels': 'askthefeels',
		'crew': "crew",
		'*default': 'home'
	},
	justkiddingnews: () => {
		React.render(<JknewsView/>, document.body);
	},
	justkiddingparty: () => {
		React.render(<JkpartyView/>, document.body);
	},
	justkiddinggamer: () => {
		React.render(<JkgamerView/>, document.body);
	},
	askthefeels: () => {
		React.render(<AtfView/>, document.body);
	},
	crew: () => {
		React.render(<CrewView />, document.body);
	},
	home: () => {
		React.render(<HomeView />, document.body);
	},
	initialize:function() {
        Backbone.history.start()
    }
})


var router = new Router();


