import React from "react";


const Investors = () => {
	return(
		<>
					<section class="investors-section banner">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<h1>For Investors</h1>
					<p>Get easy access to our marketplace. Quickly interact, negotiate, close deal and transact with verified buyers and verified inventories. Get transparer quick liquidity for your unlisted stocks. Interact with thousands of potential buyers and sellers.Access company details, available investment opportunities, premium services using the platform.</p>
				</div>
				<div class="col-md-5"><img src={`${process.env.PUBLIC_URL}/assets/images/inv-banner.png`} class="img-responsive center-block" /></div>
			</div>
		</div>
	</section>


				<section class="investors">
		<div class="container">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-10">
					<div class="private">
					  <div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/inv1.png`} class="img-responsive center-block" />
						</div>
						<div class="col-md-9">
							<div class="insights">
					           <h4 class="stay">Get insights to Unlisted Companies</h4>
					           <p>We provide you with all the information on companies, their regulatory filings, price trends and our assessment notes.</p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						<div class="col-md-9">
							<div class="access">
					           <h4 class="stay">Get access to high growth and high potential Private Companies</h4>
					           <p>You get opportunities to companies which you dream of owning. These are companies who's services you use frequently and want to become a part of their growth stories.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/inv2.png`} class="img-responsive center-block" />
						</div>
					</div>
				</div>
				</div>
				<div class="col-md-2"></div>
			</div>
		</div>
	</section>
		</>
	);
}

export default Investors;