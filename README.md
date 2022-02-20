![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/DAO-NFT-Bank.png)
# Submission for the NEAR MetaBUILD Hackathon



# DAO NFT Bank System



#  Project submission information


## 1. Project name

DAO NFT Bank System

## 2. Elevator pitch

DAO NFT Bank System can deposit ERC20 tokens into banks for lock-up, and can obtain NFT rewards with ERC721 attributes. In this way, the circulation of ERC20 tokens can be controlled and the currency price can be increased.


## 3. Team Name

RainbowCity Foundation

## 4. Submission links

In this NEAR MetaBUILD Hackathon event, RainbowCity Foundation submitted a total of 10 projects, which is the  address directory of the 10 projects as follows. We are continuing to update the details of each project.

- Submission address directory:
- https://www.rainbowdao.io/NearMetaBUILD



- Project demo website:
- https://nftbanknear.rainbowdao.io/
- GitHub repository :
- https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank
- Solidity-Version-contract (GitHub): 
- https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/tree/main/Solidity-version-contract-for-Aurora
- Frontend code (GitHub):
- https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/tree/main/Front-end-for-Solidity-version
- Picture (GitHub): 
- https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/tree/main/pic


## 5. Recorded video demo

https://youtu.be/dHxKjItUKFw

## 6. Testnet Deployment Information


- Aurora testnet address: 

https://testnet.aurora.dev/


- Contract deployment address

ERC20FACTORY : 

0x12bC5979b3FC62a37cB315df3Ac3A5cA44883276

RBBANKORCHESTRATOR:  

0xC8C40976B19F737869Db914D9730EbfB45117A5A

LOANMARKETORCHESTRATOR:  

0xB785075E06933084ec81De0928f6594d0Fd87CFd network

RBTDEPOSITORCHESTRATOR:  

0x0D825347237bbd004bb3F7530d4988497B222874 network

TOKENEXCHANGEMARKETORCHESTRATOR : 

0x4d2d023e0797e59f50C9d154c1646c64aE412C29 network

RBTDEPOSIT721:  

0x0143971fDE2983d0a3fF1c5E4fd9e19A4841887b



Frontend docs:

https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/blob/main/Front-end-for-Solidity-version/README.md

Contract  docs: 

https://github.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/blob/main/Solidity-version-contract-for-Aurora/README.md



## 7.What is the RainbowCity Foundation？

Headquartered in Singapore, RainbowCity Foundation is a non-profit foundation founded by Mr. Kunyuan, which mainly engages in the incubation and investment of the crypto ecosystem. Being a big fan of Bitcoin, Mr. Kunyuan worships Satoshi Nakamoto and dedicates himself to the spread of Satoshi Nakamoto’s great ideas of decentralization. He once put forward the concept of “Bit Civilization” for the first time in the world in July 2021 at the Bitcointalk Forum established by Satoshi Nakamoto. Moreover, he wrote over 60 articles to promote Bitcoin, in the hope of fostering the development of the encryption industry worldwide and practicing the true Bitcoin spirit.

Mr. Kunyuan has had rich experiences in the crypto world. At one time, he was the highest community leader of FCoin, the most influential community exchange in the Chinese world. In November 2018, in a referendum on the FCoin exchange, Mr. Kunyuan was elected the first community committee member and then appointed vice Chairman to fully preside over the work of the FCoin community.

Mr. Kunyuan believes that a super economic powerhouse will emerge in the mankind history in the future; a crypto world which is constructed in the form of decentralized protocols that transform all different decentralized behaviors into a unified economy. He believes it will ultimately become the infrastructure of human civilization and this is in which the RainbowCity foundation originates from this belief.

The RainbowCity Foundation aims to invest in seven major industries in the following ten years, including Rainbow DeFi, Rainbow Investment, Rainbow Culture, Rainbow Network, Rainbow Industry, Rainbow Education and Rainbow R&D. It strives to become a super economic hub with market value worth one trillion US dollars.


## 8.Project social media: 

RainbowDAO website ：http://www.rainbowdao.io

RainbowCity website ：https://www.rainbowcity.io

Twitter:    https://twitter.com/RainbowDAOio

Discord     https://discord.gg/vbnvFEeYRr   

Telegram: https://t.me/RainbowDAO

Medium:   https://medium.com/rainbowcity

Github:    https://github.com/RainbowDAO

Email： Rainbowcitydao@gmail.com



#  Project Story

## 1. Inspiration



In all types of DAO organizations, the hedging management of governance Token is a vitally important job. How to guide the community members to hedge Tokens is a critical module in terms of the liquidity of the governance Token management. As many governance Tokens lack a hedging system, when the flow of Token becomes greater and greater, the actual value of Token will continue to decrease to lead to the final failure of the whole project. With this inspiration and to tackle the problem, we designed and developed a DAO NFT Bank System that can guide the community members to hedge Tokens. This is the first application scenario of the system.



DAO NFT Bank System has another application scenario that enables hedging when a new project initializes and the initial coins are distributed to all VC and seed users. In this way, we cam make it happen that the respective ERC20 Tokens can be deposited into our NFT Bank system with a relative hedging date and an NFT certificate. These NFT certificates are considered the initial investing proof. This can completely solve the pivotal hedging issue the initial investors have, which is also the second important application scenario of this Bank system.



## 2. What it does



DAO NFT Bank System is one of the DAO infrastructure products developed by the RainbowCity Foundation, providing the governance Token hedging banks and NFT motivation system for all of the DAO organizations. This system is designed to lock position of governance Token. NFTs can be rewarded based on the position locking timing and amount. Simply it means that one can deposit ERC20 governance tokens into the hedging bank to get the NFT certificate in the form of ERC721, which is categorized into financial NFT. The rewarded NFT certificates are the equivalent of ERC20 Token deposit receipts. In the future, the NFT deposit receipt holders can withdraw the relative ERC20 governance Tokens by the time of validity.



Meanwhile, in order to guarantee the liquidity of the deposited ERC20 governance Tokens, we developed an NFT mortgage and loan market and an NFT transfer market for NFT deposit receipts. The NFT mortgage and loan market can get loans from the market by pledging the NFT deposit receipts. The NFT certificates can be cashed in the NFT transfer market by transferring the ownership.

## 3. How we built it

![image](https://raw.githubusercontent.com/RainbowDAO/01-Near-MetaBUILD-RainbowDAO-Factory/main/pic/Logic-diagram/02-Logic-diagram-of-DAO-NFT-Bank.png)

⑴  Create an ERC Token using the ERC20 factory and set basic information such as Token name, circulation, logo, decimals etc.

⑵  Create a DAO NFT bank with bank's name, mortgaged governance Token address, time set-up of the mortgage and NFT's title.

⑶   NFT badge contains information as follows: NFT serial No., NFT initial creator, NFT current holder, NFT lock-position time, NFT whole governance badge name, NFT whole governance badge quantity, lock-position end time, lock-position remaining days, withdrawal button.

⑷   Pledge governance Tokens and create an NFT badge: choose deposit amount, choose deposit duration, complete NFT badge.

⑸  To get the liquidity during the mortgage period, we can pledge the NFT badges in the mortgage and loan market to get borrow certain amount of money.

⑹   Loaning orders contain information as follows: loan Token, loan amount, loan period, loan start time, estimated payment date, remaining days, loan rates, loan actual interests and payback. 

⑺   To get the liquidity during mortgage, one can sell their NFT badges in the transfer market.

⑻   The transfer market orders contain information as below: order serial No., NFT serial No., NFT initial creator, NFT current holder, NFT set time, NFT expiry date, unlock remaining time, NFT transfer price, whole Token amount and transfer fees.

⑼   Anyone can buy the available NFTs through the transfer market and gain tokens included in this NFT. As soon as the hedging date expires, one can get withdraw the token from the bank with the NFT lock-position badge.



## 4. Challenges we ran into



In the process of developing this system, how to regain the liquidity of the ERC20 tokens once they are position-locked into the bank was our greatest challenge. Only solving this problem can ensure the community members to choose lock-position.



To resolve this problem, we brought up two solutions. The first one is to establish an NFT mortgage and loan market. All community members can pledge the NFT certificates to the market to get money. In this scenario, community members can get some liquid fund without losing the NFT certificates.



The second solution is to build an NFT transfer market to make freely transfer NFT certificates possible. When community members who own the locked NFTs can not wait until the lock-position expiry date, they can directly sell the NFT certificates in the transfer market to get the liquidity.  Of course, the transfer of NFT certificates means losing the ERC20 tokens locked in NFTs.



These two solutions mentioned can meet the community members diverse needs. On one hand, the liquidity of ERC20 governance tokens can be locked up and on the other hand, it can be released again in the form of NFT to make the financial assets circulate.  



## 5. Accomplishments that we're proud of



In the process of developing this system, it was our greatest pride to innovate the financial NFT assets.

Different from the traditional NFT, the financial NFTs have their real assets to back up. They transform finance's benefits to the form of NFT to be able to circulate and transfer.



## 6. What we learned



In the process of development, we had learned how to combine ERC20 token with ERC721 token in synergy and let them exchange freely. Meantime, the innovated application scenario was about to open a blue sea for the financial NFT market.




## 7. What's next for DAO NFT bank？



In the next move, we will cautiously examine the product logics behind DAO NFT bank, reconstruct and upgrade code to make a complete application-marketable product come true.

After the product logics and codes are audited by our team, we will make a proposal to the external audit. Ultimately this product will be realistically deployed on the public-chain networks to provide diverse service for all types of DAO organizations.




#  Project UI



## 1-Create-NFT-Bank




![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/1-Create-NFT-Bank.png)



## 1-My-Loan-Information



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/1-My-Loan-Information.png)




## 1-Token-Assignment-Market-Buy



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/1-Token-Assignment-Market-Buy.png)




## 2-Create-NFT-Bank



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/2-Create-NFT-Bank.png)




## 2-My-Loan-Information-Order




![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/2-My-Loan-Information-Order.png)




## 2-Token-Assignment-Market-Buy



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/2-Token-Assignment-Market-Buy.png)




## 3-My-Loan-Information-Order



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/3-My-Loan-Information-Order.png)




## 3-NFT-Bank-Home



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/3-NFT-Bank-Home.png)




## 3-Token-Assignment-Market-Sell



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/3-Token-Assignment-Market-Sell.png)




## 4-Already-Lent-Out



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/4-Already-Lent-Out.png)




## 4-NFT-Bank-Stake



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/4-NFT-Bank-Stake.png)




## 4-Token-Assignment-Market-Sell



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/4-Token-Assignment-Market-Sell.png)




## 5-Borrowing-Market



![image](https://raw.githubusercontent.com/RainbowDAO/02-Near-MetaBUILD-DAO-NFT-bank/main/pic/5-Borrowing-Market.png)
