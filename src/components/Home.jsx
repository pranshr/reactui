import React, {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';


const Home = () => {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('http://13.127.179.126:8080/company/findAll')
			.then(res => {
				console.log(res)
				setPosts(res.data)
				
			})
			.catch(err => {
				console.log(err)
			})
	})

	return(
		<>
			<section class="banner">
		<div class="container">
			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">

		  <ol class="carousel-indicators">
		    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		    <li data-target="#myCarousel" data-slide-to="1"></li>
		    <li data-target="#myCarousel" data-slide-to="2"></li>
		  </ol>


  <div class="carousel-inner">
    <div class="item active">
    	<div class="row">
    		<div class="col-md-7">
    			<h1>Promoting escrow based safe<br/>transactions for buying/selling<br/>of unlisted assets</h1>
					<p><a href="#">Buyer</a>
					<a href="#">Seller</a></p>
    		</div>
    		<div class="col-md-5"><img src={`${process.env.PUBLIC_URL}/assets/images/slider1.png`} class="img-responsive center-block" /></div>
    	</div>
    </div>
	<div class="item">
    	<div class="row">
    		<div class="col-md-7">
    			<h1>Promoting escrow based safe<br/>transactions for buying/selling<br/>of unlisted assets</h1>
					<p><a href="#">Buyer</a>
					<a href="#">Seller</a></p>
    		</div>
    		<div class="col-md-5"><img src={`${process.env.PUBLIC_URL}/assets/images/slider2.png`} class="img-responsive center-block" /></div>
    	</div>
    </div>
    <div class="item">
    	<div class="row">
    		<div class="col-md-7">
    			<h1>Promoting escrow based safe<br/>transactions for buying/selling<br/>of unlisted assets</h1>
					<p><a href="#">Buyer</a>
					<a href="#">Seller</a></p>
    		</div>
    		<div class="col-md-5"><img src={`${process.env.PUBLIC_URL}/assets/images/slider3.png`} class="img-responsive center-block" /></div>
    	</div>
    </div>
  </div>

  
  

			</div>
		</div>
	</section>
		<section class="main-section">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					
				</div>
				<div class="col-md-5"></div>
			</div>
		</div>
	</section>

	<section class="second-section">
		<div class="container">
			<div class="row">
					<div class="row">
						<div class="col-md-6">
							<h2><strong>Companies currently available <br/>for trade</strong></h2>
						</div>
						
					</div>
					<div class="row">

						{ posts.map(posts => 
						
						<div class="col-md-3">
							<div class="box">
							    <div class="box1">
								    <div class="row">
									    <div class="col-md-2 col-xs-2">
									    	<div class="border1">
									     <img src={'../assets/images/sunphar.png'} class="center-block" />
									 </div>
									     </div>
									     <div class="col-md-8 col-xs-8 pl-25">
										<p class="p2 text-bold" >{posts.title}</p>
										<p class="pharmacy">{posts.c_category}</p>
										<p class="pharmacy">{posts.c_id}</p>
									    </div>
									    <div class="col-md-2 col-xs-2">
										<p class="plus1"><Link to={"/Cdetail/" + (posts.id)}><img src={`${process.env.PUBLIC_URL}/assets/images/add.png`} alt="add" /></Link></p>
									    </div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="value">
										<p>Valuation<span class="pull-right text-bold">{posts.valuation}</span></p>
										<p>Series of Funding<span class="pull-right text-bold">{posts.funding}</span></p>
										<p>{posts.description}</p>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>

						)}

					</div>
			
					<div class="row">
						<div class="col-md-12">
							<div class="view">
						<p class="text-center p1"><Link to="/Companies">View All</Link></p>
						</div>
						</div>
					</div>
			</div>
		</div>
	</section>


		<section class="third-section">
		<div class="container">
			<div class="row">
				<h2 class="text-center"><strong>Why invest in Unlisted<br/> Shares?</strong></h2>
				<div class="col-md-6">
				<div class="invest">
					<img src={`${process.env.PUBLIC_URL}/assets/images/highvalue.png`} />
					<p class="invest-p">Several unlisted companies including start-up companies have unique and high growth business models. </p>
					
				</div>
				</div>
				<div class="col-md-6">
				<div class="invest">
					<img src={`${process.env.PUBLIC_URL}/assets/images/peace.png`} />
					<p class="invest-p">Investment in unlisted shares offers huge potential of returns wherein substantial value unlocking usually happens when they go for IPOs</p>
					
				</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
				<div class="invest1">
					<img src={`${process.env.PUBLIC_URL}/assets/images/growth.png`} />
					<p class="invest-p">Absence of leverage makes these investments in unlisted shares as stable investment opportunities </p>
					
				</div>
				</div>
				<div class="col-md-6">
				<div class="invest1">
					<img src={`${process.env.PUBLIC_URL}/assets/images/diver.png`} />
					<p class="invest-p">Unexplored growth potential exist in several unlisted securities which are available at substantial discount to their intrinsic value as also to their listed peers</p>
					
				</div>
				</div>
				<div class="col-md-6">
				<div class="invest1">
					<img src={`${process.env.PUBLIC_URL}/assets/images/diver.png`} />
					<p class="invest-p">These offer enormous wealth creation opportunity to informed investors having discretionary corpus</p>
					
				</div>
				</div>
			</div>
		</div>
	</section>

		<section class="forth-section">
		<div class="container">
				<h2>Why Unlisted Shares?</h2>
				<div class="row">
				<div class="col-md-1 pr0"><img src={`${process.env.PUBLIC_URL}/assets/images/3.png`} /></div>
					<div class="col-md-10 pl0">
						
				        <p>Because of their lower base, many start-ups are growing much faster than the older generation companies and they continue to outperform the benchmark returns significantly. Much of this development, however, happens before the firm goes public with an IPO. Hence investing in the Growth / Pre IPO stage in these companies will provide the investor with early- mover advantage resulting in superior returns. </p>
				        <p>We fulfil the intrinsic need of the buyers for a safe platform that gives them access to high-quality shares at the best price, provide trade matching and even allows retail purchases. Moreover, it is very easy and economical to buy stocks in these start-ups & private companies just as venture capitalists do without spending huge money.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
				<div class="space">
				<div class="row">
				    <div class="col-md-1  pr0">
					<img  src={`${process.env.PUBLIC_URL}/assets/images/2.png`} />
					</div>
					<div class="col-md-10 pl0">
						<p class="listed">Huge return potential</p>
				        <p>Investment in unlisted shares offers huge return potential, however value unlocking usually happens when they go for IPOs.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
				</div>
				<div class="space">
				<div class="row">
				<div class="col-md-1 pr0"><img src={`${process.env.PUBLIC_URL}/assets/images/4.png`} />
					</div>
					<div class="col-md-10 pl0">
						<p class="listed">Value of shares increases</p>
				        <p>Value of shares also usually increases when a startup goes for a fresh round of funding.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
			</div>
			<div class="space">
				<div class="row">
				<div class="col-md-1 pr0"><img src={`${process.env.PUBLIC_URL}/assets/images/1.png`} />
					</div>
					<div class="col-md-10 pl0">
						<p class="listed">Stable investment opportunity</p>
				        <p>Absence of leverage makes it a stable investment opportunity driven usually by business rationale.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
			</div>
			<div class="space">
				<div class="row">
				<div class="col-md-1 pr0"><img src={`${process.env.PUBLIC_URL}/assets/images/5.png`} />
					</div>
					<div class="col-md-10 pl0">
						<p class="listed">Greater future profit potential</p>
				        <p>Investors should look for such opportunities where unlisted securities are trading at a substantial discount to their listed peers and also their own intrinsic business worth, thus offering greater future profit potential.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
			</div>
			<div class="space">
				<div class="row">
				<div class="col-md-1 pr0"><img src={`${process.env.PUBLIC_URL}/assets/images/7.png`} />
					</div>
					<div class="col-md-10 pl0">
						<p class="listed">Suitable for informed investors</p>
				        <p>They are suitable for informed investors with discretionary corpus.</p>
				   </div>
				   <div class="col-md-1"></div>
				</div>
			</div>
		</div>
	</section>

		<section class="last-section">
		<div class="container">
			<h2>Which companies’ shares <br/>
			do we work with?</h2>
			<div class="row">
				<div class="col-md-7">
					<p>We work as marketplace for all sort of unlisted companies primarily focusing on secondary transactions in the following companies:</p>
					<p>&diams; Venture Capital (VC)/Private Equity (PE) backed companies</p>
					<p>&diams; Late-stage VC or PE backed companies which are planning or in the process of IPO evincing maximum public interest and getting formalised price discovery;</p>
					<p>&diams; Rapidly growing companies having good visibility in press and/or business models with proven unit economics</p>
					<p>&diams; Pre-IPO companies other than those funded by VCs or PEs</p>
					<p>&diams; Operating companies delisted from stock exchanges </p>
					<p>&diams; Indian businesses which are part of company registered outside India </p>
				</div>
				<div class="col-md-5">
					<p class="orange"><img src={`${process.env.PUBLIC_URL}/assets/images/last.png`} class="img-responsive" /></p>
				</div>
			</div>
		</div>
	</section>

		<section class="addsection">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<h2>Explore our Investing Platform</h2>
					<p>Explore the world of opportunities for investing in unlisted companies. Interact with thousands of buyers and sellers. Buy/Sell unlisted shares through a hassle free and safe transaction supported by escrow of funds by Bank.</p>
					<p><a href="#" class="btn1">Try Our Platform</a></p>
				</div>
			</div>
		</div>
	</section>
			



		</>
	);
}

export default Home;