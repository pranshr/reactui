import React from "react";


const Shareholders = () => {
	return(
		<>
					<section class="investors-section banner">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<h1>For Shareholders</h1>
					<p>Start selling your unlisted company shares without waiting to encash after IPO/ exit as you might have to wait for the event much longer than expected. You can take the first step by exploring and assessing the worth of your assets through our guidance and help.</p>
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
					           <h4 class="stay">Get liquidity by selling your shares</h4>
					           <p>You can realize what your shares are worth. You can quickly realize cash against your shares rather than wait for a long time to get an exit.</p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						<div class="col-md-9">
							<div class="access">
					           <h4 class="stay">Pay your tax liabilities for conversion of stock options</h4>
					           <p>You can liquidate part holdings as you convert your stock options to shares.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/inv2.png`} class="img-responsive center-block" />
						</div>
					</div>
				</div>
				<div class="private">
					  <div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/inv1.png`} class="img-responsive center-block" />
						</div>
						<div class="col-md-9">
							<div class="insights">
					           <h4 class="stay">Transact in a transparent and safe process</h4>
					           <p>Interact directly with buyers. Get money in escrow before transferring your shares.</p>
					        </div>
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

export default Shareholders;