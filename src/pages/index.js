import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head >
      <title>tokensale LIVE - let's put centralized</title>
      <link rel="icon" href="download.svg" />
    </Head>
    <div className="sc-7ebcd46c-0 jdithk">
      <div class="sc-a4bfec3a-0 hbsFmE">
        <h1 class="sc-a4bfec3a-6 fJvbEo">
          Tokensale:<span>successful</span>
        </h1>
      </div>

      <div class="sc-182f7ed9-0 jENLMl">
        <div>
          <div class="sc-182f7ed9-2 cmWnGs">
            The auction was successful and the team is setting up liquidity now.
          </div>
        </div>
        <div>
          {" "}
          <button type="button" class="sc-32409cc-0 fUTVQJ">
            Connect
          </button>{" "}
        </div>
        <a
          href="https://arbiscan.io/address/0xB5a628803ee72D82098D4bcaF29a42e63531B441"
          target="_blank"
          class="sc-182f7ed9-3 iovEpw"
        >
          Click here to see the UND token on Arbiscan
        </a>
      </div>

      <div className="sc-f81a0d57-1 cZMtLi">
        <div class="sc-f81a0d57-2 fVHCMZ">
          <div class="sc-f81a0d57-4 bWtpQw">$UND Auction</div>
          <div class="sc-bcce6a81-0 fSuvUP">
            <div class="sc-bcce6a81-1 kZuFts">
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://tokensale.unstoppable.ooo/_next/static/media/check.640a9865.svg"
              />
              <div class="sc-bcce6a81-2 iiSBDu">
                Community first - no VCs, no presale, no private round, no
                whitelist, no huge insider allocations
              </div>
            </div>
            <div class="sc-bcce6a81-1 kZuFts">
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://tokensale.unstoppable.ooo/_next/static/media/check.640a9865.svg"
              />
              <div class="sc-bcce6a81-2 iiSBDu">
                Descending price auction - community decides fair valuation
              </div>
            </div>
            <div class="sc-bcce6a81-1 kZuFts">
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://tokensale.unstoppable.ooo/_next/static/media/check.640a9865.svg"
              />
              <div class="sc-bcce6a81-2 iiSBDu">
                Everybody receives the same price!
              </div>
            </div>
          </div>
          <div class="sc-46f7c67f-1 dyKZNE">
            <div class="sc-46f7c67f-0 fUtWDN">
              <div class="sc-46f7c67f-3 irNxKE">
                <div class="sc-46f7c67f-2 imWbNr">Tokens left</div>
                <div>0 UND</div>
              </div>
            </div>
          </div>
          <div class="sc-67ed1910-0 hlYbrU">
            <div class="sc-67ed1910-1 huaRrp">
              Participate<div class="sc-67ed1910-4 gakrtj">Balance: 0 ETH</div>
            </div>
            <div class="sc-67ed1910-5 kHbzbF">
              ETH
              <input
                placeholder="0.00"
                disabled=""
                class="sc-67ed1910-6 jyLuzJ"
                value=""
              />
              <button disabled="" class="sc-67ed1910-7 cRSfvU">
                MAX
              </button>
            </div>
            <button type="button" class="sc-32409cc-0 jnZPPK">
              Connect
            </button>
          </div>
        </div>
      </div>

      <div class="sc-3adc9786-0 gYMpOV">
        <div class="sc-3adc9786-1 fyjyGz">
          <div class="sc-3adc9786-2 fLtvWM">
            <h3 class="sc-3adc9786-4 DQxLC">You're not participating yet!</h3>
            <div class="sc-3adc9786-5 jRyeUq">
              <p>
                Committing earlier secures your spot in the auction and ensures
                it won't be sold out without you.
                <br />
                You are still guaranteed to get the same price as everyone else
                - including the people committing after you.
              </p>
              <p>
                Deciding to commit later allows you to wait for a lower maximum
                price, but carries the risk of the auction being sold out
                without you getting an allocation.
              </p>
            </div>
          </div>
          <div class="sc-3adc9786-2 fLtvWM">
            <h3 class="sc-3adc9786-4 DQxLC">How price is determined</h3>
            <div class="sc-3adc9786-5 jRyeUq">
              <p>
                Price declines with every block from starting price (0.000333
                ETH per UND) to floor price / soft cap (0.0000333 ETH per UND).
              </p>
              <p>
                You can commit at any point and be guaranteed to get the current
                price <i>or better</i>!
              </p>
              <p>
                Auction ends when total ETH committed equals all tokens sold at
                current price.
              </p>
            </div>
          </div>
          <div class="sc-3adc9786-2 fLtvWM">
            <h3 class="sc-3adc9786-4 DQxLC">Claiming process</h3>
            <div class="sc-3adc9786-5 jRyeUq">
              <p>
                After the auction concludes, team will set up liquidity on
                Uniswap v3.
              </p>
              <p>
                Immediately after you can claim your UND right here from this
                page.
              </p>
            </div>
            <p>&nbsp;</p>
            <h3 class="sc-3adc9786-4 DQxLC">Bonuses</h3>
            <div class="sc-3adc9786-5 jRyeUq">
              <p>
                Bonuses will be in $eUND and claimable separately a few days
                after tokensale concludes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="sc-5571fa0c-0 jaawnp">
        <h3 class="sc-5571fa0c-1 hIHlfE">Refer to Earn</h3>
        <div class="sc-5571fa0c-2 iRzlPK">
          Share your link and earn up to 5% #RealYield kickback in ETH!
        </div>
        <div>
          <button type="button" class="sc-32409cc-0 fUTVQJ">
            Connect
          </button>
        </div>
      </div>

      <div class="sc-5058a1b6-0 cvAVCZ">
        <form
          action="https://ooo.us14.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="40eb60da613fd5e19266406c1" />
          <input type="hidden" name="id" value="a9967574d3" />
          <label for="MERGE0">
            Email Address <span class="req asterisk">*</span>
          </label>
          <br />
          <br />
          <input
            type="email"
            autocapitalize="off"
            autocorrect="off"
            name="MERGE0"
            id="MERGE0"
            required=""
            class="sc-20de9e68-0 gsFpww"
            value=""
          />
          <br />
          <br />
          <div class="sc-5058a1b6-1 fpkbnT">
            <button type="submit" class="sc-32409cc-0 fUTVQJ formEmailButton">
              Subscribe
            </button>
          </div>
          <input
            type="hidden"
            name="ht"
            value="ee0d3403239671c95b3ac3f7281274636d0e687b:MTY3OTY2OTgxMi40NjY0"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>

      <div class="sc-dce8e430-0 dVhmPD">
        <div class="sc-7ebcd46c-0 jdithk">
          <div class="sc-7ebcd46c-0 jdithk sc-dce8e430-1 htmzmL">
            <a href="https://www.unstoppable.ooo/" className="footer_img" target="_blank">
              <img
                alt="Unstoppable"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="w-40 justify-center"
                style={{color:"transparent"}}
                src="download.svg"
              />
            </a>
            <div class="sc-dce8e430-2 dfjTtu">
              <a
                href="https://unstoppabledefi.notion.site/Unstoppable-DYOR-7884cc2810d2490498d3e468b7918142"
                target="_blank"
                class="sc-dce8e430-3 dSlpkS"
              >
                DYOR
              </a>
              <a
                href="https://discord.gg/3gBcsfNMK8"
                target="_blank"
                class="sc-dce8e430-3 dSlpkS"
              >
                DISCORD
              </a>
              <a
                href="https://t.me/UnstoppableFi"
                target="_blank"
                class="sc-dce8e430-3 dSlpkS"
              >
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
