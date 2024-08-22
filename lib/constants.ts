import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 137,
    name: "WMatic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  {
    chainId: 137,
    name: "HolyCow",
    symbol: "HOLYCOW",
    decimals: 18,
    address: "0xa3fdf185c7fadaf6c7690ce6a76273062b361f02",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_e7b264dc40af47e39e018146237032e0~mv2.jpeg"
  },
  {
    chainId: 137,
    name: "Goon",
    symbol: "GOON",
    decimals: 18,
    address: "0x433cde5a82b5e0658da3543b47a375dffd126eb6",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_9e52b8ac8ff841b988a602c152a2261a~mv2.jpeg"
  },
  {
    chainId: 137,
    name: "TRYAN",
    symbol: "TRYAN",
    decimals: 18,
    address: "0x550f908e06d1da4ffee6b1fb63730f88ecc4d230",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_0d5a20b0adb2481c918a46c33db599d6~mv2.jpeg"
  },
  {
    chainId: 137,
    name: "Polygon Dads",
    symbol: "DADS",
    decimals: 18,
    address: "0x04b48c9707fe5091ee772d92941f745bc0ad2b8f",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_80dfc634830a4ab5b40e21181e2fcac7~mv2.jpeg"
  },
  {
    chainId: 137,
    name: "Bonsai",
    symbol: "BONSAI",
    decimals: 18,
    address: "0x3d2bd0e15829aa5c362a4144fdf4a1112fa29b5c",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_38e52a83b45b468d9b541af158419d22~mv2.png"
  },
  {
    chainId: 137,
    name: "PolyD",
    symbol: "POLYD",
    decimals: 18,
    address: "0xb8751eaef59b5825b40fd4043a4a8dbb184cb96b",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_cd8a5e1d61b04a6a9b0dd26e04e21631~mv2.jpeg"
  },
  {
    chainId: 137,
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg"
  },
  {
    chainId: 137,
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg"
  }
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  "wmatic": {
    chainId: 137,
    name: "WrappedMatic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  "matic": {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  "holycow": {
    chainId: 137,
    name: "HolyCow",
    symbol: "HOLYCOW",
    decimals: 18,
    address: "0xa3fdf185c7fadaf6c7690ce6a76273062b361f02",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_e7b264dc40af47e39e018146237032e0~mv2.jpeg"
  },
  "goon": {
    chainId: 137,
    name: "Goon",
    symbol: "GOON",
    decimals: 18,
    address: "0x433cde5a82b5e0658da3543b47a375dffd126eb6",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_9e52b8ac8ff841b988a602c152a2261a~mv2.jpeg"
  },
  "tryan": {
    chainId: 137,
    name: "Tryan",
    symbol: "TRYAN",
    decimals: 18,
    address: "0x550f908e06d1da4ffee6b1fb63730f88ecc4d230",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_0d5a20b0adb2481c918a46c33db599d6~mv2.jpeg"
  },
  "dads":{
    chainId: 137,
    name: "Polygon Dads",
    symbol: "DADS",
    decimals: 18,
    address: "0x04b48c9707fe5091ee772d92941f745bc0ad2b8f",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_80dfc634830a4ab5b40e21181e2fcac7~mv2.jpeg"
  },
  "bonsai":{
    chainId: 137,
    name: "Bonsai",
    symbol: "BONSAI",
    decimals: 18,
    address: "0x3d2bd0e15829aa5c362a4144fdf4a1112fa29b5c",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_38e52a83b45b468d9b541af158419d22~mv2.png"
  },
  "polyd": {
    chainId: 137,
    name: "PolyD",
    symbol: "POLYD",
    decimals: 18,
    address: "0xb8751eaef59b5825b40fd4043a4a8dbb184cb96b",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_cd8a5e1d61b04a6a9b0dd26e04e21631~mv2.jpeg"
  },
  "usdc": {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg"
  },
  "usdt": {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg"
  }
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  "0xa3fdf185c7fadaf6c7690ce6a76273062b361f02": {
    chainId: 137,
    name: "HolyCow",
    symbol: "HOLYCOW",
    decimals: 18,
    address: "0xa3fdf185c7fadaf6c7690ce6a76273062b361f02",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_e7b264dc40af47e39e018146237032e0~mv2.jpeg"
  },
  "0x433cde5a82b5e0658da3543b47a375dffd126eb6": {
    chainId: 137,
    name: "Goon",
    symbol: "GOON",
    decimals: 18,
    address: "0x433cde5a82b5e0658da3543b47a375dffd126eb6",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_9e52b8ac8ff841b988a602c152a2261a~mv2.jpeg"
  },
  "0x550f908e06d1da4ffee6b1fb63730f88ecc4d230": {
    chainId: 137,
    name: "Tryan",
    symbol: "TRYAN",
    decimals: 18,
    address: "0x550f908e06d1da4ffee6b1fb63730f88ecc4d230",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_0d5a20b0adb2481c918a46c33db599d6~mv2.jpeg"
  },
  "0x04b48c9707fe5091ee772d92941f745bc0ad2b8f": {
    chainId: 137,
    name: "Polygon Dads",
    symbol: "DADS",
    decimals: 18,
    address: "0x04b48c9707fe5091ee772d92941f745bc0ad2b8f",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_80dfc634830a4ab5b40e21181e2fcac7~mv2.jpeg"
  },
  "0x3d2bd0e15829aa5c362a4144fdf4a1112fa29b5c":{
    chainId: 137,
    name: "Bonsai",
    symbol: "BONSAI",
    decimals: 18,
    address: "0x3d2bd0e15829aa5c362a4144fdf4a1112fa29b5c",
    logoURI:
      "https://static.wixstatic.com/media/438dc1_38e52a83b45b468d9b541af158419d22~mv2.png"
  },
 "0xb8751eaef59b5825b40fd4043a4a8dbb184cb96b" : {
    chainId: 137,
    name: "PolyD",
    symbol: "POLYD",
    decimals: 18,
    address: "0xb8751eaef59b5825b40fd4043a4a8dbb184cb96b",
    logoURI: "https://static.wixstatic.com/media/438dc1_cd8a5e1d61b04a6a9b0dd26e04e21631~mv2.jpeg"
  },
  "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": {
    chainId: 137,
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg"
  },

  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  }
};
