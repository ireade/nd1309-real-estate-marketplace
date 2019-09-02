
(async function() {

    const provider = window.ethereum;
    await window.ethereum.enable();
    const web3 = new Web3(provider);

    web3.eth.getAccounts(async (err, accounts) => {

        console.log(accounts);

        const SolnSquareVerifierArtifact = await (await fetch('/contracts/SolnSquareVerifier.json')).json();

        const SolnSquareVerifier = TruffleContract({
            abi: SolnSquareVerifierArtifact.abi,
            network_id: 4,
            address: "0x4d1282a6b4B88ea1f74B783cF87e64557E4e62fa"
        });

        SolnSquareVerifier.setProvider(provider);

        const instance = await SolnSquareVerifier.deployed();

        instance.getName().then((res) => {
            console.log(res)
        });

        document.getElementById("mint").addEventListener("click", (e) => {
            e.preventDefault();

            const tokenId = document.getElementById("tokenId").value;
            console.log(tokenId)

            instance.mint(accounts[0], tokenId).then((tx) => {
                console.log(tx)
            });

        });


    });

})();
