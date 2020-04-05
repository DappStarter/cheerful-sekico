require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind hole hidden enrich swift gather'; 
let testAccounts = [
"0xc2ab858e9ae61afe7bfe4c260e03553c0c33636fd954d8f9e41afaa4a3ae267e",
"0xf4e0ca1399c2d2f30c7fa0c0c239ada2c4eaf9505c93c25cbb5e60af90baab16",
"0xbe40e508d39dd7a45852dc15096355b17c58ee956330cfebbf4e2cdb9ae4ee63",
"0x7d3ed77a9fedb954fd54d308c335ae05b7032e51c125515e997dd04247e9b546",
"0x444ac170f2acd6c912c04a8882f5b782f54aa596b5a27b695127bd21b43fa1f9",
"0x964318db98fefdf651f9dae99341b3fd132f764d91a86ff6e9d3d1af21961ccc",
"0x91b61db94651677056a2033dbd3d11f8d7f5ad4b6ddcaa6de614534a1b9208e8",
"0x7fce0fa411a7e1fd19eb30ba61fa76c19cf22e31c4773f2b83e6398e21b85a89",
"0x1698669586374b415b9d6f7f66c9ffd9d03c7838880429efcdbcc9b374fc2c13",
"0x3398ccf986f345409b58503f5447ed5e98fdb517680e942ef4eae3ff250d3fb6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
