require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain coconut imitate prize frame that'; 
let testAccounts = [
"0x7e93d1a00ea245a88198fbcb2570b4a318d759371249d1e2935b81525219b1e1",
"0x63584f73306e4257203090807f4aebe415a772b2c3b729b7f52d95ef30752bd0",
"0x91da1b6b7039e9a55656a1ca2e5642177bd277b4052b6eba2eaa7f8983b2e117",
"0xfa1f4811682b96cdbe83c3775fc03c62d4d983151e2a89deaa06b90e7de7aefd",
"0x64e592bfa77ace7888fa90553c1122c32c4d0c1f85a58ebdfa1c068e13a5a105",
"0x4b8ca9a408bfcd4af259bb69b0bf503923d652f271d02bf2754fdad89219836c",
"0xa7b1e8c4fe2441b452133cf6b71784b2aeddbd2b052ff4852d724da29881a135",
"0x6fe7be89179fbcd0dbc20a789e541d8c3e44092afa8c7b86c9d0541bacc2a450",
"0x6e743afec390733f5fddeafe67895d97fa382fa7fc1162250a6f3a9430b27de2",
"0xee8afc2eb0863b03b749738e5130eaecb52dea0f8d9028b88758c9bf7cba90d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
