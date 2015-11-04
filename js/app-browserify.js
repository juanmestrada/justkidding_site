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








$(document).ready(function(){
  window.current = 1;
  setActiveBtn(current);
  window.pause = false;
  window.sliderTimer = setInterval( go, 5000);

  $( "#home-banner" ).hover(
    function() {
      pause = true;
      //console.log("pause");
    }, function() {
      pause = false;
      //console.log("un-pause");
    }
  );
});

/* PARAMS: next index (optional), current index (optional) */
function go(){
  if(pause){
    restartTimer();
    return false;
  }

  if(arguments[1]){
    restartTimer();
  }

  var picWidth = 960,
      max = 10,
      bumpit = "",
      /* HANDLE THE PREV() INDEXING BELOW 1 */
      pos = (arguments[0] === undefined) ? ++current : ( arguments[0] === 0 ? max : arguments[0]);
  	current = (arguments[1] === undefined) ? current : ( arguments[0] === 0 ? max : arguments[0]);

  setActiveBtn(current);

  if( pos <= max ){
    bumpit = ( pos - 1 ) * picWidth;
    bumpit = "-" + bumpit + "px";
    $("#home-banner ul").animate( {left: bumpit }, 1000 );
  } else {
    current = 1;
    go(1);
  }
}

function restartTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval( go, 5000);
}

function setActiveBtn(index){
  $("#slider_btns li").removeClass("active").not( $("#slider_btns li").eq(index - 1).addClass("active") );
}







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
				<li id="links-facebook"><a href="https://www.facebook.com/JustKiddingFilms"><img src="../images/facebook.png" /></a></li>
				<li id="links-twitter"><a href="https://twitter.com/jkfilms"><img src="../images/twitter2.png" /></a></li>
				<li id="links-instagram"><a href="http://instagram.com/jkfilms/"><img src="../images/instagram.png" /></a></li>
				<li id="links-youtube"><a href="https://www.youtube.com/user/JustKiddingFilms"><img src="../images/YouTube.png" /></a></li>
			</ul>
	</div>)
	}
}

class HomeView extends React.Component{
	 constructor(props){
        super(props)
        this.rerender = () => this.forceUpdate()
    }
    componentDidMount(){

		twttr.widgets.load();
	}
	go(){
		if(pause){
			restartTimer();
			return false;
		}

		if(arguments[1]){
			restartTimer();
		}

		var picWidth = 960,
			max = 10,
			bumpit = "",
		/* HANDLE THE PREV() INDEXING BELOW 1 */
		pos = (arguments[0] === undefined) ? ++current : ( arguments[0] === 0 ? max : arguments[0]);
		current = (arguments[1] === undefined) ? current : ( arguments[0] === 0 ? max : arguments[0]);

		setActiveBtn(current);

		if( pos <= max ){
			bumpit = ( pos - 1 ) * picWidth;
			bumpit = "-" + bumpit + "px";
			$("#home-banner ul").animate( {left: bumpit }, 1000 );
		} else {
			current = 1;
			go(1);
		}
	}
	prev(){
		var prevIndex = current - 1;
  		go(prevIndex, prevIndex);
	}
	next(){

		var nextIndex = current + 1;
		go(nextIndex, nextIndex);

	}
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="home-container">
				<div id="home-banner">
					<ul>
						<li className="hb-films"><a href="https://www.youtube.com/user/JustKiddingFilms"><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/03/justkiddingfilms.jpg" /></a></li>
						<li className="hb-barb"><a href="http://barbellbrigade.com/"><img src="../images/barbell.jpeg" /></a></li>
						<li className="hb-party"><a href=""><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/05/justkiddinggamer.jpg" /></a></li>
						<li className="hb-news"><a href="https://www.youtube.com/user/JustKiddingNews"><img src="../images/jknewsbanner.jpg" /></a></li>
						<li className="hb-bart"><a href="https://twitter.com/BartKwan"><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/02/bart-copy.jpg" /></a></li>
						<li className="hb-joe"><a href="https://twitter.com/joverdose"><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/03/Joe-Banner.jpg" /></a></li>
						<li className="hb-geo"><a href="https://twitter.com/Geo_Antoinette"><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/02/Geovanna-Antoinette.jpg" /></a></li>
						<li className="hb-casey"><a href="https://twitter.com/chanmanprod"><img src="http://www.justkiddingfilms.net/wp-content/uploads/2012/02/Casey_Chan.jpg" /></a></li>
						<li className="hb-tiff"><a href="https://www.youtube.com/channel/UCY-TNU5jYhB6E4zfKomi1wg"><img src="../images/tandcbanner.png" /></a></li>
						<li className="hb-julia"><a href="https://instagram.com/xblueapplez/"><img src="../images/juliabanner.jpg" /></a></li>
					</ul>

				</div>
				<div className="buttonBox">	
					<ul id="slider_btns">
						<li onClick={ () => this.go(1,1)}></li>
						<li onClick={ () => this.go(2,2)}></li>
						<li onClick={ () => this.go(3,3)}></li>
						<li onClick={ () => this.go(4,4)}></li>
						<li onClick={ () => this.go(5,5)}></li>
						<li onClick={ () => this.go(6,6)}></li>
						<li onClick={ () => this.go(7,7)}></li>
						<li onClick={ () => this.go(8,8)}></li>
						<li onClick={ () => this.go(9,9)}></li>
						<li onClick={ () => this.go(10,10)}></li>
					</ul>	
				</div>
				<br />
				<div className="home-info">
					<p>JustKiddingFilms is a comedic phenomenon known to unabashedly tackle social, contemporary, and cultural issues, while ingeniously capturing and playing to universal sentiments. They strike a remarkable balance between stimulating and entertaining, garnering them an international fanbase of 125 million views and 706,000+ subscribers on YouTube.</p>
					<br />
					<p>Integer consequat rhoncus dolor, tristique blandit diam gravida sed. Donec faucibus quis est in semper. Nunc malesuada arcu eu massa viverra, a suscipit est cursus. Aenean id libero a nulla malesuada placerat. Pellentesque vehicula ligula ac arcu lacinia blandit id ut mi. Sed mi purus, interdum a augue sed, venenatis ultricies ipsum. Nunc quis arcu vitae sapien finibus imperdiet sit amet a odio. Mauris a odio at arcu gravida venenatis eget non lectus. Ut a eleifend nulla, nec suscipit lectus. Quisque suscipit interdum lorem, blandit malesuada quam laoreet at. Integer posuere eleifend quam, nec venenatis neque vulputate eget.</p>
					<br />
					<p>Integer consequat rhoncus dolor, tristique blandit diam gravida sed. Donec faucibus quis est in semper. Nunc malesuada arcu eu massa viverra, a suscipit est cursus. Aenean id libero a nulla malesuada placerat. Pellentesque vehicula ligula ac arcu lacinia blandit id ut mi. Sed mi purus, interdum a augue sed, venenatis ultricies ipsum. Nunc quis arcu vitae sapien finibus imperdiet sit amet a odio. Mauris a odio at arcu gravida venenatis eget non lectus. Ut a eleifend nulla, nec suscipit lectus. Quisque suscipit interdum lorem, blandit malesuada quam laoreet at. Integer posuere eleifend quam, nec venenatis neque vulputate eget.</p>

				</div>
			</div>	
			<div  className="home-tweets">
				<a className="twitter-timeline" href={this.props.link} data-widget-id={this.props.widgetId}>Tweets by @JKFilms</a>
			</div>
		</div>)
	}
}

class AtfView extends React.Component{
	componentDidMount(){
    	
		twttr.widgets.load();
	}
	
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="atf-container">
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
						
					<iframe src="https://snapwidget.com/sl/?u=YXNrdGhlZmVlbHN8aW58NTAwfDN8M3x8bm98NXxub25lfG9uU3RhcnR8eWVzfG5v&ve=011115" title="Instagram Widget" className="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no" ></iframe>
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
	componentDidMount(){
    	
		twttr.widgets.load();
	}
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
	componentDidMount(){
    	
		twttr.widgets.load();
	}
	render() {
		return (<div>
			<NavHeader />
			<LinksView />
			<div id="jkparty-container" >
				<div id="jkparty-banner"></div>
				<div id="jkparty-info">
					<h3>Welcome to JustKiddingParty</h3>
					<p>Watch the crew play games, do challenges, but overall act crazy</p>
					<br />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</div>
				<div id="jkparty-youtube">
					<iframe className="jkparty-video" width="560" height="315" src="https://www.youtube.com/embed/uQ3b1P2swcw?list=PLhR2n_62Lv1cYgOrt4icNuzmB69EfFAay" frameBorder="0" allowfullscreen="true"></iframe>	
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
			<LinksView />
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

		React.render(<HomeView link='https://twitter.com/JKFilms' widgetId='660182203867901952'/>, document.body);
	},
	initialize:function() {
        Backbone.history.start()
    }
})


var router = new Router();


